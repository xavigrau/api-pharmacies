import express from 'express';

const router = express.Router();

// * Import controller
import { postFeature } from "../controllers/writeFeatures";

router.post('/add/', postFeature);


export default router;