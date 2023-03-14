import express, { Request, Response } from "express"
import { isAuthorized } from "../middlewares/isAuthorized"
import TodoController from "../controllers/TodoController"
import UserController from "../controllers/UserController"
const route_v2 = express.Router()
const path = "/api/v2/router"

route_v2.post(path, async (req: Request, res: Response) => {
  switch (req.query.action) {
    case "login":
      await UserController.login(req, res)
      break
    case "logout":
      UserController.logout(req, res)
      break
    case "register":
      UserController.register(req, res)
      break
    case "getItems":
      isAuthorized(req, res, TodoController.getAll)
      break
    case "deleteItem":
      isAuthorized(req, res, TodoController.delete)
      break
    case "createItem":
      isAuthorized(req, res, TodoController.create)
      break
    case "editItem":
      isAuthorized(req, res, TodoController.update)
      break
  }
})
export default route_v2
