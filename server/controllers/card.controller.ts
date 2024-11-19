import {NextFunction, Request, Response} from "express";
import cardService from "../services/card.service.js";

class CardController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const { columnId } = req.params
      const cards = await cardService.getAll(columnId)
      console.log(cards)
      return res.json(cards)
    } catch (e) {
      next(e)
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, description, columnId } = req.body
      const card = await cardService.create(title, description, columnId)
      console.log(card)

      return res.json(card)
    } catch (e) {
      next(e);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const card = await cardService.delete(id)
      console.log(card)

      return res.json(card)
    } catch (e) {
      next(e)
    }
  }

  async changeTitle(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, cardId } = req.body
      const card = await cardService.changeTitle(cardId, title)
      console.log(card)

      return res.json(card)
    } catch (e) {
      next(e)
    }
  }

  async changeDescription(req: Request, res: Response, next: NextFunction) {
    try {
      const { description, cardId } = req.body
      const card = await cardService.changeDescription(cardId, description)
      console.log(card)

      return res.json(card)
    } catch (e) {
      next(e)
    }
  }
}

export default new CardController()