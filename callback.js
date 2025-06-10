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



function file(fileName, callback) {
  const pick = "What's your file name? " + fileName;
  console.log(pick);
  callback();
}

function download() {
  const pick = "Downloading...";
  console.log(pick);
}

file("main.js", download);