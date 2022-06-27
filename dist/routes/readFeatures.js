"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// * Import controller
const readFeatures_1 = require("../controllers/readFeatures");
// * Get features by ID
router.get('/id/:id', readFeatures_1.getFeatureById);
// * Get features by postal code
router.get('/code/:postal_code', readFeatures_1.getFeaturesByPostalCode);
// * Get features by town
router.get('/town/:town', readFeatures_1.getFeaturesByTown);
// * Get features by province
router.get('/province/:province', readFeatures_1.getFeaturesByProvince);
// * Get features by autonomous community
router.get('/region/:region', readFeatures_1.getFeaturesByComAut);
// * Get features by country
router.get('/country/:country', readFeatures_1.getFeaturesByCountry);
// * Get features near a point
router.get('/near/:lat/:long/:meters', readFeatures_1.getFeatureNearPoint);
// * Get all the features
router.get('/all/', readFeatures_1.getAllFeatures);
exports.default = router;
//# sourceMappingURL=readFeatures.js.map