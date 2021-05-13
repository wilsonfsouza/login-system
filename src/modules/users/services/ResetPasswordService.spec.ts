import AppError from '../../../shared/errors/AppError';
import ResetPasswordService from '../services/ResetPasswordService';
import FakeUserTokensRespository from '../repositories/fakes/FakeUserTokensRepository';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

let resetPasswordService: ResetPasswordService;
let fakeUserTokensRepository: FakeUserTokensRespository;
let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;

describe('ResetPasswordService', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeUserTokensRepository = new FakeUserTokensRespository();
    fakeHashProvider = new FakeHashProvider();

    resetPasswordService = new ResetPasswordService(
      fakeUserTokensRepository,
      fakeUsersRepository,
      fakeHashProvider
    );
  });

  it('should be able to reset the password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '1234'
    });

    const { token } = await fakeUserTokensRepository.generate(user.id);

    const generateHash = jest.spyOn(fakeHashProvider, 'generateHash');

    await resetPasswordService.execute({
      password: 'new-password',
      token,
    });

    const updatedUser = await fakeUsersRepository.findById(user.id);

    expect(generateHash).toHaveBeenCalledWith('new-password');
    expect(updatedUser?.password).toBe('new-password');
  });

  it('should not be able to reset password without a token', async () => {
    await expect(
      resetPasswordService.execute({
        password: '1234',
        token: 'invalid-token',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

})
