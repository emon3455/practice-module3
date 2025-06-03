const fs = require("fs");

console.log("Task-1");

fs.readFile("./hello.txt",{encoding:"utf-8"},(err,data)=>{
    if(err){
        console.log("Something went wrong!");
        return;
    }
    console.log("Data1: ",data);
});

console.log("Task-3");

const text = "hi, emon";
fs.writeFile("./hello.txt",text,{encoding:"utf-8"},(err,data)=>{
    if(err){
        console.log("Something went wrong!");
        return;
    }
})

fs.readFile("./hello.txt",{encoding:"utf-8"},(err,data)=>{
    if(err){
        console.log("Something went wrong!");
        return;
    }
    console.log("Data2: ",data);
});

console.log("Task-6");


