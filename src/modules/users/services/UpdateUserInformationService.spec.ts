import AppError from '../../../shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import UpdateUserInformationService from './UpdateUserInformationService';

let fakeUsersRepository: FakeUsersRepository;
let updateUserInformationService: UpdateUserInformationService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    updateUserInformationService = new UpdateUserInformationService(
      fakeUsersRepository
    );
  });

  it('should be able to update the user information', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const updatedUser = await updateUserInformationService.execute({
      user_id: user.id,
      name: 'Johnny Doe',
      email: 'johnnydoe@example.com',
    });

    expect(updatedUser.name).toBe('Johnny Doe');
    expect(updatedUser.email).toBe('johnnydoe@example.com');
  });

  it('should not be able to update the profile information if user does not exist', async () => {
    await expect(
      updateUserInformationService.execute({
        user_id: 'non-existent-user-id',
        name: 'Invalid User',
        email: 'invaliduser@test.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update email to an email already in use', async () => {
    await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const user = await fakeUsersRepository.create({
      name: 'Jon Doe',
      email: 'jondoe@example.com',
      password: '123456',
    });

    await expect(
      updateUserInformationService.execute({
        user_id: user.id,
        name: 'Johnny Doe',
        email: 'johndoe@example.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to update the password using an old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const updatedUser = await updateUserInformationService.execute({
      user_id: user.id,
      name: 'Johnny Doe',
      email: 'johnnydoe@example.com',
      old_password: '123456',
      password: '123123',
    });

    expect(updatedUser.password).toBe('123123');
  });
});
