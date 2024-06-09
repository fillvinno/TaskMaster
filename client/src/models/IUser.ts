export interface IUser {
  id: string,
  email: string
}

export interface IUserFormLogin {
  email: string,
  password: string
}

export interface IUserFormRegistration extends IUserFormLogin{
  confirmPassword: string
}