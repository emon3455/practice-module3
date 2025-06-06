const http = require("http");

const server = http.createServer((req,res)=>{
    res.end("Welcome to TODO-APP server")
})

server.listen(5000, "127.0.0.1",()=>{
    console.log("Server Listening at port 5000"); 
})