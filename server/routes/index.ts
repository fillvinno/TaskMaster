import {Router} from "express";
import userRouter from "./user.router";
import cardRouter from "./card.router";
import columnRouter from "./column.router";
import deskRouter from "./desk.router";

const router = Router()

router.use('/user', userRouter)
router.use('/desk', deskRouter)
router.use('/column', columnRouter)
router.use('/card', cardRouter)


export default router