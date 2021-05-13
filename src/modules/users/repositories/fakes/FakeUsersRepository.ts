import { v4 as uuidv4 } from 'uuid';
import ICreateUserDTO from '../../dtos/ICreateUserDTO';
import IUsersRepository from '../IUsersRepository';
import { FakeUser as User } from '../../infra/customORM/entities/User';

export default class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  public async findById(id: string): Promise<User | undefined> {
    const user = this.users.find(user => user.id === id);
    return user;
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
    const user = new User({
      id: uuidv4(),
      name,
      email,
      password
    });

    this.users.push(user);

    return user;
  }

  public async update(user: User): Promise<User> {
    const userIndex = this.users.findIndex(findUser => findUser.id === user.id);
    this.users[userIndex] = user;
    return user;
  }
}
