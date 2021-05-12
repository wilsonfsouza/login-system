import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
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
  constructor(private fakeUsersRepository: FakeUsersRepository) {
  }

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    // Check if email exists
    const user = await this.fakeUsersRepository.findByEmail(email);
    // Throw error if incorrect email
    if (!user) {
      throw new AppError('Incorrect email/password combination.', 401)
    }
    // Check if password matches
    // Throw error if incorrect password
    return {
      user
    }
  }
}

export default AuthenticateUserService;
