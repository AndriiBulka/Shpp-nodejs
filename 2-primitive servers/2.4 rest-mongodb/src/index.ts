import express from "express"

const PORT = 3005
const HOST = "123.0.0.1"

let ID = 3
let db = {
  items: [
    { id: 1, text: "text 22", checked: false },
    { id: 2, text: "text 23", checked: false },
    { id: 3, text: "text 24", checked: false },
  ],
}

const app = express()
app.use(express.json())
app.use(express.static("static"))

//end points
app.get("/api/v1/items", (req, res) => {
  console.log("here")

  res.json(db)
})

app.post("/api/v1/items", (req, res) => {
  const { text } = req.body
  const id = ++ID
  const item = {
    id,
    text,
    checked: false,
  }
  db.items.push(item)
  res.status(201).json(id)
})

app.put("/api/v1/items", (req, res) => {
  const { id, text, checked } = req.body
  const itemIndex = db.items.findIndex(item => item.id === id)
  db.items[itemIndex].text = text
  db.items[itemIndex].checked = checked

  res.json({ ok: true })
})

app.delete("/api/v1/items", (req, res) => {
  const { id } = req.body
  db.items = db.items.filter(item => item.id !== id)
  res.json({ ok: true })
})

app.listen(PORT, () => {
  console.log(`Server run on http://${HOST}:${PORT}`)
})
