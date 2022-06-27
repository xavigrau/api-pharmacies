"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const featureSchema = new mongoose_1.Schema({
    type: { type: String, required: true },
    geometry: {
        type: { type: String, required: true },
        coordinates: (Array)
    },
    properties: {
        cnn: String,
        caac: String,
        country: String,
        comAut: String,
        province: String,
        town: String,
        name: String,
        pharmacy_name: String,
        address: String,
        postalCode: String,
        schedule: {
            periods: [{
                    open: {
                        day: Number,
                        time: String
                    },
                    close: {
                        day: Number,
                        time: String
                    }
                }],
            weekday_text: (Array)
        },
        formatted_phone_number: String,
        place_id: String,
        international_phone_number: String
    }
});
// * Export the model and return the interface
exports.default = mongoose_1.default.model('Feature', featureSchema);
//# sourceMappingURL=Feature.js.map