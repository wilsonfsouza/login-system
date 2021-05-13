import AppError from "../../../shared/errors/AppError";
import { FakeUser as User } from "../infra/entities/User";
import IUsersRepository from "../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
  name: string;
  email: string;
}

class UpdateUserInformationService {
  constructor(
    private usersRepository: IUsersRepository,
  ) { }

  public async execute({ user_id, name, email }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User does not exist.');
    }

    Object.assign(user, { name, email });

    return this.usersRepository.update(user);
  }
}

export default UpdateUserInformationService;
