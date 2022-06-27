import express from 'express';

const router = express.Router();

// * Import controller
import { getFeaturesByCity, getAllFeatures } from "../controllers/readFeatures";

// * Endpoint used to get all the features from one location

router.get('/:city', getFeaturesByCity);
router.get('/', getAllFeatures);


export default router;