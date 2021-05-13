import { FakeUser as User } from "../infra/entities/User";


interface IRequest {
  user_id: string;
}

class ShowUserInformationService {
  constructor(
  ) { }

  public async execute({ user_id }: IRequest): Promise<void> { }

}

export default ShowUserInformationService;
