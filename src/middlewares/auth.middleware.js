"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
var jsonwebtoken_1 = require("jsonwebtoken");
var env_config_1 = require("@/configs/env.config");
var customError_1 = require("../utils/customError");
function authMiddleware(req, res, next) {
    try {
        var authHeader = req.headers.authorization;
        if (!authHeader)
            throw (0, customError_1.createCustomError)(401, "Unauthorized");
        var token = authHeader.split(" ")[1];
        if (!token)
            throw (0, customError_1.createCustomError)(401, "Unauthorized");
        var decoded = jsonwebtoken_1.default.verify(token, env_config_1.SECRET_KEY);
        req.user = decoded;
        next();
    }
    catch (err) {
        next((0, customError_1.createCustomError)(401, "Token invalid / expired"));
    }
}
