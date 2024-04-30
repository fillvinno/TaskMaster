import {Router} from "express";
import taskController from "../controllers/task.controller.js";

const router = Router()

router.get('/', taskController.getAll)
router.post('/create', taskController.create)
router.post('/delete', taskController.delete)

export default router