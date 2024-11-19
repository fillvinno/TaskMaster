import {Card, DeskColumn} from "../models.js";
import {ApiError} from "../extensions/api.error.js";


class CardService {
  async getAll(columnId: string) {
    const cards: Card[] = await Card.findAll({ where: { columnId } })
    return cards.map((card: Card) => card.dataValues)
  }

  async create(title: string, description: string, columnId: string): Promise<Card> {
    const card: Card = await Card.create({ title, description, columnId })
    return card.dataValues
  }

  async delete(id: string): Promise<number> {
    return await Card.destroy({ where: { id } })
  }

  async changeTitle(cardId: string, title: string) {
    try {
      const card: Card | null = await Card.findOne({ where: { id: cardId } })

      if (card) {
        card.title = title
        await card.save()

        return card.dataValues
      }

      return ApiError.BadRequest('Такой карточки нет')
    } catch {
      return ApiError.BadRequest('Не получилось изменить название')
    }
  }

  async changeDescription(cardId: string, description: string) {
    try {
      const card: Card | null = await Card.findOne({ where: { id: cardId } })

      if (card) {
        card.description = description
        await card.save()

        return card.dataValues
      }

      return ApiError.BadRequest('Такой карточки нет')
    } catch {
      return ApiError.BadRequest('Не получилось изменить описание')
    }
  }
}

export default new CardService()