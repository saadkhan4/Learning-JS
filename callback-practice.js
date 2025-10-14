// Practice of Callback & Timeout functions.

// 1.
// function sayHello() {
//     console.log("Hello");
// }

// function greet(callback) {
//     console.log("Processing...");
//     callback();
// }

// greet(sayHello);


// // 2.
// function onStart() {
//     console.log("Start now!");
// }

// function onProgress(callback) {
//     console.log("Wait..");
//     callback();
// }

// onProgress(onStart);

// // 3.
// function onSuccess() {
//     console.log("You are now succeed!");
// }

// function onFailure(callback) {
//     console.log("Please wait.");
//     callback();
// }

// setTimeout(() => {
//     onFailure(onSuccess);
// }, 3000);

// // 4.
// function onComplete() {
//     console.log("It is now completed.");
// }

// function onFinish(callback) {
//     console.log("Processing");
//     callback();
// }

// setTimeout(() => {
//     onFinish(onComplete);
// }, 2000);

// // 5.
// function greet(name, callback) {
//     setTimeout(() => {
//     console.log("hello " + name);
//     callback();
//     }, 2000);
// }

// function say() {
//     console.log("just wait");
// }

// greet("hamza", say);

// // 6.
// function onResult(order, callback) {
//     setTimeout(() => {
//         console.log("What's your order? " + order);
//         callback();
//     }, 2000);
// }

// function onDone() {
//     console.log("Here is your order sir! ");
// }

// onResult("Fries", onDone);

// // 7.
// function system(name, callback) {
//     setTimeout(() => {
//         console.log("What's your name? " + name);
//         callback();
//     }, 2000);
// }

// function welcome() {
//     console.log("Hi! ");
// }

// system("Bob", welcome);

// // 8.
// function file(fileName, callback) {
//     setTimeout(() => {
//         console.log("What's your file name? " + fileName);
//         callback();
//     }, 4000);
// }

// function download() {
//     console.log("downloading file...");
// }

// file("index.html", download);

// // 9.

// const entrance = (age, callback) => {
//     setTimeout(() => {
//         console.log("What's your age? ", + age);
//         callback();
//     }, 2000);
// }

// const exit = () => {
//     console.log("You can go.");
// }

// entrance("20", exit);

// // 10.
// const orderFood = (foodItem, callback) => {
//     setTimeout(() => {
//         console.log("What's your order sir? " + foodItem);
//         callback();
//     }, 2000);
// }

// const serveFood = () => {
//     console.log("Enjoy your meal.");
// }

// orderFood("Pasta", serveFood);
// // 11.
// function receive() {
//     console.log("You will receive shortly.");
// }
// function dispatch(callback) {
//     console.log("Your parcel has been dispatched");
//     callback();
// }

// dispatch(receive);
// // 12.
// function greet(gender, callback) {
//     setTimeout(() => {
//         console.log("What's your gender? " + gender); 
//         callback();
//     }, 2000);
// }

// function sayHello() {
//     console.log("You can go into male section.");
// }

// greet("Male", sayHello);
// // 13.
// const makeCoffee = (type, callback) => {
//     setTimeout(() => {
//         console.log("Which type of coffee do you want? " + type);
//         callback();
//     }, 2000);
// }

// const serveCoffee = () => {
//     console.log("Here is your coffee sir.");
// }

// makeCoffee("Espresso", serveCoffee);


// // 14. 
// const opening = (fileName, callback) => {
//     console.log("Which file is opening? " + fileName);
//     callback();
// }

// const closing = () => {
//     console.log("file is opened");
// }

// opening("index.html", closing)
// // 15.
// const bookTicket = (movieName, callback) => {
//     setTimeout(() => {
//         console.log("Booking your ticket for " + movieName);
//         callback();
//     }, 2000);
// }

// const showTicket = () => {
//     console.log("Here is your ticket sir.");
// }

// bookTicket("JAWS", showTicket);
// //16.
// function giveName() {
//     return "Charlotte";
//   }
  
//   function sayHello(callback) {
//     let name = callback(); 
//     console.log("Hello " + name); 
//   }
  
// sayHello(giveName); 
  

// function giveName() {
//     return "Bob";
// }

// function sayHello(callback) {
//     let name = callback();
//     console.log("Hello " + name);
// }

// sayHello(giveName);


// function sayHello() {
//     console.log("Hello");
// }

// function greet(callback) {
//     console.log("processing...");
//     callback();
// }

// greet(sayHello);


// function onStart() {
//     console.log("Start now!");
// }

// function onDelay(callback) {
//     console.log("3 2 1");
//     callback();
// }

// setTimeout(() => {
//     onDelay(onStart); 
// }, 4000);

// function greet(name, callback) {
//     setTimeout(() => {
//         console.log("What's your name? " + name);
//         callback();
//     }, 3000);
// }

// function say() {
//     console.log("Just wait");
// }

// greet("Hamza", say);


// function file(fileName, callback) {
//     setTimeout(() => {
//         console.log("What's your file name? " + fileName);
//         callback();
//     }, 2000);
// }

