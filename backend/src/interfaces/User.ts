export type User = {
  id: number,
  email: string,
  password: string,
  username: string,
  role: string,
  dataValues?: {}
};

export type UserWithOptionalId = {
  id?: number,
  email: string,
  password: string,
  username: string,
};