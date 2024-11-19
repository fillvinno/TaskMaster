import {Router} from "express";
import cardController from "../controllers/card.controller.js";
import columnController from "../controllers/column.controller.js";

const router = Router()

router.get('/:deskId', columnController.getAll)
router.post('/', columnController.create)
router.patch('/change-title', columnController.changeTitle)
router.delete('/:id', columnController.delete)

export default router