import { Router } from "express";
import { transactionController } from "../controllers/transaction.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { roleMiddleware } from "../middlewares/role.middleware";
import { uploud } from "../middlewares/uploud.middleware";

const transactionRouter = Router();

transactionRouter.post("/webhook/payment-gateway", transactionController.gatewayWebhook);
transactionRouter.use(authMiddleware, roleMiddleware(["USER"]));
transactionRouter.post("/", transactionController.create);
transactionRouter.get("/me", transactionController.myOrders);
transactionRouter.patch("/:id/cancel", transactionController.cancel);
transactionRouter.post("/:id/upload-proof", uploud.single("file"), transactionController.uploadProof);

export const tenantTransactionRouter = Router();
tenantTransactionRouter.use(authMiddleware, roleMiddleware(["TENANT"]));
tenantTransactionRouter.patch("/:id/payment-confirmation", transactionController.confirmManualPayment);

export default transactionRouter;
