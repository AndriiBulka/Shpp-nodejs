"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const isAuthorized_1 = require("../middlewares/isAuthorized");
const TodoController_1 = __importDefault(require("../controllers/TodoController"));
const UserController_1 = __importDefault(require("../controllers/UserController"));
const route_v1 = express_1.default.Router();
const path = "/api/v1";
//user
route_v1.post(path + "/login", UserController_1.default.login);
route_v1.post(path + "/logout", UserController_1.default.logout);
route_v1.post(path + "/register", UserController_1.default.register);
//items
route_v1.get(path + "/items", isAuthorized_1.isAuthorized, TodoController_1.default.getAll);
route_v1.post(path + "/items", isAuthorized_1.isAuthorized, TodoController_1.default.create);
route_v1.put(path + "/items", isAuthorized_1.isAuthorized, TodoController_1.default.update);
route_v1.delete(path + "/items", isAuthorized_1.isAuthorized, TodoController_1.default.delete);
exports.default = route_v1;
