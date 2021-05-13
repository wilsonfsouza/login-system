import IUsersRepository from '../repositories/IUsersRepository';
import { FakeUser as User } from '../infra/entities/User';
import AppError from '../../../shared/errors/AppError';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  constructor(
    private usersRepository: IUsersRepository,
  ) {
  }

  public async execute({ name, email, password }: IRequest): Promise<User> {
    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('This email address has been already used.');
    }

    const user = await this.usersRepository.create({ name, email, password });

    return user;
  }
}

export default CreateUserService;
