"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const username = encodeURIComponent("admin");
const password = encodeURIComponent("admin1234");
const DB_URL = `mongodb+srv://${username}:${password}@cluster0.2qkuxkp.mongodb.net/app_db?retryWrites=true&w=majority`;
const client = new mongodb_1.MongoClient(DB_URL);
exports.default = client;
