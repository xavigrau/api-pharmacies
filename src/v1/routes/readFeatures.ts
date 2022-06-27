import express from 'express';

const router = express.Router();

// * Import controller
import { getFeaturesByCity, getAllFeatures } from "../controllers/readFeatures";

// * Endpoint used to get all the features from one location

router.get('/city/:city', getFeaturesByCity);
router.get('/all/', getAllFeatures);


export default router;