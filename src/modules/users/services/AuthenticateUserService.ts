import IUsersRepository from '../repositories/IUsersRepository';
import { FakeUser as User } from '../infra/entities/User';
import AppError from '../../../shared/errors/AppError';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
}

class AuthenticateUserService {
  constructor(private usersRepository: IUsersRepository) {
  }

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const passwordMatched = password === user.password;

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    return {
      user
    }
  }
}

export default AuthenticateUserService;
