import AppError from '../../../shared/errors/AppError';
import AuthenticateUserService from '../services/AuthenticateUserService';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';

let authenticateUser: AuthenticateUserService;
let fakeUsersRepository: FakeUsersRepository;

describe('AuthenticateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    authenticateUser = new AuthenticateUserService(fakeUsersRepository);
  });

  it('should be able to authenticate a User', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    })

    const response = await authenticateUser.execute({
      email: 'johndoe@example.com',
      password: '123456',
    })

    expect(response.user).toEqual(user);
  });
})
