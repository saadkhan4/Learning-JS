// Practice of Callback & Timeout functions.

// 1.
function sayHello() {
    console.log("Hello");
}

function greet(callback) {
    console.log("Processing...");
    callback();
}

greet(sayHello);


// 2.
function onStart() {
    console.log("Start now!");
}

function onProgress(callback) {
    console.log("Wait..");
    callback();
}

onProgress(onStart);

// 3.
function onSuccess() {
    console.log("You are now succeed!");
}

function onFailure(callback) {
    console.log("Please wait.");
    callback();
}

setTimeout(() => {
    onFailure(onSuccess);
}, 3000);

// 4.
function onComplete() {
    console.log("It is now completed.");
}

function onFinish(callback) {
    console.log("Processing");
    callback();
}

setTimeout(() => {
    onFinish(onComplete);
}, 2000);

// 5.
function greet(name, callback) {
    setTimeout(() => {
    console.log("hello " + name);
    callback();
    }, 2000);
}

function say() {
    console.log("just wait");
}

greet("hamza", say);

// 6.
function onResult(order, callback) {
    setTimeout(() => {
        console.log("What's your order? " + order);
        callback();
    }, 2000);
}

function onDone() {
    console.log("Here is your order sir! ");
}

onResult("Fries", onDone);

// 7.
function system(name, callback) {
    setTimeout(() => {
        console.log("What's your name? " + name);
        callback();
    }, 2000);
}

function welcome() {
    console.log("Hi! ");
}

system("Bob", welcome);

// 8.
function file(fileName, callback) {
    setTimeout(() => {
        console.log("What's your file name? " + fileName);
        callback();
    }, 4000);
}

function download() {
    console.log("downloading file...");
}

file("index.html", download);

// 9.

const entrance = (age, callback) => {
    setTimeout(() => {
        console.log("What's your age? ", + age);
        callback();
    }, 2000);
}

const exit = () => {
    console.log("You can go.");
}

entrance("20", exit);

// 10.
const orderFood = (foodItem, callback) => {
    setTimeout(() => {
        console.log("What's your order sir? " + foodItem);
        callback();
    }, 2000);
}

const serveFood = () => {
    console.log("Enjoy your meal.");
}

orderFood("Pasta", serveFood);
// 11.
function receive() {
    console.log("You will receive shortly.");
}
function dispatch(callback) {
    console.log("Your parcel has been dispatched");
    callback();
}

dispatch(receive);
// 12.
function greet(gender, callback) {
    setTimeout(() => {
        console.log("What's your gender? " + gender); 
        callback();
    }, 2000);
}

function sayHello() {
    console.log("You can go into male section.");
}

greet("Male", sayHello);
// 13.
const makeCoffee = (type, callback) => {
    setTimeout(() => {
        console.log("Which type of coffee do you want? " + type);
        callback();
    }, 2000);
}

const serveCoffee = () => {
    console.log("Here is your coffee sir.");
}

makeCoffee("Espresso", serveCoffee);


// 14. 
const opening = (fileName, callback) => {
    console.log("Which file is opening? " + fileName);
    callback();
}

const closing = () => {
    console.log("file is opened");
}

opening("index.html", closing)
// 15.
const bookTicket = (movieName, callback) => {
    setTimeout(() => {
        console.log("Booking your ticket for " + movieName);
        callback();
    }, 2000);
}

const showTicket = () => {
    console.log("Here is your ticket sir.");
}

bookTicket("JAWS", showTicket);
//16.
function giveName() {
    return "Charlotte";
  }
  
  function sayHello(callback) {
    let name = callback(); 
    console.log("Hello " + name); 
  }
  
sayHello(giveName); 
  

function giveName() {
    return "Bob";
}

function sayHello(callback) {
    let name = callback();
    console.log("Hello " + name);
}

sayHello(giveName);
