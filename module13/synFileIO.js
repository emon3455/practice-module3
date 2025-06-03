const fs = require("fs");

console.log("Task-1");

console.log(fs.readFileSync("./hello.txt",{encoding:"utf-8"}));


const text = "Learning File System";

fs.writeFileSync("./hello.txt",text);

console.log("Task-4");

console.log(fs.readFileSync("./hello.txt",{encoding:"utf-8"}));
;

console.log("Task-6");


