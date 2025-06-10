"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const filePath = path_1.default.join(__dirname, "../../db/todo.json");
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/todo', (req, res) => {
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    const parsedData = JSON.parse(data);
    res.json(parsedData);
});
app.post('/todo/create', (req, res) => {
    const body = req.body;
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    const parsedData = JSON.parse(data);
    parsedData.push(body);
    fs_1.default.writeFileSync(filePath, JSON.stringify(parsedData), { encoding: "utf-8" });
    res.json({
        message: "Todo Created Successfully..!",
        todo: body
    });
});
exports.default = app;
