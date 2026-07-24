import { NextFunction, Request, Response } from "express";
import crypto from "crypto";
import { PAYMENT_GATEWAY_WEBHOOK_SECRET } from "../configs/env.config";
import { transactionService } from "../services/transaction.service";
import { createCustomError } from "../utils/customError";

function orderId(value: string | string[]) {
  const id = Number(Array.isArray(value) ? value[0] : value);
  if (!Number.isInteger(id) || id <= 0) throw createCustomError(400, "Order ID tidak valid");
  return id;
}

export const transactionController = {
  async create(req: Request, res: Response, next: NextFunction) {
    try { res.status(201).json({ message: "Pesanan berhasil dibuat", data: await transactionService.createReservation(req.user!.id, req.body) }); }
    catch (error) { next(error); }
  },
  async myOrders(req: Request, res: Response, next: NextFunction) {
    try { res.json({ message: "OK", data: await transactionService.listMyOrders(req.user!.id, req.query) }); }
    catch (error) { next(error); }
  },
  async cancel(req: Request, res: Response, next: NextFunction) {
    try { res.json({ message: "Pesanan dibatalkan", data: await transactionService.cancelOrder(orderId(req.params.id), req.user!.id) }); }
    catch (error) { next(error); }
  },
  async uploadProof(req: Request, res: Response, next: NextFunction) {
    try { res.json({ message: "Bukti pembayaran berhasil diunggah", data: await transactionService.uploadPaymentProof(orderId(req.params.id), req.user!.id, req.file) }); }
    catch (error) { next(error); }
  },
  async confirmManualPayment(req: Request, res: Response, next: NextFunction) {
    try {
      if (typeof req.body.approved !== "boolean") throw createCustomError(400, "approved harus bernilai boolean");
      res.json({ message: "Status pembayaran diperbarui", data: await transactionService.confirmManualPayment(orderId(req.params.id), req.user!.id, req.body.approved) });
    } catch (error) { next(error); }
  },
  async gatewayWebhook(req: Request, res: Response, next: NextFunction) {
    try {
      if (!PAYMENT_GATEWAY_WEBHOOK_SECRET) throw createCustomError(500, "Payment gateway webhook belum dikonfigurasi");
      const signature = req.header("x-payment-signature");
      const expected = crypto.createHmac("sha256", PAYMENT_GATEWAY_WEBHOOK_SECRET).update(req.rawBody ?? Buffer.from("")).digest("hex");
      if (!signature || !crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) throw createCustomError(401, "Webhook signature tidak valid");
      const { orderId: id, status } = req.body;
      if (status !== "PAID" && status !== "FAILED") throw createCustomError(400, "Status payment gateway tidak valid");
      res.json({ message: "Webhook diterima", data: await transactionService.handleGatewayPayment(orderId(String(id)), status) });
    } catch (error) { next(error); }
  },
};
