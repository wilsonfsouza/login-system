import { Router } from 'express';

import usersRouter from '../../../../modules/users/infra/http/routes/users.routes';
import sessionsRouter from '../../../../modules/users/infra/http/routes/sessions.routes';
import userInfoRouter from '../../../../modules/users/infra/http/routes/userInfo.routes';

const routes = Router();

routes.use(usersRouter);

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/profile', userInfoRouter);

export default routes;
