import { Request, Response, NextFunction } from "express";
import { categoryService } from "@/services/category.service";

export const categoryController = {
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await categoryService.create(req.body.name);
      res.status(201).json({ message: "OK", data: result });
    } catch (err) {
      next(err);
    }
  },

  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await categoryService.getAll();
      res.status(200).json({ message: "OK", data: result });
    } catch (err) {
      next(err);
    }
  },

  update: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await categoryService.update(Number(req.params.id), req.body.name);
      res.status(200).json({ message: "OK", data: result });
    } catch (err) {
      next(err);
    }
  },

  remove: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await categoryService.remove(Number(req.params.id));
      res.status(200).json({ message: "OK", data: result });
    } catch (err) {
      next(err);
    }
  },
};
