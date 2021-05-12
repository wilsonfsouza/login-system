import { v4 as uuidv4 } from 'uuid';
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
    const findUser = this.users.find(user => user.email === email);
    return findUser;
  }

  public async create({
    name,
    email,
    password
  }: ICreateUserDTO): Promise<User> {
    const user = new FakeUser({
      id: uuidv4(),
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
