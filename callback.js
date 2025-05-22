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





function wait(name, callback) {
  setTimeout(() => {
    console.log("Hey your confirmation has been received successfully " + name);
    callback();
  }, 2000);
}

function afterConfirmation() {
  console.log("Now you may proceed. ✅");
}

wait("Saad", afterConfirmation); 