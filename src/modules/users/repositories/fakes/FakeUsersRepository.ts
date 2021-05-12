import { uuid } from 'uuidv4';
import ICreateUserDTO from '../../dtos/ICreateUserDTO';
import IUsersRepository from '../IUsersRepository';
import { User } from '../IUsersRepository';
import { FakeUser } from '../../infra/entities/User';

export default class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  public async findById(id: string): Promise<User | undefined> {
    return;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    return;
  }

  public async create({
    name,
    email,
    password
  }: ICreateUserDTO): Promise<User> {
    const user = new FakeUser({
      id: uuid(),
      name,
      email,
      password
    });

    this.users.push(user);

    return user;
  }

  public async save(user: User): Promise<User | undefined> {
    return;
  }
}
