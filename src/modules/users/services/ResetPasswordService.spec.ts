import AppError from '../../../shared/errors/AppError';
import ResetPasswordService from '../services/ResetPasswordService';
import FakeUserTokensRespository from '../repositories/fakes/FakeUserTokensRepository';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';

let createUser: ResetPasswordService;
let fakeUserTokensRepository: FakeUserTokensRespository;
let fakeUsersRepository: FakeUsersRepository;

describe('ResetPasswordService', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeUserTokensRepository = new FakeUserTokensRespository();
    createUser = new ResetPasswordService(
      fakeUserTokensRepository
    );
  });

  it('should be able to reset the password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '1234'
    });
    // get the token
    const { token } = await fakeUserTokensRepository.generate(user.id);

    // Check if generateHash was called
    // reset password
    // get the updated user
  });

})
