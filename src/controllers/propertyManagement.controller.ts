import { Response, NextFunction } from "express";
import { propertyManagementService } from "../services/propertyManagement.service";

export const propertyManagementController = {
  listMy: async (req: any, res: Response, next: NextFunction) => {
    try {
      const result = await propertyManagementService.listTenant(req.user.id);
      res.status(200).json({ message: "OK", data: result });
    } catch (err) {
      next(err);
    }
  },

  detail: async (req: any, res: Response, next: NextFunction) => {
    try {
      const result = await propertyManagementService.detail(
        Number(req.params.id),
        req.user.id
      );
      res.json({ message: "OK", data: result });
    } catch (err) {
      next(err);
    }
  },

  create: async (req: any, res: Response, next: NextFunction) => {
    try {
      const result = await propertyManagementService.create(
        req.user.id,
        req.body,
        req.files
      );
      res.status(201).json({ message: "OK", data: result });
    } catch (err) {
      next(err);
    }
  },

  update: async (req: any, res: Response, next: NextFunction) => {
    try {
      const result = await propertyManagementService.update(
        Number(req.params.id),
        req.user.id,
        req.body,
        req.files
      );
      res.status(200).json({ message: "OK", data: result });
    } catch (err) {
      next(err);
    }
  },

  remove: async (req: any, res: Response, next: NextFunction) => {
    try {
      const result = await propertyManagementService.remove(
        Number(req.params.id),
        req.user.id
      );
      res.status(200).json({ message: "OK", data: result });
    } catch (err) {
      next(err);
    }
  },
};
