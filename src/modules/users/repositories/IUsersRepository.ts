import ICreateUserDTO from '../dtos/ICreateUserDTO';

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
}

export default interface IUsersRepository {
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<User>;
  update(user: User): Promise<User | undefined>;
}