// function download() {
//     console.log("Downloading...");
// }

// file("main.js", download);

// function onStart(gender, callback) {
//     setTimeout(() => {
//         console.log("What's your gender? " + gender);
//         callback();
//     }, 3000);
// }

// function onFinish() {
//     console.log("You can go into female section.");
// }

// onStart("Female", onFinish);

// const bookTicket = (movieName, callback) => {
//     setTimeout(() => {
//         console.log("Which ticket do you want sir? " + movieName);
//         callback();
//     }, 3000);
// }

// const showTicket = () => {
//     console.log("Here is your ticket.");
// }

// bookTicket("Final Destination", showTicket);
    
// function onGo() {
//     console.log("Start from here.");
// }

// function inProcess(callback) {
//     console.log("Processing...");
//     callback();
// }

// inProcess(onGo);

// function onFail() {
//     console.log("Operation Failed.")
// }

// function onTry(callback) {
//     console.log("Operation processing...")
//     callback();
// }

// setTimeout(() => {
//     onTry(onFail); 
// }, 2000);

// function registerUser(userName, callback) {
//     setTimeout(() => {
//         console.log("Registering user: ", userName);
//         callback();
//     }, 3000);
// }

// function welcomeUser() {
//     console.log("Welcome ! Your user has been created.")
// }

// registerUser("Eve", welcomeUser);


// function shipAddress(address, callback) {
//     setTimeout(() => {
//         console.log("Shipping package to: " + address);
//         callback();
//     }, 3000);
// }

// function destination() {
//     console.log("Your package has been delivered.");
// }

// shipAddress("45 Avenue Brooklyn NY", destination);

// const readBook = (bookName, callback) => {
//     setTimeout(() => {
//         console.log("Starting to read: " + bookName);
//         callback();
//     }, 3000);
// }

// const finishBook = () => {
//     console.log("I finished reading this one.");
// }

// readBook("Elm's Street", finishBook);

// const onPlay = () => {
//     console.log("Noticed by Lil Mosey");
// }

// const onPause = (callback) => {
//     console.log("Playing the track..");
//     callback();
// }

// onPause(onPlay);

// const bookFlight = (destination, callback) => {
//     setTimeout(() => {
//         console.log("Booking flight to: " + destination);
//         callback();
//     }, 3000);
// }

// const confirmBooking = () => {
//     console.log("Your booking has been confirmed.")
// }

// bookFlight("Korea", confirmBooking);


// function sayHello() {
//     console.log("hi hamza");
// }

// function say(callback) {
//     console.log("processing...");
//     callback();
// }

// say(sayHello)



// function onSuccess() {
//     console.log("You are now succeed");
// }

// function onProgress(callback) {
//     console.log("In progress..");
//     callback();
// }

// setTimeout(() => {
//     onProgress(onSuccess); 
// }, 2000);


// function onResult(order, callback) {
//     setTimeout(() => {
//         console.log("What is your order sir? " + order);
//         callback();
//     }, 2000);
// }

// function onDone() {
//     console.log("Here is your order");
// }

// onResult("Spaghetti", onDone);


// function file(fileName, callback) {
//     setTimeout(() => {
//         console.log("What's your file name? : " + fileName);
//         callback();
//     }, 3000);
// }

// function download() {
//     console.log("Downloading your file");
// }

// file("main.js", download);


// function entrance(age, callback) {
//     setTimeout(() => {
//         console.log("What's your age? " + age);
//         callback();
//     }, 2000);
// }

// function exit() {
//     console.log("You can go.");
// }

// entrance("21", exit);

// function orderFood(foodItem, callback) {
//     setTimeout(() => {
//         console.log("What do you want to order? " + foodItem);
//         callback();
//     }, 4000);
// }

// function serveFood() {
//     console.log("Here is your order sir.");
// }

// orderFood("Pasta", serveFood);

// const makeCoffee = (type, callback) => {
//     setTimeout(() => {
//         console.log("Which type of coffee do you want sir? " + type);
//         callback();
//     }, 3000);
// }

// const serveCoffee = () => {
//     console.log("Enjoy your coffee sir.");
// }

// makeCoffee("Espresso", serveCoffee);


// const bookTicket = (movieNAme, callback) => {
//     setTimeout(() => {
//         console.log("Which movie ticket do you want ? " + movieNAme);
//         callback();
//     }, 3000);
// }

// const showTicket = () => {
//     console.log("Here is your ticket sir.");
// }

// bookTicket("Ballerina", showTicket);

// const bookFlight = (destination, callback) => {
//     setTimeout(() => {
//         console.log("Where do you to go sir? " + destination);
//         callback();
//     }, 3000);
// }

// const showTicket = () => {
//     console.log("Enjoy your flight sir.");
// }

// bookFlight("America", showTicket);

// const greet = () => {
//     console.log("hello");
// }

// const say = (callback) => {
//     console.log("processing...");
//     callback();
// }

// say(greet);

