import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ensureUserAuthenticated from '../../middlewares/ensureUserAuthenticated';

import UserInfoController from '../controllers/UserInfoController';

const userInfoRouter = Router();
const userInfoController = new UserInfoController();

userInfoRouter.use(ensureUserAuthenticated);

userInfoRouter.get(
  '/',
  userInfoController.show);

userInfoRouter.put(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      old_password: Joi.string(),
      password: Joi.string(),
      password_confirmation: Joi.string().valid(Joi.ref('password')),
    },
  }),
  userInfoController.update);

export default userInfoRouter;
