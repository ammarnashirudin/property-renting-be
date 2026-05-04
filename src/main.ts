import express from "express";
import cors from "cors";
import helmet from "helmet";
import errorMiddleware from "./middlewares/errorMiddlware";

import authRouter from "./routers/auth.router";
import userRouter from "./routers/user.router";
import categoryRouter from "./routers/category.router";
import propertyManagementRouter from "./routers/propertyManagement.router";
import roomManagementRouter from "./routers/roomManagement.router";
import propertyCatalogRouter from "./routers/propertyCatalog.router";
import locationRouter from "./routers/location.router";

import { PORT } from "./configs/env.config";

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());

// Routers
app.use("/auth", authRouter);
app.use("/users", userRouter);

app.use("/category", categoryRouter);
app.use("/catalog", propertyCatalogRouter);

app.use("/tenant/properties", propertyManagementRouter);
app.use("/tenant/rooms", roomManagementRouter);

app.use("/locations", locationRouter);

// Error handling middleware
app.use(errorMiddleware);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
