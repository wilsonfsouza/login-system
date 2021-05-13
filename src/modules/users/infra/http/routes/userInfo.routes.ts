import { Router } from 'express';
import ensureUserAuthenticated from '../../middlewares/ensureUserAuthenticated';

import UserInfoController from '../controllers/UserInfoController';

const userInfoRouter = Router();
const userInfoController = new UserInfoController();

userInfoRouter.use(ensureUserAuthenticated);

userInfoRouter.get(
  '/',
  userInfoController.get
);

export default userInfoRouter;
