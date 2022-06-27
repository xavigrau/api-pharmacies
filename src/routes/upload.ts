import express, {Request, Response} from 'express';
import upload from '../controllers/uploadFile'
const router = express.Router();


router.post('/upload',upload);
export default router;