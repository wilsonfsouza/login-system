import AppError from "../../../shared/errors/AppError";
import { FakeUser as User } from "../infra/customORM/entities/User";
import IUsersRepository from "../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserInformationService {
  constructor(
    private usersRepository: IUsersRepository
  ) { }

  public async execute({ user_id }: IRequest): Promise<User | undefined> {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User does not exist.');
    }

    return user;
  }

}

export default ShowUserInformationService;
