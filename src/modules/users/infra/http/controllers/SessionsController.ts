import { Request, Response } from 'express';
import BCryptHashProvider from '../../../providers/HashProvider/implementations/BCryptHashProvider';

import AuthenticateUserService from '../../../services/AuthenticateUserService';
import UsersRepository from '../../customORM/repositories/UsersRepository';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const usersRepository = new UsersRepository();
    const hashProvider = new BCryptHashProvider();

    const authenticateUserService = new AuthenticateUserService(
      usersRepository,
      hashProvider
    );

    const { user, token } = await authenticateUserService.execute({
      email,
      password
    });

    const userWithoutPassword = {
      id: user.id,
      name: user.name,
      email: user.email
    }

    return response.json({ user: userWithoutPassword, token });
  }
}
