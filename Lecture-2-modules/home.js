export function add (a, b) {
    console.log("This is add function");
    return a + b;
}
export function sub (a, b) {
    console.log("This is sub function");
    return a - b;
}
export function mul (a, b) {
    console.log("This is mul function");
    return a * b;
}
export function div (a, b) {
    console.log("This is div function");
    return a / b;
}

function hello() {
    console.log("Hello World");
}
export default hello

// module.exports = { add, sub, mul, div };