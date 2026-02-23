import express from "express";
import cors from "cors";
import helmet from "helmet";
import errorMiddleware from "./middlewares/errorMiddlware";

import authRouter from "./routers/auth.router";
import userRouter from "./routers/user.router";

import { PORT } from "./configs/env.config";

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());

// Routers
app.use("/auth", authRouter);
app.use("/user", userRouter);


// Error handling middleware
app.use(errorMiddleware);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
