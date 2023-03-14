import express from "express"
import { isAuthorized } from "../middlewares/isAuthorized"
import TodoController from "../controllers/TodoController"
import UserController from "../controllers/UserController"
const route_v1 = express.Router()
const path = "/api/v1"
//user
route_v1.post(path + "/login", UserController.login)
route_v1.post(path + "/logout", UserController.logout)
route_v1.post(path + "/register", UserController.register)
//items
route_v1.get(path + "/items", isAuthorized, TodoController.getAll)
route_v1.post(path + "/items", isAuthorized, TodoController.create)
route_v1.put(path + "/items", isAuthorized, TodoController.update)
route_v1.delete(path + "/items", isAuthorized, TodoController.delete)

export default route_v1
