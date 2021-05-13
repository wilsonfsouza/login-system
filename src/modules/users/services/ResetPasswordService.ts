import AppError from "../../../shared/errors/AppError";
import IUserTokensRepository from "../repositories/IUserTokensRepository";

interface IRequest {
  password: string;
  token: string;
}

class ResetPasswordService {
  constructor(
    private userTokensRepository: IUserTokensRepository
  ) { }

  public async execute({ password, token }: IRequest): Promise<void> {
    const userToken = await this.userTokensRepository.findByToken(token);

    if (!userToken) {
      throw new AppError('User token does not exist.');
    }

    // Get user from userToken.id
    // Get when the token was created
    // Check if token has expired
    // Rewrite Hashed user password
    // Update user information
  }
}

export default ResetPasswordService;
