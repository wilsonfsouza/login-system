
interface IRequest {
  user_id: string;
  name: string;
  email: string;
}

class UpdateUserInformationService {
  constructor() { }

  public async execute({ user_id, name, email }: IRequest): Promise<void> {

  }
}

export default UpdateUserInformationService;
