"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
// * Import
const middlewareSetup_1 = __importDefault(require("./services/middlewareSetup"));
const routesSetup_1 = __importDefault(require("./services/routesSetup"));
exports.app = (0, express_1.default)();
// * Connection file
const connection_1 = require("./connection");
// * Import config file
const config_1 = require("./config/config");
// * Middlewares setup
(0, middlewareSetup_1.default)();
// * Routes setup
(0, routesSetup_1.default)();
// * Testing endpoint
exports.app.get("/", (req, res) => {
    res.status(200).send("I'm working!");
});
// * Database and start server
(0, connection_1.initDatabase)(config_1.config.PORT, config_1.config.URI, exports.app);
//# sourceMappingURL=server.js.map