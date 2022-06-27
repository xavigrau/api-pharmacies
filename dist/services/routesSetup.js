"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("../server");
// * Import routes file
const readFeatures_1 = __importDefault(require("../routes/readFeatures"));
const writeFeatures_1 = __importDefault(require("../routes/writeFeatures"));
exports.default = () => {
    // * Routes
    server_1.app.use("/v1/", readFeatures_1.default);
    server_1.app.use("/v1/", writeFeatures_1.default);
};
//# sourceMappingURL=routesSetup.js.map