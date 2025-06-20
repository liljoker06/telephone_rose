import express from 'express';
import { chatWithIA } from '../controllers/chatController.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();

router.post('/', verifyToken, chatWithIA);

export default router;
