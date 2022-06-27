"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// * Import controller
const writeFeatures_1 = require("../controllers/writeFeatures");
router.post('/add/', writeFeatures_1.postFeature);
exports.default = router;
//# sourceMappingURL=writeFeatures.js.map