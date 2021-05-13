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

    const user = await createUserService.execute({
      name,
      email,
      password
    });

    const userWithoutPassword = {
      id: user.id,
      name: user.name,
      email: user.email
    }

    return response.json(userWithoutPassword);
  }
}
