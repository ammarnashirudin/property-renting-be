import { Request, Response, NextFunction } from "express";
import { propertyCatalogService } from "../services/propertyCatalog.service";

export const propertyCatalogController = {
  list: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await propertyCatalogService.list({
        page: Number(req.query.page || 1),
        limit: Number(req.query.limit || 10),
        search: req.query.search as string,
        categoryId: req.query.categoryId ? Number(req.query.categoryId) : undefined,
        sortBy: req.query.sortBy as any,
        sortOrder: req.query.sortOrder as any,
        checkIn: req.query.checkIn as string,
        checkOut: req.query.checkOut as string,
        latitude: req.query.latitude ? Number(req.query.latitude):undefined,
        longitude:req.query.longitude ? Number(req.query.longitude):undefined,
      });

      res.status(200).json({ message: "OK", ...result });
    } catch (err) {
      next(err);
    }
  },

  detail: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await propertyCatalogService.detail(Number(req.params.id));
      res.status(200).json({ message: "OK", data: result });
    } catch (err) {
      next(err);
    }
  },
};
