import {NextFunction, Request, Response} from "express";
import {Card, DeskColumn} from "../models.js";
import cardService from "../services/card.service.js";
import columnService from "../services/column.service.js";

class ColumnController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const { deskId } = req.params
      const columns = await columnService.getAll(deskId)
      console.log(columns)
      return res.json(columns)
    } catch (e) {
      next(e)
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, deskId } = req.body
      const column: DeskColumn = await columnService.create(title, deskId)
      console.log(column)

      return res.json(column)
    } catch (e) {
      next(e);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const column = await columnService.delete(id)
      console.log(column)

      return res.json(column)
    } catch (e) {
      next(e)
    }
  }

  async changeTitle(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, columnId } = req.body
      const column = await columnService.changeTitle(columnId, title)
      console.log(column)

      return res.json(column)
    } catch (e) {
      next(e)
    }
  }
}

export default new ColumnController()