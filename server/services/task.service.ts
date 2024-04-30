import {Task} from "../models.js"

class TaskService {
  async create(title: string, description: string, userId: string): Promise<Task> {
    return await Task.create({ title, description, userId })
  }

  async delete(id: string): Promise<number> {
    return Task.destroy({ where: { id } })
  }

  async getAll(userId: any, limit: number = 2, page: number = 1): Promise<{rows: Task[], count: number}> {
    page = page || 1
    limit = limit || 10

    let offset = page * limit - limit

    return await Task.findAndCountAll({ where: { userId }, limit, offset})
  }
}

export default new TaskService()