import AppError from "../../../shared/errors/AppError";
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
  ) { }

  public async execute({ password, token }: IRequest): Promise<void> {
    const userToken = await this.userTokensRepository.findByToken(token);

    if (!userToken) {
      throw new AppError('User token does not exist.');
    }

    const user = await this.usersRepository.findById(userToken.id);

    if (!user) {
      throw new AppError('User does not exist.');
    }
    // Get when the token was created
    // Check if token has expired
    // Rewrite Hashed user password
    // Update user information
  }
}

export default ResetPasswordService;
