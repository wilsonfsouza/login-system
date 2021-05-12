import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import { FakeUser as User } from '../infra/entities/User';
import AppError from '../../../shared/errors/AppError';

interface IRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  constructor(private fakeUsersRepository: FakeUsersRepository) {
  }

  public async execute({ email, password }: IRequest): Promise<void> {
    // Check if email exists
    // Throw error if incorrect email
    // Check if password matches
    // Throw error if incorrect password
  }
}

export default AuthenticateUserService;
