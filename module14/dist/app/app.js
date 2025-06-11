"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const todo_routes_1 = require("./todo/todo.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const filePath = path_1.default.join(__dirname, "../../db/todo.json");
app.use("/todo", todo_routes_1.todosRoutes);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.default = app;
