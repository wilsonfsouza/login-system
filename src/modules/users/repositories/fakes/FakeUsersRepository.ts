import ICreateUserDTO from '../../dtos/ICreateUserDTO';
import IUsersRepository from '../IUsersRepository';
import { User } from '../IUsersRepository';

export default class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  public async findById(id: string): Promise<User | undefined> {
    return;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    return;
  }

  public async create(data: ICreateUserDTO): Promise<User> {
    return;
  }

  public async save(user: User): Promise<User> {
    return;
  }
}
