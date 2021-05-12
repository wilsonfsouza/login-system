import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';

let fakeUsersRepository: FakeUsersRepository;

describe('CreateUser', () => {
  it('should be able to create a new User', async () => {
    fakeUsersRepository = new FakeUsersRepository();

    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    })

    expect(user).toHaveProperty('id');
  })
})
