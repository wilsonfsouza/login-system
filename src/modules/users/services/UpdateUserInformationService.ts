import AppError from "../../../shared/errors/AppError";
import { FakeUser as User } from "../infra/entities/User";
import IUsersRepository from "../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
  name: string;
  email: string;
  old_password?: string;
  password?: string;
}

class UpdateUserInformationService {
  constructor(
    private usersRepository: IUsersRepository,
  ) { }

  public async execute({ user_id, name, email, old_password, password }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User does not exist.');
    }

    const emailInUse = await this.usersRepository.findByEmail(email);

    if (emailInUse && emailInUse.id !== user_id) {
      throw new AppError('Email already in use.');
    }

    Object.assign(user, { name, email });

    return this.usersRepository.update(user);
  }
}

export default UpdateUserInformationService;
