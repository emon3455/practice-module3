"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRoutes = void 0;
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
exports.todosRoutes = express_1.default.Router();
const filePath = path_1.default.join(__dirname, "../../../db/todo.json");
exports.todosRoutes.get('/', (req, res) => {
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    const parsedData = JSON.parse(data);
    res.json(parsedData);
});
exports.todosRoutes.post('/create', (req, res) => {
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
