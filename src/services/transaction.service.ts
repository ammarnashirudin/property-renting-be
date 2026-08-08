import { ORDER_STATUS, PAYMENT_STATUS } from "../generated/prisman";
import {prisma} from "../lib/prisma";
import { cloudinaryUpload } from "../utils/cloudinary";
import { createCustomError } from "../utils/customError";

const ONE_HOUR = 60 * 60 * 1000;
const DAY = 24 * 60 * 60 * 1000;
const pendingStatuses: ORDER_STATUS[] = [
  ORDER_STATUS.Menunggu_Pembayaran,
  ORDER_STATUS.Menunggu_Konfirmasi_Pembayaran,
];

function parseDate(value: unknown, field: string) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    throw createCustomError(400, `${field} harus berformat YYYY-MM-DD`);
  }

  const date = new Date(`${value}T00:00:00.000Z`);
  if (Number.isNaN(date.getTime())) throw createCustomError(400, `${field} tidak valid`);
  return date;
}

function startOfToday() {
  const now = new Date();
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
}

function toOrderDto(order: any) {
  return {
    id: order.id,
    roomId: order.roomId,
    roomName: order.room.name,
    propertyName: order.room.property.name,
    checkIn: order.checkIn.toISOString().slice(0, 10),
    checkOut: order.checkOut.toISOString().slice(0, 10),
    totalPrice: order.totalPrice,
    status: order.status,
    paymentMethod: order.paymentMethod,
    paymentProof: order.paymentProof,
    expiresAt: order.expiresAt?.toISOString() ?? null,
    createdAt: order.createdAt.toISOString(),
  };
}

async function calculateTotal(room: any, checkIn: Date, checkOut: Date) {
  let total = 0;
  for (let date = new Date(checkIn); date < checkOut; date = new Date(date.getTime() + DAY)) {
    const peak = room.peakRates.find((rate: any) => rate.startDate <= date && rate.endDate >= date);
    if (!peak) {
      total += room.basePrice;
    } else if (peak.type === "PERCENT") {
      total += room.basePrice * (1 + peak.value / 100);
    } else {
      total += room.basePrice + peak.value;
    }
  }
  return total;
}

async function findUserOrder(orderId: number, userId: number) {
  const order = await prisma.order.findFirst({
    where: { id: orderId, userId },
    include: { room: { include: { property: true } } },
  });
  if (!order) throw createCustomError(404, "Pesanan tidak ditemukan");
  return order;
}

