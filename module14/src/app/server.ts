import app from "./app";

let server;
const port = 5000

const uri = "mongodb://127.0.0.1:27017/todoDB?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.2"

const bootstrap = async () => {
    server = app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

bootstrap();