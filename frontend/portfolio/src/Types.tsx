export type UserLoginType = {
  email: string;
  password: string;
}
export type UserDataType = UserLoginType & {
  id?: number;
  username: string;
  role: string;
}
export type UserRegisterType = UserDataType & {
  fullName: string;
  address: string;
  birthday: string;
}
export type ProfileType = UserRegisterType & {
  token?: string;
  image: string;
}
export type ResponseSuccess = {
  token: string;
}
export type ResponseError = {
  message: string;
}