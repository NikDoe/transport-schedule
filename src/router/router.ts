import { Router } from 'express';
import { userController } from '../controllers/UserController';

const router = Router();

router.get('/', userController.registration);

export default router;
