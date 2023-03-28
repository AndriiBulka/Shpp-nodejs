import express, { Express, Request, Response } from "express"
const app: Express = express()
const port = 3000

enum Buttons {
  plus = "plus",
  minus = "minus",
}

app.use(express.static("static"))

let plus = 0
let minus = 0

app.post("/:param", (req: Request, res: Response) => {
  let button = req.params.param
  if (button === Buttons.plus) {
    res.send({ plus: ++plus })
  } else {
    res.send({ minus: ++minus })
  }
})

app.listen(port, () => {
  console.log("server run...")
})
