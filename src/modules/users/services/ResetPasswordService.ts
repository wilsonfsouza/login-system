import { addHours, isAfter } from "date-fns";
import AppError from "../../../shared/errors/AppError";
import IHashProvider from "../providers/HashProvider/models/IHashProvider";
import IUsersRepository from "../repositories/IUsersRepository";
import IUserTokensRepository from "../repositories/IUserTokensRepository";

interface IRequest {
  password: string;
  token: string;
}

class ResetPasswordService {
  constructor(
    private userTokensRepository: IUserTokensRepository,
    private usersRepository: IUsersRepository,
    private hashProvider: IHashProvider,
  ) { }

  public async execute({ password, token }: IRequest): Promise<void> {
    const userToken = await this.userTokensRepository.findByToken(token);

    if (!userToken) {
      throw new AppError('User token does not exist.');
    }

    const user = await this.usersRepository.findById(userToken.user_id);

    if (!user) {
      throw new AppError('User does not exist.');
    }

    const createdAtToken = userToken.created_at;

    const dateToBeCompared = addHours(createdAtToken, 2);

    const isDateAfter2hours = isAfter(Date.now(), dateToBeCompared);

    if (isDateAfter2hours) {
      throw new AppError('Token has expired.');
    }

    user.password = await this.hashProvider.generateHash(password);

    await this.usersRepository.update(user);
  }
}

export default ResetPasswordService;
