import { FakeUserToken as UserToken } from "../../infra/entities/UserToken";
import IUserTokensRepository from "../IUserTokensRepository";

class FakeUserTokensRepository implements IUserTokensRepository {
  private userTokens: UserToken[] = [];

  public async generate(user_id: string): Promise<UserToken> {
    return;
  }

  public async findByToken(token: string): Promise<UserToken | undefined> {
    return;
  }
}

export default FakeUserTokensRepository;
