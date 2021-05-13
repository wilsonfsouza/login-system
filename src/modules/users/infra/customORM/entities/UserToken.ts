interface IUserTokenData {
  id: string;
  token: string;
  user_id: string;
  created_at: Date;
  updated_at: Date;
}

export class FakeUserToken {
  id: string;
  token: string;
  user_id: string;
  created_at: Date;
  updated_at: Date;

  constructor({ id, token, user_id, created_at, updated_at }: IUserTokenData) {
    this.id = id;
    this.token = token;
    this.user_id = user_id;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
