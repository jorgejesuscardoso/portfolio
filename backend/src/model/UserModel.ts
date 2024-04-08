import { User } from '../interfaces/User';
import { IUserModel } from '../interfaces/IUserMode';
import UserModel from '../db/models/User.Model';

export class UsersModel implements IUserModel {
  private model = UserModel;

  public async createUser(user: User): Promise<User> {
    const rep = await this.model.create(user);
    return rep;
  }

  async getAllUsers(): Promise<User[]> {
    const rep = await this.model.findAll();
    return rep;
  }

  async getUserById(id: number): Promise<User> {
    const rep = await this.model.findByPk(id) as unknown as User;
    return rep;
  }

  async getUserByEmail(email: string): Promise<User> {
    const rep = await this.model.findOne({ where: { email } }) as unknown as User;
    return rep;
  }

  async updateUser(id: number, user: User): Promise<User> {
    const rep = await this.model.update(user, { where: { id } }) as unknown as User;
    return rep;
  }

  async deleteUser(id: number): Promise<boolean> {
    const resp = await this.model.destroy({ where: { id } });
    const isDeleted = resp === 1 ? true : false;
    return isDeleted;
  }
}