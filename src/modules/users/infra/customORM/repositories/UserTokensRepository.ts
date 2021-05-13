import { v4 as uuidv4 } from 'uuid';
import { FakeUserToken as UserToken } from '../../../infra/entities/UserToken';
import IUserTokensRepository from '../../../repositories/IUserTokensRepository';
import { user_tokens } from '../../../../../shared/infra/customORM/fakeDatabase/user_tokens';


class UserTokensRepository implements IUserTokensRepository {
  private ormRepository: UserToken[] = [];

  constructor() {
    this.ormRepository = user_tokens;
  }

  public async generate(user_id: string): Promise<UserToken> {
    const userToken = new UserToken({
      id: uuidv4(),
      token: uuidv4(),
      user_id,
      created_at: new Date(),
      updated_at: new Date()
    });

    this.ormRepository.push(userToken);

    return userToken;
  }

  public async findByToken(token: string): Promise<UserToken | undefined> {
    const findUserToken = this.ormRepository.find(userToken => userToken.token === token);
    return findUserToken;
  }
}

export default UserTokensRepository;
