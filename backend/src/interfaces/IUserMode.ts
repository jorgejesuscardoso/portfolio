import { User } from './User';

export type DeletedUserSucess = { message: 'User deleted successfully' };
export type DeletedUserError = { message: 'User not found' };

export interface IUserModel {
  createUser(user: User): Promise<User>;
  getAllUsers(): Promise<User[]>;
  getUserById(id: number): Promise<User>;
  getUserByEmail(email: string): Promise<User>;
  updateUser(id: number, user: User): Promise<User>;
  deleteUser(id: number): Promise<boolean>;
}