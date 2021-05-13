import { Request, Response } from 'express';

export default class UserInfoController {
  public async get(request: Request, response: Response): Promise<Response> {

    return response.json({ msg: "ok" });
  }

  public async update(request: Request, response: Response): Promise<Response> {


    return response.json({ msg: "ok" });
  }
}
