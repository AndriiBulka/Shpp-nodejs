import express from "express"
import MongoDB from "./database/connectMongoDB"
import cors from "cors"
import route_v1 from "./routes/route_v1"
import route_v2 from "./routes/route_v2"
import session from "express-session"
const FileStore = require("session-file-store")(session)

const PORT = 3005
const HOST = "localhost"
const app = express()

app.use(
  session({
    store: new FileStore({ path: "./src/sessions/" }),
    secret: "keyboard todos",
    resave: true,
    saveUninitialized: false,
    name: "session",
  })
)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// serve static front in Express
app.use(express.static("./public"))

// To use CORS modul need read README in "public/index.html"
// app.use(
//   cors({
//     origin: ["http://localhost:8080"],
//     methods: ["GET", "POST", "DELETE", "PUT"],
//     credentials: true,
//   })
// )
app.use("/", route_v1)
app.use("/", route_v2)

MongoDB.connect()
  .then(() => console.log("Connected to MongoDB"))
  .then(() => app.listen(PORT, () => console.log(`Server run on ${HOST} port ${PORT}`)))
  .catch(err => console.log(err))
