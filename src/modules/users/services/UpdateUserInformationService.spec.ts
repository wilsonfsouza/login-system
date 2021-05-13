import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import UpdateUserInformationService from './UpdateUserInformationService';

let fakeUsersRepository: FakeUsersRepository;
let updateUserInformationService: UpdateUserInformationService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    updateUserInformationService = new UpdateUserInformationService();
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

});
