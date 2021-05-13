import FakeUsersRepository from "../repositories/fakes/FakeUsersRepository";
import ShowUserInformationService from "./ShowUserInformationService";

let fakeUsersRepository: FakeUsersRepository;
let showUserInformationService: ShowUserInformationService;

describe('ShowProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    showUserInformationService = new ShowUserInformationService(fakeUsersRepository);
  });

  it('should be able to show the user information', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '1234',
    });

    const userInformation = await showUserInformationService.execute({
      user_id: user.id,
    });

    expect(userInformation?.name).toBe('John Doe');
    expect(userInformation?.email).toBe('johndoe@example.com');
  });

});
