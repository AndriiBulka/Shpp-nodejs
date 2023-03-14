"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const isAuthorized_1 = require("../middlewares/isAuthorized");
const TodoController_1 = __importDefault(require("../controllers/TodoController"));
const UserController_1 = __importDefault(require("../controllers/UserController"));
const route_v2 = express_1.default.Router();
const path = "/api/v2/router";
route_v2.post(path, async (req, res) => {
    switch (req.query.action) {
        case "login":
            await UserController_1.default.login(req, res);
            break;
        case "logout":
            UserController_1.default.logout(req, res);
            break;
        case "register":
            UserController_1.default.register(req, res);
            break;
        case "getItems":
            (0, isAuthorized_1.isAuthorized)(req, res, TodoController_1.default.getAll);
            break;
        case "deleteItem":
            (0, isAuthorized_1.isAuthorized)(req, res, TodoController_1.default.delete);
            break;
        case "createItem":
            (0, isAuthorized_1.isAuthorized)(req, res, TodoController_1.default.create);
            break;
        case "editItem":
            (0, isAuthorized_1.isAuthorized)(req, res, TodoController_1.default.update);
            break;
    }
});
exports.default = route_v2;
