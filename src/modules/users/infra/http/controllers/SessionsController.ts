import { Request, Response } from 'express';

import AuthenticateUserService from '../../../services/AuthenticateUserService';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    return response.json({ msg: 'ok' });
  }
}
