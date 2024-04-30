import {ValidationError} from "express-validator";

export class ApiError extends Error {
  status: number
  errors: unknown[]

  constructor(status: number, message: string, errors: ValidationError[] = []) {
    super(message)
    this.status = status
    this.errors = errors
  }

  static UnauthorizedError(): ApiError {
    return new ApiError(401, 'Пользователь не авторизован')
  }

  static BadRequest(message: string, errors: ValidationError[] = []): ApiError {
    return new ApiError(400, message, errors);
  }
}