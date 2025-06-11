import express, { Application, Request, Response } from "express";
import path from "path";
import fs from "fs";
import { todosRoutes } from "./todo/todo.routes";

const app: Application = express()
app.use(express.json());
const filePath = path.join(__dirname, "../../db/todo.json");

app.use("/todo", todosRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

export default app;
