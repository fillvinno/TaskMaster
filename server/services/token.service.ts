import jwt, {Secret, JwtPayload} from 'jsonwebtoken'
import {Token} from "../models.js"

interface IJwtPayload extends JwtPayload {
  id: string
  email: string
  password: string
  createdAt: string
  updatedAt: string
  iat: number
  exp: number
}

class TokenService {
  generateTokens(payload: object): {accessToken: string, refreshToken: string} {
    const accessToken: string = jwt.sign(payload, process.env.JWT_ACCESS_SECRET as Secret, {expiresIn: '15s'})
    const refreshToken: string = jwt.sign(payload, process.env.JWT_REFRESH_SECRET as Secret, {expiresIn: '30s'})

    return {
      accessToken,
      refreshToken
    }
  }

  validateAccessToken(token: string): string | JwtPayload | null {
    try {
      return jwt.verify(token, process.env.JWT_ACCESS_SECRET as Secret)
    } catch (e) {
      return null
    }
  }

  validateRefreshToken(token: string): JwtPayload | string | null {
    try {
      return jwt.verify(token, process.env.JWT_REFRESH_SECRET as Secret)
    } catch (e) {
      return null
    }
  }

  async saveToken(userId: string, refreshToken: string): Promise<Token> {
    const tokenData: Token | null = await Token.findOne({ where: { userId } })

    if (tokenData) {
      tokenData.refreshToken = refreshToken
      return await tokenData.save()
    }

    return await Token.create({ userId, refreshToken })
  }

  async removeToken(refreshToken: string): Promise<number> {
    return await Token.destroy({ where: { refreshToken } })
  }

  async findToken(refreshToken: string): Promise<Token | null> {
    return await Token.findOne({ where: { refreshToken } })
  }
}

export default new TokenService()