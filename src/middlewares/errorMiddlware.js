"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = errorMiddleware;
var customError_1 = require("../utils/customError");
function errorMiddleware(err, res) {
    console.error(err);
    if (err instanceof customError_1.CustomError) {
        return res.status(err.status).json({
            message: err.message,
        });
    }
    res.status(500).json({
        message: "Internal Server Error",
    });
}
