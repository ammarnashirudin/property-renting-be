import { Router } from "express";
import { roomManagementController } from "../controllers/roomManagement.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { authGuard } from "../middlewares/authGuard";
import { roleMiddleware } from "../middlewares/role.middleware";

const roomManagementRouter = Router();

roomManagementRouter.post(
  "/property/:propertyId",
  authMiddleware,
  authGuard,
  roleMiddleware(["TENANT"]),
  roomManagementController.createRoom
);

roomManagementRouter.patch(
  "/:roomId",
  authMiddleware,
  authGuard,
  roleMiddleware(["TENANT"]),
  roomManagementController.updateRoom
);

roomManagementRouter.delete(
  "/:roomId",
  authMiddleware,
  authGuard,
  roleMiddleware(["TENANT"]),
  roomManagementController.deleteRoom
);

roomManagementRouter.post(
  "/:roomId/availability",
  authMiddleware,
  authGuard,
  roleMiddleware(["TENANT"]),
  roomManagementController.setAvailability
);

roomManagementRouter.post(
  "/:roomId/peak",
  authMiddleware,
  authGuard,
  roleMiddleware(["TENANT"]),
  roomManagementController.createPeakRate
);

roomManagementRouter.delete(
  "/peak/:peakId",
  authMiddleware,
  authGuard,
  roleMiddleware(["TENANT"]),
  roomManagementController.deletePeakRate
);

roomManagementRouter.get(
  "/:roomId/peak",
  authMiddleware,
  authGuard,
  roleMiddleware(["TENANT"]),
  roomManagementController.listPeakRates
);

roomManagementRouter.get(
  "/:roomId",
  authMiddleware,
  authGuard,
  roleMiddleware(["TENANT"]),
  roomManagementController.getRoomById
);



export default roomManagementRouter;