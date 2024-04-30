import {NextFunction, Request, Response} from "express";
import userService from "../services/user.service.js";
import {User} from "../models.js";
import {UserDto} from "../dtos/user.dto.js";
import {Result, ValidationError, validationResult} from "express-validator";
import {ApiError} from "../extensions/api.error.js";

type TUserData = {
  accessToken: string,
  refreshToken: string,
  user: UserDto
}

class UserController {
  async registration(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body

      const errors: Result<ValidationError> = validationResult(req)

      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
      }

      const userData: TUserData = await userService.registration(email, password)
      res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})

      return res.json(userData)
    } catch (e) {
      next(e)
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body
      const userData: {user: User, accessToken: string, refreshToken: string} = await userService.login(email, password)
      res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})

      return res.json(userData)
    } catch (e) {
      next(e)
    }
  }

  async logout(req: Request, res: Response, next: NextFunction) {
    try {
      const {refreshToken} = req.cookies
      const token = await userService.logout(refreshToken)
      res.clearCookie('refreshToken')

      return res.json(token)
    } catch (e) {
      next(e);
    }
  }

  async refresh(req: Request, res: Response, next: NextFunction) {
    try {
      const {refreshToken} = req.cookies
      const userData: {accessToken: string, refreshToken: string, user: any} = await userService.refresh(refreshToken) // fix user: any (todo)
      console.log(userData)
      res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})

      return res.json(userData)
    } catch (e) {
      next(e);
    }
  }
}

export default new UserController()