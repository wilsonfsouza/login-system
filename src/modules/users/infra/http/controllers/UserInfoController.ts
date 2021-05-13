import { Request, Response } from 'express';
import BCryptHashProvider from '../../../providers/HashProvider/implementations/BCryptHashProvider';
import ShowUserInformationService from '../../../services/ShowUserInformationService';
import UpdateUserInformationService from '../../../services/UpdateUserInformationService';
import UsersRepository from '../../customORM/repositories/UsersRepository';

export default class UserInfoController {
  public async show(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const usersRepository = new UsersRepository();
    const showUserInformationService = new ShowUserInformationService(usersRepository);

    const user = await showUserInformationService.execute({ user_id });

    const userWithoutPassword = {
      id: user?.id,
      name: user?.name,
      email: user?.email
    }

    return response.json(userWithoutPassword);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { name, email, old_password, password } = request.body;

    const usersRepository = new UsersRepository();
    const hashProvider = new BCryptHashProvider();

    const updateUserInformationService = new UpdateUserInformationService(
      usersRepository,
      hashProvider
    );

    const user = await updateUserInformationService.execute({
      user_id,
      name,
      email,
      old_password,
      password,
    });

    const userWithoutPassword = {
      id: user?.id,
      name: user?.name,
      email: user?.email
    }

    return response.json(userWithoutPassword);
  }
}
