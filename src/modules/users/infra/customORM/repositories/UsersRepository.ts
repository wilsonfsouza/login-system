import { v4 as uuidv4 } from 'uuid';
import ICreateUserDTO from '../../../dtos/ICreateUserDTO';
import IUsersRepository from '../../../repositories/IUsersRepository';
import { FakeUser as User } from '../entities/User';
import { users } from '../../../../../shared/infra/customORM/fakeDatabase/users';

export default class UsersRepository implements IUsersRepository {
  private ormRepository: User[] = [];

  constructor() {
    this.ormRepository = users;
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = this.ormRepository.find(user => user.id === id);
    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = this.ormRepository.find(user => user.email === email);
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

    this.ormRepository.push(user);

    return user;
  }

  public async update(user: User): Promise<User> {
    const userIndex = this.ormRepository.findIndex(findUser => findUser.id === user.id);
    this.ormRepository[userIndex] = user;
    return user;
  }
}
