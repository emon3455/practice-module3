import express, { Application, Request, Response } from "express";
import path from "path";
import fs from "fs";
import { json } from "stream/consumers";

const app: Application = express()
app.use(express.json());
const filePath = path.join(__dirname, "../../db/todo.json");

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.get('/todo', (req: Request, res: Response) => {
    const data = fs.readFileSync(filePath, { encoding: "utf-8" })
    const parsedData = JSON.parse(data)
    res.json(parsedData)
})

app.post('/todo/create', (req: Request, res: Response) => {
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

export default app;
