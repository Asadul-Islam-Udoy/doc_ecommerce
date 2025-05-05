import express from 'express';
import { CreateUserController,GetSingleUserController } from '../controllers/UserController';
const router = express.Router();

router.post('/create',CreateUserController);
router.post('/get/sigle/:id',GetSingleUserController);
export default router;