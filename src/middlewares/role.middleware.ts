import { Response, NextFunction } from "express";
import { createCustomError } from "../utils/customError";

export function roleMiddleware(allowedRoles: ("USER" | "TENANT")[]) {
  return (req: any, res: Response, next: NextFunction) => {
    const role = req.user?.role;

    if (!role) return next(createCustomError(401, "Unauthorized"));

    if (!allowedRoles.includes(role)) {
      return next(createCustomError(403, "Forbidden: akses role tidak sesuai"));
    }

    next();
  };
}
