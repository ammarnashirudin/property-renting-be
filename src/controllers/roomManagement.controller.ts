import { Request, Response, NextFunction } from "express";
import { roomManagementService } from "../services/roomManagement.service";
import { createCustomError } from "../utils/customError";
export const roomManagementController = {
  createRoom: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const propertyId = Number(req.params.propertyId);
      if(isNaN(propertyId)){
        throw createCustomError(400, "Property ID tidak valid");
      }
      const result = await roomManagementService.createRoom(propertyId, req.body);
      res.status(201).json({ message: "OK", data: result });
    } catch (err) {
      next(err);
    }
  },

  updateRoom: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const roomId = Number(req.params.roomId);
      const result = await roomManagementService.updateRoom(roomId, req.body);
      res.status(200).json({ message: "OK", data: result });
    } catch (err) {
      next(err);
    }
  },

  deleteRoom: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const roomId = Number(req.params.roomId);
      const result = await roomManagementService.deleteRoom(roomId);
      res.status(200).json({ message: "OK", data: result });
    } catch (err) {
      next(err);
    }
  },

  getRoomById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const roomId = Number(req.params.roomId);
      const data = await roomManagementService.getRoomById(roomId);
      res.json({ message: "OK", data });
    } catch (err) {
      next(err);
    }
  },


  setAvailability: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const roomId = Number(req.params.roomId);
      const result = await roomManagementService.setAvailability(
        roomId,
        req.body.date,
        req.body.isAvailable
      );
      res.status(200).json({ message: "OK", data: result });
    } catch (err) {
      next(err);
    }
  },

  createPeakRate: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const roomId = Number(req.params.roomId);
      const result = await roomManagementService.createPeakRate(roomId, req.body);
      res.status(201).json({ message: "OK", data: result });
    } catch (err) {
      next(err);
    }
  },

  deletePeakRate: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const peakId = Number(req.params.peakId);
      const result = await roomManagementService.deletePeakRate(peakId);
      res.status(200).json({ message: "OK", data: result });
    } catch (err) {
      next(err);
    }
  },

  listPeakRates: async (req: Request, res: Response, next : NextFunction) => {
  try {
    const roomId = Number(req.params.roomId);
    const data = await roomManagementService.listPeakRates(roomId);
    res.json({ message: "OK", data });
  } catch (err) {
    next(err);
  }
},

};
