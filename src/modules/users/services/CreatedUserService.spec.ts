import CreateUserService from '../services/CreateUserService';

let createUser: CreateUserService;

describe('CreateUser', () => {
  beforeEach(() => {
    createUser = new CreateUserService();
  });

  it('should be able to create a new User', async () => {
    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    })

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new User with the same email', async () => {
    await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    await expect(createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    }),
    ).rejects.toBeInstanceOf(Error);
  });
})
