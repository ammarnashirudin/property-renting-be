"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var helmet_1 = require("helmet");
var errorMiddlware_1 = require("./middlewares/errorMiddlware");
var auth_router_1 = require("./routers/auth.router");
var user_router_1 = require("./routers/user.router");
var env_config_1 = require("./configs/env.config");
var app = (0, express_1.default)();
// Middlewares
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
// Routers
app.use("/auth", auth_router_1.default);
app.use("/user", user_router_1.default);
// Error handling middleware
app.use(errorMiddlware_1.default);
// Start the server
app.listen(env_config_1.PORT, function () {
    console.log("Server is running on port ".concat(env_config_1.PORT));
});
