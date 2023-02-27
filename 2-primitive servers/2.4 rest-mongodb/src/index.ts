import express from "express"
import { Todo, readData, writeData, createID, ID, Todos } from "./database/dbController"

const PORT = 3005
const HOST = "123.0.0.1"

const app = express()
app.use(express.json())
app.use(express.static("static"))

let todos: Todos = readData()
//Endpoints
app.get("/api/v1/items", (req, res) => {
  res.json(todos)
})

app.post("/api/v1/items", (req, res) => {
  const { text } = req.body
  const ID: ID = createID()
  const item: Todo = {
    id: ID.id,
    text,
    checked: false,
  }
  todos.items.push(item)
  writeData(todos)
  res.json(ID)
})

app.put("/api/v1/items", (req, res) => {
  const { id, text, checked } = req.body
  const itemIndex = todos.items.findIndex(item => item.id === id)
  todos.items[itemIndex].text = text
  todos.items[itemIndex].checked = checked
  writeData(todos)
  res.json({ ok: true })
})

app.delete("/api/v1/items", (req, res) => {
  const { id } = req.body
  todos.items = todos.items.filter(item => item.id !== id)
  writeData(todos)
  res.json({ ok: true })
})

app.listen(PORT, () => {
  console.log(`Server run on http://${HOST}:${PORT}`)
})
