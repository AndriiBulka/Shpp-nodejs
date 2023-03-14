"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connectMongoDB_1 = __importDefault(require("./database/connectMongoDB"));
const cors_1 = __importDefault(require("cors"));
const route_v1_1 = __importDefault(require("./routes/route_v1"));
const route_v2_1 = __importDefault(require("./routes/route_v2"));
const express_session_1 = __importDefault(require("express-session"));
const FileStore = require("session-file-store")(express_session_1.default);
const PORT = 3005;
const HOST = "localhost";
const app = (0, express_1.default)();
app.use((0, express_session_1.default)({
    store: new FileStore({ path: "./src/sessions/" }),
    secret: "keyboard todos",
    resave: true,
    saveUninitialized: false,
    name: "session",
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
//serve static front in Express
// app.use(express.static("./public"))
// To use CORS modul need read README in "public/index.html"
app.use((0, cors_1.default)({
    origin: ["http://localhost:8080"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
}));
app.use("/", route_v1_1.default);
app.use("/", route_v2_1.default);
connectMongoDB_1.default.connect()
    .then(() => console.log("Connected to MongoDB"))
    .then(() => app.listen(PORT, () => console.log(`Server run on ${HOST} port ${PORT}`)))
    .catch(err => console.log(err));
