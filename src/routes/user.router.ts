import { Router } from 'express';

import userController from '../controller/user.controller';
import userMiddleware from '../middlewares/login.middleware';

const userRouter = Router();

userRouter.post(
  '/',
  userMiddleware.verifyLoginFields,
  userController.handleLogin,
);

export default userRouter;