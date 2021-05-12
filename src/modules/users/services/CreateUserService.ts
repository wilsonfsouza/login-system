import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import { FakeUser as User } from '../infra/entities/User';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: IRequest): Promise<User> {
    const fakeUsersRepository = new FakeUsersRepository();

    const user = await fakeUsersRepository.create({ name, email, password });

    return user;
  }
}

export default CreateUserService;
