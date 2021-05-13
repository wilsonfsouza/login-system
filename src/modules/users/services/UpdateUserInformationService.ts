import AppError from "../../../shared/errors/AppError";
import { FakeUser as User } from "../infra/entities/User";
import IHashProvider from "../providers/HashProvider/models/IHashProvider";
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
    private hashProvider: IHashProvider,
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

    if (password && !old_password) {
      throw new AppError(
        'You need to enter your old password to create a new password.',
      );
    }

    if (password && old_password) {
      const isSamePassword = await this.hashProvider.compareHash(
        old_password,
        user.password,
      );

      if (!isSamePassword) {
        throw new AppError('Old password does not match.');
      }

      user.password = await this.hashProvider.generateHash(password);
    }

    return this.usersRepository.update(user);
  }
}

export default UpdateUserInformationService;
