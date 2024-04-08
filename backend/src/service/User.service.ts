import { User } from '../interfaces/User';
import { UsersModel } from '../model/UserModel';

export default class UserService {
  constructor(
    private userModel = new UsersModel()
  ) { }

  async getAllUsers() {
    return this.userModel.getAllUsers();
  }

  async getUserById(id: number) {
    return this.userModel.getUserById(id);
  }

  async getUserByEmail(email: string) {
    return this.userModel.getUserByEmail(email);
  }

  async createUser(user: User) {
    return this.userModel.createUser(user);
  }

  async updateUser(id: number, user: User) {
    return this.userModel.updateUser(id, user);
  }

  async deleteUser(id: number) {
    return this.userModel.deleteUser(id);
  }
}