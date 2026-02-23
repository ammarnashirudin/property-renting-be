"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploud = void 0;
var multer_1 = require("multer");
exports.uploud = (0, multer_1.default)({
    storage: multer_1.default.memoryStorage(),
});
