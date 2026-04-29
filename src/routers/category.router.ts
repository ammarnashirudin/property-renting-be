import { Router } from "express";
import { categoryController } from "../controllers/category.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { authGuard } from "../middlewares/authGuard";
import { roleMiddleware } from "../middlewares/role.middleware";

const categoryRouter = Router();

categoryRouter.get("/", categoryController.getAll);
categoryRouter.post("/", authMiddleware, authGuard, roleMiddleware(["TENANT"]), categoryController.create);
categoryRouter.patch("/:id", authMiddleware, authGuard, roleMiddleware(["TENANT"]), categoryController.update);
categoryRouter.delete("/:id", authMiddleware, authGuard, roleMiddleware(["TENANT"]), categoryController.remove);

export default categoryRouter;