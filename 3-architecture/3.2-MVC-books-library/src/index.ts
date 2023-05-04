import dotenv from "dotenv"
import express from "express"
import routes from "./routes/routes.js"
import path from "path"
import startCron from "./controllers/CronController";


startCron()
dotenv.config()

const PORT = process.env.SERVER_PORT
const HOST = process.env.SERVER_HOST
const app = express()

app.set("view engine", "ejs")


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve("views")))

app.use(routes)

app.listen(PORT, () => console.log(`Server run on ${HOST}:${PORT}`))
