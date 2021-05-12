import CreateUserService from '../services/CreateUserService';

let createUser: CreateUserService;

describe('CreateUser', () => {
  it('should be able to create a new User', async () => {
    createUser = new CreateUserService();

    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    })

    expect(user).toHaveProperty('id');
  });

})
