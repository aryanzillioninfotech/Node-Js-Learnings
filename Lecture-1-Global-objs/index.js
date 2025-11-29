//global objects
//in browser we have many global objects like window, document
//in nodejs we have global object like __filename, __dirname it is Used to get the current file name and directory name
//console,process
// console.log(__filename);
// console.log(__dirname);

// global.a = 123;
// console.log(a);

//buffer The Buffer class is used to deal with binary data in NodeJS. It provides a way to handle raw binary data directly in memory,


// console.log(process.pid);
// console.log(process.version);

// console.log(Buffer.from("HhHh"));

// setTimeout and SetInterval is also a Global Object

// setTimeout(() => {
//     console.log("Hello after 2 seconds");
// }, 2000);

// now One Tricky And Interview Qustion On JavaScript

// for (var i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log("Hello", i);
//     }, 2000);
// }

// So the output of this code will be "Hello 6" five times because by the time the setTimeout callback is executed, the loop has already completed and the value of i is 6.

// and Now we are Using Let Instead of Var

// for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log("Hello", i);
//     }, 2000);
// }

// So the output of this code will be "Hello 1", "Hello 2", "Hello 3", "Hello 4", "Hello 5" because let has block scope, so each iteration of the loop creates a new binding for i.
    
// then we have clearTimeout and clearInterval and urlSearchParams also Global Object in NodeJS

// const myURL = new URL('https://www.example.com/?name=anjali');
// console.log(myURL.searchParams.get('name'));  
// myURL.searchParams.append('age', '30');
// console.log(myURL.href);

// then textEncoder and TextDecoder also Global Object in NodeJS

// const encoder = new TextEncoder();
// const decoder = new TextDecoder();
// console.log(encoder,decoder);


// And Many More Global Object in NodeJS



