// SET-TIMEOUT CONCEPT.

// set-timeout example with separate function.
function greet() {
    console.log("hello")
}
setTimeout(greet, 2000);

// function in set-timeout.

setTimeout(function greet(){
    console.log("hello");
},3000)

// arrow function

const system = () => {
    console.log("system is running.");
}

system()

// set-timeout with arrow function.

setTimeout(() => {
    console.log("hey there!")
}, 2000);

