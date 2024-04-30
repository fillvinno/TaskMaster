import {Sequelize} from "sequelize-typescript"
import {CompletedTasks, Task, Token, User} from "./models.js";
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname)

const port: number = parseInt(<string><unknown>process.env.DB_PORT, 10) || 5000

export default new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD!,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    port,
    logging: false,
    models: [User, Task, CompletedTasks, Token]
  }
)