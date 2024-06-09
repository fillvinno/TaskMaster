import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import router from './routes/index'
import {Express} from "express"
import db from "./db"
import cookieParser from "cookie-parser";
import errorMiddleware from "./middlewares/error.middleware.js";


const PORT: string | number | undefined = process.env.PORT || 5000

const app: Express = express()

app.use(cookieParser())
app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL
}))
app.use(express.json())
app.use('/api', router)
app.use(errorMiddleware)

const start = async (): Promise<void> => {
  try {
    await db.authenticate()
    await db.sync({alter: true})
    app.listen(PORT, () => console.log('app listen on port ' + PORT))
  } catch (e) {
    console.error(e)
  }
}

start()