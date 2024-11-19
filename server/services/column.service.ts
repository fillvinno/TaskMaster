import {Card, DeskColumn} from "../models.js";
import {ApiError} from "../extensions/api.error.js";


class ColumnService {
  async getAll(deskId: string) {
    const columns: DeskColumn[] = await DeskColumn.findAll({ where: { deskId } })
    return columns.map(column => column.dataValues)
  }

  async create(title: string, deskId: string): Promise<DeskColumn> {
    const column: DeskColumn = await DeskColumn.create({ title, deskId })
    return column.dataValues
  }

  async delete(id: string): Promise<number> {
    return await DeskColumn.destroy({ where: { id } })
  }

  async changeTitle(id: string, title: string) {
    try {
      const column: DeskColumn | null = await DeskColumn.findOne({ where: { id } })

      if (column) {
        column.title = title
        await column.save()

        return column.dataValues
      }

      return ApiError.BadRequest('Такой колонки нет')
    } catch {
      return ApiError.BadRequest('Не получилось изменить название')
    }
  }
}

export default new ColumnService()