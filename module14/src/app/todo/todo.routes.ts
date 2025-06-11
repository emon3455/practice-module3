import express, { Request, Response } from "express"
import fs from "fs";
import path from "path";
export const todosRoutes = express.Router();

const filePath = path.join(__dirname, "../../../db/todo.json");


todosRoutes.get('/', (req: Request, res: Response) => {
    const data = fs.readFileSync(filePath, { encoding: "utf-8" })
    const parsedData = JSON.parse(data)
    res.json(parsedData)
})

todosRoutes.post('/create', (req: Request, res: Response) => {
    const body = req.body;
    const data = fs.readFileSync(filePath, { encoding: "utf-8" })
    const parsedData = JSON.parse(data)
    parsedData.push(body);
    fs.writeFileSync(filePath, JSON.stringify(parsedData), {encoding:"utf-8"})
    res.json({
        message: "Todo Created Successfully..!",
        todo: body
    })
})