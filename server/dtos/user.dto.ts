import {User} from "../models.js";
import {JwtPayload} from "jsonwebtoken";

type TUserModel = {
  id: string,
  email: string,
  password: string,
  createdAt: string,
  updatedAt: string
}

export class UserDto {
  id: string
  email: string

  constructor(user: TUserModel) {
    this.id = user.id
    this.email = user.email
  }
}