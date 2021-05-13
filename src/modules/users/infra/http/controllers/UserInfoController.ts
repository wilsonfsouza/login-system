import { Request, Response } from 'express';
import ShowUserInformationService from '../../../services/ShowUserInformationService';
import UsersRepository from '../../customORM/repositories/UsersRepository';

export default class UserInfoController {
  public async get(request: Request, response: Response): Promise<Response> {
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


    return response.json({ msg: "ok" });
  }
}
