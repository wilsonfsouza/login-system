import ICreateUserDTO from '../dtos/ICreateUserDTO';

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
}

export default interface IUsersRepository {
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
}
