"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectMongoDB_1 = __importDefault(require("../database/connectMongoDB"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const saltRounds = 7;
//db collection
const users = connectMongoDB_1.default.db("app_db").collection("users");
class UserController {
    async login(req, res) {
        try {
            const { login: submitedLogin, pass: submitedPass } = req.body;
            const user = (await users.findOne({ login: submitedLogin }));
            if (!user) {
                return res.status(401).json({ massage: "User not found " });
            }
            const passMatch = await bcrypt_1.default.compare(submitedPass, user.pass);
            if (!passMatch) {
                return res.status(401).json({ massage: "Invalid  password" });
            }
            req.session.user = user;
            res.json({ ok: true });
        }
        catch (error) {
            res.status(500).json({ error });
        }
    }
    async logout(req, res) {
        req.session.destroy((err) => {
            if (err)
                console.error(err);
            res.clearCookie("session").json({ ok: true });
        });
    }
    async register(req, res) {
        try {
            const { login, pass } = req.body;
            const userExist = await users.findOne({ login });
            if (userExist) {
                return res.status(403).json({ massage: "User already exist" });
            }
            const hashedPass = await bcrypt_1.default.hash(pass, saltRounds);
            const newUser = { login, pass: hashedPass, todos: [] };
            await users.insertOne(newUser);
            res.status(200).json({ ok: true });
        }
        catch (error) {
            res.status(500).json({ error });
        }
    }
}
exports.default = new UserController();
