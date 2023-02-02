const express = require('express')
const app = express()
const port = 3000
let count = 0
app.get('/', (req, res) => {
  res.send(`Hello World! <button><a href="/counter" style="text-decoration:none; font: 20 px;">Counter</a></button>`)
})
app.get('/counter', (req, res) => {
    res.send(`<h1>Page visits = ${++count} times</h1>`)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})