export const transactionService = {
  async createReservation(userId: number, payload: any) {
    const roomId = Number(payload.roomId);
    if (!Number.isInteger(roomId) || roomId <= 0) throw createCustomError(400, "roomId tidak valid");

    const checkIn = parseDate(payload.checkIn, "checkIn");
    const checkOut = parseDate(payload.checkOut, "checkOut");
    if (checkIn < startOfToday()) throw createCustomError(400, "Tanggal check-in tidak boleh di masa lalu");
    if (checkOut <= checkIn) throw createCustomError(400, "Tanggal check-out harus setelah check-in");

    const paymentMethod = payload.paymentMethod === "PAYMENT_GATEWAY" ? "PAYMENT_GATEWAY" : "MANUAL_TRANSFER";
    const expiresAt = new Date(Date.now() + ONE_HOUR);

    const order = await prisma.$transaction(async (tx) => {
      const room = await tx.room.findUnique({
        where: { id: roomId },
        include: { peakRates: true },
      });
      if (!room) throw createCustomError(404, "Kamar tidak ditemukan");
      if (checkIn < room.startDate || checkOut > room.endDate) {
        throw createCustomError(400, "Kamar tidak tersedia pada rentang tanggal tersebut");
      }

      const [blockedDates, conflict] = await Promise.all([
        tx.roomAvailability.findFirst({
          where: { roomId, date: { gte: checkIn, lt: checkOut }, isAvailable: false },
        }),
        tx.order.findFirst({
          where: {
            roomId,
            status: { in: [...pendingStatuses, ORDER_STATUS.Dikonfirmasi] },
            checkIn: { lt: checkOut },
            checkOut: { gt: checkIn },
          },
        }),
      ]);
      if (blockedDates || conflict) throw createCustomError(409, "Kamar tidak tersedia pada rentang tanggal tersebut");

      const totalPrice = await calculateTotal(room, checkIn, checkOut);
      return tx.order.create({
        data: { userId, roomId, checkIn, checkOut, totalPrice, expiresAt, paymentMethod, status: ORDER_STATUS.Menunggu_Pembayaran },
        include: { room: { include: { property: true } } },
      });
    }, { isolationLevel: "Serializable" });

    return toOrderDto(order);
  },

  async listMyOrders(userId: number, query: { keyword?: unknown; date?: unknown; status?: unknown }) {
    const keyword = typeof query.keyword === "string" ? query.keyword.trim() : "";
    const status = typeof query.status === "string" ? query.status : undefined;
    const date = query.date ? parseDate(query.date, "date") : undefined;
    const nextDate = date ? new Date(date.getTime() + DAY) : undefined;
    const orders = await prisma.order.findMany({
      where: {
        userId,
        ...(keyword && /^\d+$/.test(keyword) ? { id: Number(keyword) } : {}),
        ...(status && Object.values(ORDER_STATUS).includes(status as ORDER_STATUS) ? { status: status as ORDER_STATUS } : {}),
        ...(date && nextDate ? { checkIn: { gte: date, lt: nextDate } } : {}),
      },
      include: { room: { include: { property: true } } },
      orderBy: { createdAt: "desc" },
    });
    return orders.map(toOrderDto);
  },

  async cancelOrder(orderId: number, userId: number) {
    const order = await findUserOrder(orderId, userId);
    if (order.status !== ORDER_STATUS.Menunggu_Pembayaran || order.paymentProof) {
      throw createCustomError(409, "Pesanan hanya dapat dibatalkan sebelum bukti pembayaran diunggah");
    }
    return prisma.order.update({ where: { id: orderId }, data: { status: ORDER_STATUS.Dibatalkan } });
  },

  async uploadPaymentProof(orderId: number, userId: number, file?: Express.Multer.File) {
    if (!file) throw createCustomError(400, "Bukti pembayaran wajib diunggah");
    const order = await findUserOrder(orderId, userId);
    if (order.paymentMethod !== "MANUAL_TRANSFER") throw createCustomError(409, "Pesanan ini harus dibayar melalui payment gateway");
    if (order.status !== ORDER_STATUS.Menunggu_Pembayaran || !order.expiresAt || order.expiresAt <= new Date()) {
      throw createCustomError(409, "Waktu unggah bukti pembayaran telah berakhir");
    }

    const uploaded = await cloudinaryUpload(file, "payment-proofs");
    const updated = await prisma.order.update({
      where: { id: orderId },
      data: {
        paymentProof: uploaded.secure_url,
        status: ORDER_STATUS.Menunggu_Konfirmasi_Pembayaran,
        paymentLogs: { create: { status: PAYMENT_STATUS.Pembayaran_Diterima, note: "Bukti pembayaran diunggah; menunggu verifikasi tenant" } },
      },
      include: { room: { include: { property: true } } },
    });
    return toOrderDto(updated);
  },

  async confirmManualPayment(orderId: number, tenantUserId: number, approved: boolean) {
    const order = await prisma.order.findFirst({
      where: { id: orderId, room: { property: { tenant: { userId: tenantUserId } } } },
      include: { room: { include: { property: true } } },
    });
    if (!order) throw createCustomError(404, "Pesanan tidak ditemukan");
    if (order.status !== ORDER_STATUS.Menunggu_Konfirmasi_Pembayaran) throw createCustomError(409, "Pesanan tidak menunggu konfirmasi pembayaran");

    const updated = await prisma.order.update({
      where: { id: orderId },
      data: {
        status: approved ? ORDER_STATUS.Dikonfirmasi : ORDER_STATUS.Menunggu_Pembayaran,
        ...(approved ? { expiresAt: null } : { paymentProof: null }),
        paymentLogs: { create: { status: approved ? PAYMENT_STATUS.Pembayaran_Diterima : PAYMENT_STATUS.Pembayaran_Ditolak, note: approved ? "Pembayaran manual disetujui tenant" : "Bukti pembayaran ditolak tenant" } },
      },
      include: { room: { include: { property: true } } },
    });
    return toOrderDto(updated);
  },

  async handleGatewayPayment(orderId: number, status: "PAID" | "FAILED") {
    const order = await prisma.order.findUnique({ where: { id: orderId }, include: { room: { include: { property: true } } } });
    if (!order) throw createCustomError(404, "Pesanan tidak ditemukan");
    if (order.paymentMethod !== "PAYMENT_GATEWAY") throw createCustomError(409, "Metode pembayaran pesanan tidak sesuai");
    if (order.status !== ORDER_STATUS.Menunggu_Pembayaran) return toOrderDto(order);

    const updated = await prisma.order.update({
      where: { id: orderId },
      data: {
        ...(status === "PAID" ? { status: ORDER_STATUS.Dikonfirmasi, expiresAt: null } : {}),
        paymentLogs: { create: { status: status === "PAID" ? PAYMENT_STATUS.Pembayaran_Diterima : PAYMENT_STATUS.Pembayaran_Ditolak, note: `Payment gateway: ${status}` } },
      },
      include: { room: { include: { property: true } } },
    });
    return toOrderDto(updated);
  },

  async expireUnpaidOrders() {
    const expiredOrders = await prisma.order.findMany({
      where: {
        status: ORDER_STATUS.Menunggu_Pembayaran,
        expiresAt: {
          lt: new Date(),
        },
      },
    });

    for (const order of expiredOrders) {
      await prisma.order.update({
        where: {
          id: order.id,
        },
        data: {
          status: ORDER_STATUS.Dibatalkan,
          expiresAt: null,
          paymentLogs: {
            create: {
              status: PAYMENT_STATUS.Pembayaran_Ditolak,
              note:
                "Booking otomatis dibatalkan karena melewati batas waktu pembayaran.",
            },
          },
        },
      });
    }

    return expiredOrders.length;
  },

  async completeFinishedOrders() {
    const completedOrders = await prisma.order.findMany({
      where: { status: ORDER_STATUS.Dikonfirmasi, checkOut: { lte: startOfToday() } },
    });

    for (const order of completedOrders) {
      await prisma.order.update({
        where: { id: order.id },
        data: { status: ORDER_STATUS.Selesai },
      });
    }

    return completedOrders.length;
  },
};
