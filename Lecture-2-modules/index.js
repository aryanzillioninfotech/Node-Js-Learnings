console.log("heloooooo.....");

//Now First We Are Started From CommonJS Module System So For This We Want To Assign Type As CommonJS In Package.json File Like Below
// "type": "commonjs"

//After This We Can Use Require Keyword To Import Modules In Our File Like Below

// const names = require("./names");
// const sayHi = require("./utils");
// const data = require("./alternative-flavor");
// require("./mind-grenade");

// let {add,sub,div} = require("./Home");

// console.log(add(10,20));
// console.log(sub(30,10));
// console.log(div(20,10));

//Now We Want to Do Core Modules With Modules So For This We Can Use OS Module Like Below
// import os from "os";

// for it we want to write type as Module in package.json file
// "type": "module"

// import khuchBhi, { add, sub, mul, div } from "./Home.js";

// console.log(add(10, 20));
// console.log(sub(30, 10));
// console.log(mul(5, 4));
// console.log(div(20, 5));
// khuchBhi();

//we have a predefined Module When We used in CommanJs AS well As in ES6 Module System For Example FS Module, PATH Module, OS Module etc. Best Way Is CommonJS Module System

const fs = require("fs");

// we have 2 main Popular Function for write file

//1. writeFileSync //blocking Code
//2. writeFile //Non-Blocking Code

fs.writeFileSync("hello.txt", "This is a simple text file");

fs.writeFile("hello.txt", "This is a simple text file created by Asynchronous method", (err) => {
    console.log(err);
});

// then Same As For Append File

//1. appendFileSync //blocking Code
//2. appendFile //Non-Blocking Code

fs.appendFileSync("hello.txt", "\nThis is appended text");

fs.appendFile("hello.txt", "\nThis is appended text using Asynchronous method", (err) => {
    console.log(err);
});

//same as read File

//1. readFileSync //blocking Code
//2. readFile //Non-Blocking Code

// const data = fs.readFileSync("hello.txt", "utf-8");
// console.log(data);

// and now we have Asynchronous Method

// fs.readFile("hello.txt", "utf-8", (err, data) => {
//     console.log(data);
// });

//then we have many Others Methods Like Rename, Delete etc. and mkdir rmdir etc.

// fs.rename("hello.txt", "helloo.txt", (err) => {
//     console.log("File Renamed Successfully");
// });

// fs.mkdir(__dirname + "/newFolder", (err) => {
//     console.log("Folder Created Successfully");
// });

// fs.rmdir(__dirname + "/newFolder", (err) => {
//     console.log("Folder Removed Successfully");
// });

// fs.unlink("helloo.txt", (err) => {
//     console.log("File Deleted Successfully");
// });

// ohk then in os some info regaring oprationg systems and cpus cpus.length is give the cpu coe etc ...

//it is a commpletion of Local Modules and Core Modules




