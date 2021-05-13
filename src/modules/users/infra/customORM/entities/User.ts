interface IUserData {
  id: string;
  name: string;
  email: string;
  password: string;
}

export class FakeUser {
  id: string;
  name: string;
  email: string;
  password: string;

  constructor({ id, name, email, password }: IUserData) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
