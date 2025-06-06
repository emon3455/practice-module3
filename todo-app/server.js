const http = require("http");

const server = http.createServer((req,res)=>{
    console.log(req.url);
    console.log(req.method);
    
    if(req.url==="/todo" && req.method==="GET"){
        res.end("All Todod")
    }
    else if(req.url==="/todo/create" && req.method==="POST"){
        res.end("Create Todo")
    }else{
        res.end("Route Not Found")
    }

})

server.listen(5000, "127.0.0.1",()=>{
    console.log("Server Listening at port 5000"); 
})