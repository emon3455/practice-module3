const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const filePath = path.join(__dirname, "./db/todo.json");

const server = http.createServer((req, res) => {

    const parsedURL = url.parse(req.url);
    const {pathname, query} = parsedURL;

    // get all todo
    if (pathname === "/todo" && req.method === "GET" && !query) {
        const data = fs.readFileSync(filePath, { encoding: "utf-8" })
        res.writeHead(200, {
            "content-type": "application/json"
        })
        res.end(data)
    }
    // get single todo by id
    else if(pathname.startsWith("/todo/")& req.method === "GET"){
        const id = pathname.split("=")[1];
        const allTodo = JSON.parse(fs.readFileSync(filePath,{encoding:"utf-8"}));
        const result = allTodo.find((todo)=>todo.id==id);
        res.writeHead(200, {
            "content-type": "application/json"
        })
        res.end(JSON.stringify(result));
    }
    // get todo by query
    else if(pathname.startsWith("/todo") && req.method === "GET" && query){
        const key = query.split("=")[0];
        const value = query.split("=")[1];
        
        const allTodo = JSON.parse(fs.readFileSync(filePath,{encoding:"utf-8"}));
        const result = allTodo.filter((todo) => String(todo[key])?.includes(String(value)));
        res.end(JSON.stringify(result));
    }
    // post a todo
    else if (pathname === "/todo/create" && req.method === "POST") {
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