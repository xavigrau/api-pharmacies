import express from 'express';

const router = express.Router();

// * Import controller
import {
    getFeatureById,
    getFeaturesByPostalCode,
    getFeaturesByTown,
    getFeaturesByProvince,
    getFeaturesByComAut,
    getFeaturesByCountry,
    getAllFeatures,
    getFeatureNearPoint
} from "../controllers/readFeatures";

// * Get features by ID
router.get('/id/:id', getFeatureById);

// * Get features by postal code
router.get('/code/:postal_code', getFeaturesByPostalCode);

// * Get features by town
router.get('/town/:town', getFeaturesByTown);

// * Get features by province
router.get('/province/:province', getFeaturesByProvince);

// * Get features by autonomous community
router.get('/region/:region', getFeaturesByComAut);

// * Get features by country
router.get('/country/:country', getFeaturesByCountry);

// * Get features near a point
router.get('/near/:lat/:long/:meters', getFeatureNearPoint)

// * Get all the features
router.get('/all/', getAllFeatures);


export default router;