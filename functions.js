// Functions: Declaration, Parameters, Return Values


// 1. DECLARATION IN FUNCTION. 
function greet() {
    console.log("Hello there!")
}

greet();                               //declaration in function.        

// 2. FUNCTION WITH PARAMETER.

function greet(name) {
    console.log(`Hello, ${name}`);
}
greet("Ali")                              //parameter in function.


// 3. Return Values.

function addition() {
    return 12 + 4;
}
let result = addition()
console.log(result)