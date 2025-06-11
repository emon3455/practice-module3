import express, { Application, Request, Response } from "express";
import { todosRoutes } from "./todo/todo.routes";

const app: Application = express()
app.use(express.json());

app.use("/todo", todosRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

export default app;
