import {NextFunction, Request, Response} from "express";
import {Task} from "../models.js";
import taskService from "../services/task.service.js";

interface IGetAllPagination {
  userId: string,
  limit: number,
  page: number
}

class TaskController {
  async create(req: Request, res: Response) {
    const { title, description, userId } = req.body
    const task = await taskService.create(title, description, userId)
    return res.json(task)
  }

  async delete(req: Request, res: Response) {
    const { id } = req.body
    await taskService.delete(id)
    return res.json(`task (${id}) has been deleted`)
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<Response<Task[], Record<string, any>> | undefined> {
    try {
      const { userId, limit, page } = req.query as unknown as IGetAllPagination
      console.log(req.query)
      const tasks: {rows: Task[], count: number} = await taskService.getAll(userId, limit, page)
      return res.json(tasks)
    } catch (e) {
      next(e)
    }
  }
}

export default new TaskController()