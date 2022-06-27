import express from 'express';

const router = express.Router();

// * Import controller
import { postFeature, postMultipleFeatures } from "../controllers/writeFeatures";

router.post('/add/', postFeature);
router.post('/add/multiple/', postMultipleFeatures);


export default router;