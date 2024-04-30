import {Token, User} from "../models.js";
import {ApiError} from "../extensions/api.error.js";
import * as bcrypt from 'bcrypt'
import tokenService from "./token.service.js";
import {JwtPayload} from "jsonwebtoken";
import {UserDto} from "../dtos/user.dto.js";

class UserService {
  async registration(email: string, password: string) {
    const candidate: User | null = await User.findOne({ where: { email } })

    if (candidate) {
      throw ApiError.BadRequest('Пользователь с таким email уже зарегестрирован')
    }

    const hashPassword: string = await bcrypt.hash(password, 5)

    const user: User | null = await User.create({ email, password: hashPassword })

    const userDto: UserDto = new UserDto(user.dataValues)
    const tokens: {accessToken: string, refreshToken: string} = tokenService.generateTokens({...userDto})
    await tokenService.saveToken(userDto.id, tokens.refreshToken)

    return {...tokens, user: userDto}
  }

  async login(email: string, password: string) {
    if (!email) {
      throw ApiError.BadRequest('Укажите почту')
    }

    if (!password) {
      throw ApiError.BadRequest('Укажите пароль')
    }

    const user: User | null = await User.findOne({ where: { email } })

    if (!user) {
      throw ApiError.BadRequest('Пользователь с таким email не найден')
    }

    const isPassEquals: boolean = await bcrypt.compare(password, user.password)
    if (!isPassEquals) {
      throw ApiError.BadRequest('Неверный пароль')
    }

    const userDto = new UserDto(user.dataValues)
    const tokens: {accessToken: string, refreshToken: string} = tokenService.generateTokens({...userDto})
    await tokenService.saveToken(userDto.id, tokens.refreshToken)

    return {...tokens, user: user.dataValues}
  }

  async logout(refreshToken: string): Promise<number> {
    return await tokenService.removeToken(refreshToken)
  }

  async refresh(refreshToken: string): Promise<{accessToken: string, refreshToken: string, user: any}> {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError()
    }

    const userData: any = tokenService.validateRefreshToken(refreshToken) // fix any (todo)
    const token: Token | null = await tokenService.findToken(refreshToken)
    console.log('UD === ', userData)
    if (!userData || !token) {
      throw ApiError.UnauthorizedError()
    }

    const user: any = await User.findOne({ where: { id: userData.id } }) // fix any (todo)
    const tokens: {accessToken: string, refreshToken: string} = tokenService.generateTokens({...user?.dataValues})

    await tokenService.saveToken(user.id, tokens.refreshToken)

    return {...tokens, user: user.dataValues}
  }
}

export default new UserService()