// function greet(message) {
//     console.log(message);
//   }
  
//   function getStudentName(name, callback) {
//     let result = "Hello " + name;
//     callback(result); // <- calling the callback here
//   }
  
// getStudentName("Saad", greet); // <- passing greet as callback
  

// function greet(message) {
//     console.log(message);
// }

// function getStudentName(name, callback) {
//     let result = "Hello " + name;
//     callback(result);
// }

// getStudentName("Hamza", greet);


// function greet() {
//     console.log("Hello");
// }

// function meet(callback) {
//     console.log("Processing...");
//     callback();
// }

// meet(greet);

// function start() {
//     console.log("Start now.");
// }

// function begin(callback) {
//     console.log("Begins in moments");
//     callback();
// }

// setTimeout(() => {
//     begin(start); 
// }, 2000);


// function giveOrder(order, callback) {
//     setTimeout(() => {
//         console.log("What's your order? " + order);
//         callback();
//     }, 3000);
// }

// function takeOrder() {
//     console.log("Here is order sir!");
// }

// giveOrder("Fries", takeOrder);


// function bookTicket(movieName, callback) {
//     setTimeout(() => {
//         console.log("Which ticket do you want sir? " + movieName);
//         callback()
//     }, 5000);
// }

// function showTicket() {
//     console.log("Here is your ticket sir.");
// }

// bookTicket("Fantastic 4", showTicket);

// const orderFood = (giveOrder, callback) => {
//     setTimeout(() => {
//         console.log("What do you want to order sir? " + giveOrder);
//         callback();
//     }, 3000);
// }

// const takeOrder = () => {
//     console.log("Here is your order sir.");
// }

// orderFood("Spaghetti",takeOrder);


// const booking = (bookTicket, callback) => {
//     setTimeout(() => {
//         console.log("Which movie do you want to see sir? " + bookTicket);
//         callback(bookTicket);
//     }, 3000);
// }

// const confirmBooking = (ticket) => {
//     console.log(`"Here is ${ticket} ticket sir."`)
// }

// booking("F1", confirmBooking);


// Callback function ko argument pass karte hain jab humein us function
// ke andar kisi value ki zarurat hoti hai.

// function sayHello() {
//     console.log("hello");
// }

// function greet(callback) {
//     console.log("processing...");
//     callback();
// }

// greet(sayHello);

// function file(fileName, callback) {
//     setTimeout(() => {
//         console.log("What's your filename? " + fileName)
//         callback(); 
//     }, 3000);
// }

// function downloading() {
//     console.log("Downloading your file...")
// }

// file("main.js", downloading);



// const bookTicket = (movieName, callback) => {
//     setTimeout(() => {
//         console.log("Which movie do you want to see sir? " + movieName);
//         callback(movieName);
//     }, 3000);
// }

// const showTicket = (ticket) => {
//     console.log(`"Here is your ${ticket} ticket sir."`);
// }

// bookTicket("F1", showTicket);


// const bookFlight = (movieName, callback) => {
//     setTimeout(() => {
//        console.log("Which movie do you want to see sir? " + movieName);
//         callback();
//     }, 2000);
// }

// const showTicket = () => {
//     console.log("Here is your ticket sir.");
// }

// bookFlight("Superman",showTicket)


// const orderFood = (foodItem, callback) => {
//     setTimeout(() => {
//        console.log("What do you want to eat sir? " + foodItem);
//         callback();
//     }, 2000);
// }

// const serveFood = () => {
//     console.log("Here is your order sir.");
// }

// orderFood("Pizza",serveFood)

// function bookFlight(destination, callback) {
//     setTimeout(() => {
//         console.log("Where do you want to sir? ", destination);
//         callback();
//     }, 2000);
// }

// function getTicket() {
//     console.log("Here is your ticket sir.");
// }

// bookFlight("United Kingdom", getTicket);

// const orderFood = (foodItem, callback) => {
//     setTimeout(() => {
//        console.log("What do you want order sir? ",foodItem);
//         callback();
//     }, 3000);
// }

// const delivered = () => {
//     console.log("Here is your order sir.");
// }

// orderFood("Pasta", delivered);

// const bookFlight = (destination, callback) => {
//     setTimeout(() => {
//        console.log("where do you want to go sir? ", destination);
//         callback();
//     }, 2000);
// }

// const booked = () => {
//     console.log("Here is your ticket sir.");
// }

// bookFlight("America", booked);

// const orderFood = (foodItem, callback) => {
//     setTimeout(() => {
//         console.log("What do you want to order sir? ", foodItem);
//         callback();
//     }, 3000);
// }

// const delivered = () => {
//     console.log("Here is your order sir.");
// }

// orderFood("Pasta",delivered)


const bookTicket = (destination,callback) => {
    setTimeout(() => {
        console.log("Where do you want to go sir? ", destination);
        callback();
    }, 2000);
}

const showTicket = () => {
    console.log("Here is your ticket sir.");
}

bookTicket("United Kingdom", showTicket);
