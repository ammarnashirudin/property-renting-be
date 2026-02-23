import { Request, Response, NextFunction } from "express";
import { CustomError } from "../utils/customError";


export default function errorMiddleware(
  err: any,
  res: Response,
) {
  console.error(err);

  if (err instanceof CustomError) {
    return res.status(err.status).json({
      message: err.message,
    });
  }

  res.status(500).json({
    message: "Internal Server Error",
  });
}

