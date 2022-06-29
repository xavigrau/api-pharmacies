"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const server_1 = require("../server");
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
exports.default = () => {
    // * Body Parser
    server_1.app.use(body_parser_1.default.urlencoded({
        extended: true
    }));
    server_1.app.use(body_parser_1.default.json());
    // * Cors
    server_1.app.use((0, cors_1.default)({
        origin: 'http://localhost:8000'
    }));
    // * Morgan
    server_1.app.use((0, morgan_1.default)('dev'));
};
//# sourceMappingURL=middlewareSetup.js.map