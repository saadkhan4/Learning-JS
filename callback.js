// // Making functions using callback.

// // Callback function
// function sayHello() {
//     console.log("Hello!");
// }

// // Function that takes another function as callback.
// function greetUser(agent) {
//     console.log("Processing...");
//     agent();                          // calling the callback
// }


// // Calling greetUser and passing sayHello as callback
// greetUser(sayHello);


// function sayHi() {
//   console.log("hi.");
// }

// function sayBye(callback) {
//   console.log("bye.");
//   callback();
// }

// setTimeout(() => {
//   sayBye(sayHi);
// }, 2000);



// function file(fileName, callback) {
//   const pick = "What's your file name? " + fileName;
//   console.log(pick);
//   callback();
// }

// function download() {
//   const pick = "Downloading...";
//   console.log(pick);
// }

// file("main.js", download);

// var old js hai or is ki value ko hum reassign or redeclare kr sakte hai.
// let scope block hota hai or is ki value ko hum reassign kr sakte hain but redecalre nhi kar sakte.
// const bhi scope block hota hai is ki value ko hum reassign nhi kar sakte or na hi redeclare.


// hum ek function dete hain or woh execute hojyega jb woh action complete hoga.
setTimeout(() => {
  console.log("hello");
}, 8000);


