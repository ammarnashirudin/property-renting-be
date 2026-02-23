import { Router } from "express";
import { authController } from "@/controllers/auth.controllers";

const authRouter = Router();

authRouter.post("/register/user", authController.registerUser);
authRouter.post("/register/tenant", authController.registerTenant);

authRouter.post("/login", authController.login);
authRouter.post("/social", authController.socialAuth);

authRouter.post("/veridy/resend", authController.resendVerification);
authRouter.post("/verify", authController.verifyEmailSetPassword);

authRouter.post("/reset-password", authController.requestResetPassword);
authRouter.post("/reset-password/confirm", authController.confirmResetPassword);

export default authRouter;