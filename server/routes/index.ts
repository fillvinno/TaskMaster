import {Router} from "express";
import userRouter from "./user.router";
import taskRouter from "./task.router";

const router = Router()

router.use('/task', taskRouter)
router.use('/user', userRouter)

export default router