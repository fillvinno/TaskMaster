import {Router} from "express";
import cardController from "../controllers/card.controller.js";

const router = Router()

router.get('/:columnId', cardController.getAll)
router.post('/', cardController.create)
router.patch('/change-title', cardController.changeTitle)
router.patch('/change-description', cardController.changeDescription)
router.delete('/:id', cardController.delete)

export default router