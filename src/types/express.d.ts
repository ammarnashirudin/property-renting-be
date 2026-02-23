import { User } from "@/generated/prisman";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        email?: string;
        role?: string;
      };
    }
  }
}

export {};