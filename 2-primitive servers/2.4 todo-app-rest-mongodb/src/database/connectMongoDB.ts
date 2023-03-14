import { MongoClient } from "mongodb"

const username = encodeURIComponent("admin")
const password = encodeURIComponent("admin1234")
const DB_URL = `mongodb+srv://${username}:${password}@cluster0.2qkuxkp.mongodb.net/app_db?retryWrites=true&w=majority`

const client: MongoClient = new MongoClient(DB_URL)
export default client
