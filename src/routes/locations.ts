import express from 'express';

const router = express.Router();

// * Import controller
import {getFeatures } from "../controllers/controller";

// * Endpoint used to get all the features from one location

router.get('/:city', getFeatures);


export default router;