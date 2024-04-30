import {Router} from "express";
import userController from "../controllers/user.controller"
import {body} from "express-validator"

const router = Router()

router.post('/login', userController.login)
router.post('/registration',
  body('email').isEmail(),
  body('password').isLength({min: 3, max: 128}),
  userController.registration)
router.get('/refresh', userController.refresh)
router.post('/logout', userController.logout)

export default router