import { Request, Response } from 'express';

import BCryptHashProvider from '../../../providers/HashProvider/implementations/BCryptHashProvider';
import CreateUserService from '../../../services/CreateUserService';
import UsersRepository from '../../customORM/repositories/UsersRepository';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const hashProvider = new BCryptHashProvider();
    const usersRepository = new UsersRepository();

    const createUserService = new CreateUserService(
      usersRepository,
      hashProvider
    );

    return response.json({ msg: 'ok' });
  }
}
