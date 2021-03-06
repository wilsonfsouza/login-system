import { v4 as uuidv4 } from 'uuid';
import { FakeUserToken as UserToken } from '../../infra/customORM/entities/UserToken';
import IUserTokensRepository from '../IUserTokensRepository';

class FakeUserTokensRepository implements IUserTokensRepository {
  private userTokens: UserToken[] = [];

  public async generate(user_id: string): Promise<UserToken> {
    const userToken = new UserToken({
      id: uuidv4(),
      token: uuidv4(),
      user_id,
      created_at: new Date(),
      updated_at: new Date()
    });

    this.userTokens.push(userToken);

    return userToken;
  }

  public async findByToken(token: string): Promise<UserToken | undefined> {
    const findUserToken = this.userTokens.find(userToken => userToken.token === token);
    return findUserToken;
  }
}

export default FakeUserTokensRepository;
