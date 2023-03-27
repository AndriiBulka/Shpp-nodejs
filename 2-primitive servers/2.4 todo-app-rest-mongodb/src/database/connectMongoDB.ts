import { MongoClient } from "mongodb"
import dotenv from "dotenv"
dotenv.config()

const username = process.env.DB_USER
const password = process.env.DB_PASSWORD
const db_name = process.env.DB_NAME
const DB_URL = `mongodb+srv://${username}:${password}@cluster0.2qkuxkp.mongodb.net/${db_name}?retryWrites=true&w=majority`

const client: MongoClient = new MongoClient(DB_URL)
export default client
