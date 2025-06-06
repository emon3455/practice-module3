const http = require("http");
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "./db/todo.json");

const server = http.createServer((req, res) => {

    // get all todo
    if (req.url === "/todo" && req.method === "GET") {
        const data = fs.readFileSync(filePath, { encoding: "utf-8" })
        res.writeHead(200, {
            "content-type": "application/json"
        })
        res.end(data)
    }
    // post a todo
    else if (req.url === "/todo/create" && req.method === "POST") {
        let data = "";
        req.on("data", (chunk) => {
            data += chunk;
        })
        req.on("end", () => {
            const allOldTodo = JSON.parse(fs.readFileSync(filePath, { encoding: "utf-8" }))
            allOldTodo.push(JSON.parse(data));
            fs.writeFileSync(filePath, JSON.stringify(allOldTodo), { encoding: "utf-8" })

            res.writeHead(201, {
                "content-type": "application/json"
            });
            res.end(JSON.stringify({
                message: "Todo Added Successfully",
                data: JSON.parse(data)
            }));
        })
    }
    else {
        res.end("Route Not Found")
    }

})

server.listen(5000, "127.0.0.1", () => {
    console.log("Server Listening at port 5000");
})