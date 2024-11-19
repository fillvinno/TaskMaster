import {Card, Desk} from "../models.js";
import {ApiError} from "../extensions/api.error.js";


class DeskService {
  async getAll(userId: string) {
    const desks: Desk[] = await Desk.findAll({ where: { userId } })
    return desks.map((desk: Desk) => desk.dataValues)
  }

  async create(userId: string, title: string) {
    const desk: Desk = await Desk.create({ title, userId })
    return desk.dataValues
  }

  async delete(id: string) {
    return await Desk.destroy({ where: { id } })
  }

  async changeTitle(title: string, deskId: string) {
    try {
      const desk: Desk | null = await Desk.findOne({ where: { id: deskId } })
      console.log(title)
      if (desk) {
        desk.title = title
        await desk.save()

        return desk.dataValues
      }

      return ApiError.BadRequest('Такой доски нет')
    } catch {
      return ApiError.BadRequest('Не получилось изменить название')
    }  }
}

export default new DeskService()