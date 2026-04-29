import { roomRepository } from "../repositories/room.repository";
import { availabilityRepository } from "../repositories/availability.repository";
import { peakRepository } from "../repositories/peak.repository";
import { createCustomError } from "../utils/customError";

export const roomManagementService = {
  createRoom: async (propertyId: number, payload: any) => {
    if (!payload.name) throw createCustomError(400, "Room name wajib diisi");
    if (!payload.basePrice) throw createCustomError(400, "Price wajib diisi");
    if (!payload.description) throw createCustomError(400, "Description wajib diisi");

    return roomRepository.create({
      propertyId,
      name: payload.name,
      description: payload.description,
      basePrice: Number(payload.basePrice),
      capacity: Number(payload.capacity || 1),
      startDate: new Date(payload.startDate || new Date()),
      endDate: new Date(payload.endDate || new Date()),
    });
  },

  getRoomById: (roomId: number) =>
  roomRepository.findById(roomId),


  updateRoom: async (roomId: number, payload: any) => {
    return roomRepository.update(roomId, {
      name: payload.name,
      description: payload.description,
      basePrice: payload.basePrice ? Number(payload.basePrice) : undefined,
      capacity: payload.capacity ? Number(payload.capacity) : undefined,
    });
  },

  deleteRoom: async (roomId: number) => roomRepository.remove(roomId),

  setAvailability: async (roomId: number, date: string, isAvailable: boolean) => {
    if (!date) throw createCustomError(400, "date wajib diisi");
    return availabilityRepository.set(roomId, new Date(date), isAvailable);
  },

  createPeakRate: async (roomId: number, payload: any) => {
    const type = payload.type; 
    const value = Number(payload.value);

    if (!["NOMINAL", "PERCENT"].includes(type)) {
      throw createCustomError(400, "type harus NOMINAL atau PERCENT");
    }

    if (!payload.startDate || !payload.endDate) {
      throw createCustomError(400, "startDate dan endDate wajib diisi");
    }

    return peakRepository.create({
      roomId,
      startDate: new Date(payload.startDate),
      endDate: new Date(payload.endDate),
      type,
      value,
    });
  },

  deletePeakRate: async (peakId: number) => peakRepository.remove(peakId),

  listPeakRates: (roomId:number) =>
    peakRepository.findByRoom(roomId)
};
