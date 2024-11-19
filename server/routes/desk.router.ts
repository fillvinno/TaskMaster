import {Router} from "express";
import columnController from "../controllers/column.controller.js";
import deskController from "../controllers/desk.controller.js";

const router = Router()

router.get('/:userId', deskController.getAll)
router.post('/', deskController.create)
router.patch('/change-title', deskController.changeTitle)
router.delete('/:id', deskController.delete)

export default router