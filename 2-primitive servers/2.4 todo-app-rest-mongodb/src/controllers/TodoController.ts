import { Request, Response } from "express"
import client from "../database/connectMongoDB"

const users = client.db("app_db").collection("users")

class TodoController {
  async getAll(req: Request, res: Response) {
    try {
      const login = req.session.user?.login
      const user = await users.findOne({ login })
      res.json({
        items: user?.todos,
      })
    } catch (err) {
      res.status(500).json(err)
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { text } = req.body
      const login = req.session.user?.login
      const id = Date.now()
      await users.updateOne({ login }, { $push: { todos: { id, text, checked: false } } })
      res.json({ id })
    } catch (err) {
      res.status(500).json(err)
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id, text, checked } = req.body
      console.log(id, text, checked)
      const login = req.session.user?.login
      await users.updateOne({ login, "todos.id": id }, { $set: { "todos.$": { id, text, checked } } })
      res.json({ ok: true })
    } catch (err) {
      res.status(500).json(err)
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.body
      const login = req.session.user?.login
      await users.updateOne({ login }, { $pull: { todos: { id } } })
      res.json({ ok: true })
    } catch (err) {
      res.status(500).json(err)
    }
  }
}

export default new TodoController()
