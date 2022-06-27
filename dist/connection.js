"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
function initDatabase(PORT, URI, app) {
    mongoose_1.default.connect(URI);
    mongoose_1.default.connection.on('error', (err) => {
        console.log(`Error connecting to database: ${err}`);
    });
    mongoose_1.default.connection.on('connected', () => {
        console.log("Successfully connected to the database");
        startServer(PORT, app);
    });
}
exports.initDatabase = initDatabase;
function startServer(PORT, app) {
    app.listen(PORT, () => {
        console.log(`server started at http://localhost:${PORT}`);
    }).on('error', (err) => {
        console.log(`Error starting server: ${err}`);
    });
}
//# sourceMappingURL=connection.js.map