import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import router from './routes/index'
import {Express} from "express"
import db from "./db"


const PORT: string | number | undefined = process.env.PORT || 5000

const app: Express = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)

const start = async () => {
  try {
    await db.authenticate()
    await db.sync({alter: true})
    app.listen(PORT, () => console.log('app listen on port ' + PORT))
  } catch (e) {
    console.error(e)
  }
}

start()