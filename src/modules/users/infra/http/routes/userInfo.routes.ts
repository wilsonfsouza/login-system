import { Router } from 'express';

import UserInfoController from '../controllers/UserInfoController';

const userInfoRouter = Router();
const userInfoController = new UserInfoController();

userInfoRouter.get(
  '/',
  userInfoController.get
);

export default userInfoRouter;
