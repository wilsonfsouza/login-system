import IUserTokensRepository from "../repositories/IUserTokensRepository";

class ResetPasswordService {
  constructor(
    private userTokensRepository: IUserTokensRepository
  ) { }

  public async execute(): Promise<void> {
    // Check if user has a valid jwt token
    // Get user from userToken.id
    // Get when the token was created
    // Check if token has expired
    // Rewrite Hashed user password
    // Update user information
  }
}

export default ResetPasswordService;