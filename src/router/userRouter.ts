import { Router } from 'express';
import userController from '../controllers/UserController';

const userRouter = Router();

userRouter.post('/registration', userController.registration);
userRouter.post('/login', userController.login);
userRouter.get('/auth', userController.checkAuth);

export default userRouter;
