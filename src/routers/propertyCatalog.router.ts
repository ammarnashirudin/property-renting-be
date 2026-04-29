import { Router } from "express";
import { propertyCatalogController } from "../controllers/propertyCatalog.controller";

const propertyCatalogRouter = Router();

propertyCatalogRouter.get("/", propertyCatalogController.list);
propertyCatalogRouter.get("/:id", propertyCatalogController.detail);

export default propertyCatalogRouter;