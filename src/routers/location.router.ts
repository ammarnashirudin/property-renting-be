import { Router } from "express";
import { searchLocation } from "../controllers/location.controller";

const locationRouter = Router();

locationRouter.get("/search", searchLocation);

export default locationRouter;
