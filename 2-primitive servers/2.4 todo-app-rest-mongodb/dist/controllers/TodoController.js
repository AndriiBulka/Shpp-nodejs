"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectMongoDB_1 = __importDefault(require("../database/connectMongoDB"));
const users = connectMongoDB_1.default.db("app_db").collection("users");
class TodoController {
    async getAll(req, res) {
        try {
            const login = req.session.user?.login;
            const user = await users.findOne({ login });
            res.json({
                items: user?.todos,
            });
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
    async create(req, res) {
        try {
            const { text } = req.body;
            const login = req.session.user?.login;
            const id = Date.now();
            await users.updateOne({ login }, { $push: { todos: { id, text, checked: false } } });
            res.json({ id });
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
    async update(req, res) {
        try {
            const { id, text, checked } = req.body;
            console.log(id, text, checked);
            const login = req.session.user?.login;
            await users.updateOne({ login, "todos.id": id }, { $set: { "todos.$": { id, text, checked } } });
            res.json({ ok: true });
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
    async delete(req, res) {
        try {
            const { id } = req.body;
            const login = req.session.user?.login;
            await users.updateOne({ login }, { $pull: { todos: { id } } });
            res.json({ ok: true });
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
}
exports.default = new TodoController();
