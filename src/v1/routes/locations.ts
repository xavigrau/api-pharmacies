import express from 'express';

const router = express.Router();

// * Import controller
import {getFeatures, getAllFeatures} from "../controllers/features";

// * Endpoint used to get all the features from one location

router.get('/:city', getFeatures);
router.get('/', getAllFeatures);


export default router;