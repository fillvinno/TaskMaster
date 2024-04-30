import {Request, Response, NextFunction} from "express"
import {ApiError} from "../extensions/api.error"
import tokenService from "../services/token.service"
import {JwtPayload} from "jsonwebtoken";

interface IUserDataReq extends Request{
  user: string | JwtPayload
}

type TUserData = string | JwtPayload | null

export default function (req: IUserDataReq, res: Response, next: NextFunction): void {
  try {
    const authorizationHeader: string | undefined = req.headers.authorization

    if (!authorizationHeader) {
      return next(ApiError.UnauthorizedError())
    }

    const accessToken: string = authorizationHeader.split(' ')[1]
    if (!accessToken) {
      return next(ApiError.UnauthorizedError())
    }

    const userData: TUserData = tokenService.validateAccessToken(accessToken)
    if (!userData) {
      return next(ApiError.UnauthorizedError())
    }

    req.user = userData
    next()
  } catch (e) {
    return next(ApiError.UnauthorizedError())
  }
}