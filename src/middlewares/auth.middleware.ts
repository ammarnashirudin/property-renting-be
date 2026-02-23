import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import {SECRET_KEY} from "@/configs/env.config";
import { createCustomError } from "../utils/customError";

export type JwtPayloadUser = {
  id: number;
  email: string;
  role: "USER" | "TENANT";
  isVerified : boolean;
};

export function authMiddleware(req: any, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) throw createCustomError(401, "Unauthorized");

    const token = authHeader.split(" ")[1];
    if (!token) throw createCustomError(401, "Unauthorized");

    const decoded = jwt.verify(token, SECRET_KEY) as JwtPayloadUser;
    req.user = decoded;

    next();
  } catch (err) {
    next(createCustomError(401, "Token invalid / expired"));
  }
}
