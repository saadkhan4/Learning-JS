// SET-TIMEOUT CONCEPT.

// set-timeout example with separate function.
// function greet() {
//     console.log("hello")
// }
// setTimeout(greet, 2000);

// // function in set-timeout.

// setTimeout(function greet(){
//     console.log("hello");
// },3000)

// arrow function

// const system = () => {
//     console.log("system is running.");
// }

// system()

// // set-timeout with arrow function.

// setTimeout(() => {
//     console.log("hey there!")
// }, 2000);




// const file = (fileName, cb) => {
//    setTimeout(() => {
//     console.log("This is " + fileName);
//     cb();
//    }, 2000);
// }
// const download = () => {
//     console.log("downloading.............");
// }

// file("app.js", download);



// const login = (SignUp) =>{
//     return "Sign up here." + SignUp;
// }

// const logOut = () => {
//     console.log("logout from here.");
// }
// let result = login("🔐");
// logOut(result);




// setTimeout(() => {
//    console.log("he;;p") 
// }, 2000);