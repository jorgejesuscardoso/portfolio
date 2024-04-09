import { Request, Response } from 'express';
import UserService from '../service/User.service';
import * as jwt from 'jsonwebtoken';
import { User } from '../interfaces/User';

export default class UserController {
  constructor(
    private users = new UserService()
  ) { }


  public async createUser(req: Request, res: Response) {
    const user = req.body;
    const resp = await this.users.createUser(user);
    return res.status(200).json(resp);
  }

  public async loginUser(req: Request, res: Response) {
    const { email, password } = req.body;
    if (!email) {
      return res.status(200).json({ message: 'Email is required' });
    }
    const resp = await this.users.LoginUser(email, +password);
    if (!resp) {
      return res.status(200).json({ message: 'Email or password is invalid' });
    }
    const { id } = resp;
    const token = jwt.sign({ id }, process.env.SECRET as string);
    return res.status(200).json({ token });
  }

  public async GetUserByToken(req: Request, res: Response) {
    const { id } = req.body.user;
    const userData = await this.users.getUserById(id) as User;
    const data = userData.dataValues;
    return res.status(200).json(data);
  }

  public async getAllUsers(req: Request, res: Response) {
    const resp = await this.users.getAllUsers();
    return res.status(200).json(resp);
  }

  public async getUserById(req: Request, res: Response) {
    const id = req.params.id;
    const resp = await this.users.getUserById(+id);
    return res.status(200).json(resp);
  }

  public async getUserByEmail(req: Request, res: Response) {
    const email = req.params.email;
    const resp = await this.users.getUserByEmail(email);
    return res.status(200).json(resp);
  }

  public async updateUser(req: Request, res: Response) {
    const id = req.params.id;
    const user = req.body;
    const resp = await this.users.updateUser(+id, user);
    return res.status(200).json(resp);
  }

  public async deleteUser(req: Request, res: Response) {
    const id = req.params.id;
    const resp = await this.users.deleteUser(+id);
    return res.status(200).json(resp);
  }
}