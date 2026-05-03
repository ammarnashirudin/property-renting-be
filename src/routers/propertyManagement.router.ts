import { Router } from "express";
import { propertyManagementController } from "../controllers/propertyManagement.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { authGuard } from "../middlewares/authGuard";
import { roleMiddleware } from "../middlewares/role.middleware";
import { uploud } from "../middlewares/uploud.middleware";

const propertyManagementRouter = Router();

propertyManagementRouter.get(
  "/my",
  authMiddleware,
  authGuard,
  roleMiddleware(["TENANT"]),
  propertyManagementController.listMy
);

propertyManagementRouter.post(
  "/",
  authMiddleware,
  authGuard,
  roleMiddleware(["TENANT"]),
  uploud.array("image", 5),
  propertyManagementController.create
);

propertyManagementRouter.patch(
  "/:id",
  authMiddleware,
  authGuard,
  roleMiddleware(["TENANT"]),
  uploud.array("image", 5),
  propertyManagementController.update
);

propertyManagementRouter.delete(
  "/:id",
  authMiddleware,
  authGuard,
  roleMiddleware(["TENANT"]),
  propertyManagementController.remove
);

propertyManagementRouter.get(
  "/:id",
  authMiddleware,
  authGuard,
  roleMiddleware(["TENANT"]),
  propertyManagementController.detail
);


export default propertyManagementRouter;