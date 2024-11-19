import {NextFunction, Request, Response} from "express";
import cardService from "../services/card.service.js";
import {Desk} from "../models.js";
import deskService from "../services/desk.service.js";

class DeskController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params
      const desks = await deskService.getAll(userId)
      console.log(desks)
      return res.json(desks)
    } catch (e) {
      next(e)
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, userId } = req.body
      const desk = await deskService.create(userId, title)
      console.log(desk)

      return res.json(desk)
    } catch (e) {
      next(e);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const desk = await deskService.delete(id)
      console.log(desk)

      return res.json(desk)
    } catch (e) {
      next(e)
    }
  }

  async changeTitle(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, deskId } = req.body
      const desk = await deskService.changeTitle(title, deskId)
      console.log(desk)

      return res.json(desk)
    } catch (e) {
      next(e)
    }
  }
}

export default new DeskController()