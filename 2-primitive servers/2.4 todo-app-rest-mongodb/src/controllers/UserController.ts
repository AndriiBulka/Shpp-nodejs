import { Request, Response } from "express"
import client from "../database/connectMongoDB"
import bcrypt from "bcrypt"
import { User } from "../database/Types"

const saltRounds = 7
//this is required to add a new property to the req.session object
declare module "express-session" {
  interface SessionData {
    user: User
  }
}
//db collection
const users = client.db("app_db").collection("users")

class UserController {
  async login(req: Request, res: Response) {
    try {
      const { login: submitedLogin, pass: submitedPass } = req.body
      const user: User = (await users.findOne({ login: submitedLogin })) as unknown as User

      if (!user) {
        return res.status(401).json({ massage: "User not found " })
      }

      const passMatch = await bcrypt.compare(submitedPass, user.pass)

      if (!passMatch) {
        return res.status(401).json({ massage: "Invalid  password" })
      }

      req.session.user = user
      res.json({ ok: true })
    } catch (error) {
      res.status(500).json({ error })
    }
  }

  async logout(req: Request, res: Response) {
    req.session.destroy((err: Error) => {
      if (err) console.error(err)

      res.clearCookie("session").json({ ok: true })
    })
  }

  async register(req: Request, res: Response) {
    try {
      const { login, pass } = req.body
      const userExist = await users.findOne({ login })

      if (userExist) {
        return res.status(403).json({ massage: "User already exist" })
      }

      const hashedPass = await bcrypt.hash(pass, saltRounds)
      const newUser: User = { login, pass: hashedPass, todos: [] }
      await users.insertOne(newUser)
      res.status(200).json({ ok: true })
    } catch (error) {
      res.status(500).json({ error })
    }
  }
}

export default new UserController()
