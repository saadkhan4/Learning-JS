// // 1. Arithmetic operators

// let sum = 5 + 3;
// console.log(sum); 

// // 2. assignment operators.

// p = 4 + 2;
// p = p += 4;
// console.log(p);

// q = 5 - 3;
// q = q -= 5;
// console.log(q);

// a = 5 * 2;
// a = a *= 4;
// console.log(a);

// f = 4 / 2;
// f /= 5;
// console.log(f);

// // 3. Comparison operators and in conditional statements.

// console.log(5 == "5");
// console.log(5 === "5");
// console.log(4 != 5);
// console.log(5 != 5);

// let temperature = 10;

// if (temperature >= 40) {
//     console.log("It's very hot today.");
// } else if (temperature >= 15) {
//     console.log("It's moderate today.");
// } else {
//     console.log("It's cold today.")
// }


// let signal = "Yellow";

// if (signal == "Red") {
//     console.log("Stop!");
// } else if (signal == "Yellow") {
//     console.log("Start your engines.");
// } else if (signal == "Green") {
//     console.log("Go.")
// }

// let price = 40;

// if (price >= 90) {
//     console.log(`"It's expensive $${price}"`);
// }
// else if(price >= 25){
//     console.log(`"It's not expensive $${price}"`);
// } else {
//     console.log(`"It's very cheap $${price}"`);
// }

// // 4. Logical operators.

// let hasID = true;
// let age = 12;

// if (age >= 12 && hasID) {
//     console.log("you can vote.");
// } else {
//     console.log("You cannot vote.");
// }

// let isWeekend = true;
// let isHoliday = false;

// if (isWeekend || isHoliday) {
//     console.log("You can relax");
// } else {
//     console.log("You cannot relax");
// }

// let isRaining = true;

// if (!isRaining) {
//     console.log("You'll need an umbrella.")
// } else {
//     console.log("You don't need an umbrella.")
// }

// let firstName = "Joel";
// let lastName = "Miller";
// let age = 43;

// console.log(`"I'am ${firstName} ${lastName} and I'm ${age} years old."`)

// // LOOPS

// // 1. For Loop

// for (i = 0; i < 3; i++) {
//     console.log("This is for loop");
// }

// // 2. For off-loop

// for (const element of "Destruction") {
//     console.log(element);
// }


// let fruits = ["Apple", "Banana", "Pear"];

// for (const element of fruits) {
//     console.log(element);
// }

// // 3. for IN-loop

// let obj = {
//     Name: "Frank Castle",
//     Age: 34,
//     Company: "Marvel INC"
// }

// for (const key in obj) {
//     const element = obj[key];
//     console.log(element,key);
        
// }

// let game = {
//     Name: "Resident Evil",
//     Platform: "Playstation 5",
//     Company: "CapCom INC"
// }

// for (const key in game) {
//     const element = game[key];
//     console.log(element, key);
        
// }

// // 4 . while loop

// let s = 0;

// while (s < 3) {
//     console.log("This is while loop");
//     s++;
// }

// let f = 0;

// while (f < 4) {
//     console.log("This is while loop");
//     f++;
// }


// // 5. Do while loop
// let g = 0;

// do {
//     console.log("This is do while loop");
//     g++;
// } while (g < 4);

// // 6 for each loop

// const cars = ["BMW", "VOLVO", "CHRYSLER"];

// cars.forEach(element => {
//     console.log(element);
// });


// function sayHello() {
//     console.log("Hello");
// }

// function greet(callback) {
//     console.log("Processing...")
//     callback();
// }


// greet(sayHello);

// function onComplete() {
//     console.log("It is now Completed");
// }

// function inProcess(callback) {
//     console.log("In Process");
//     callback();
// }

// setTimeout(() => {
//    inProcess(onComplete) 
// }, 3000);


// function bookFlight(destination, callback) {
//     setTimeout(() => {
//         console.log("Where do you want to go sir? " + destination);
//         callback();
//     }, 2000);
// }

// function bookTicket() {
//     console.log("Here is your ticket sir.");
// }

// bookFlight("Japan", bookTicket);

// function takeOrder(foodItem, callback) {
//     setTimeout(() => {
//         console.log("What food item do you want sir? " + foodItem);
//         callback(); 
//     }, 3000);
// }

// function serveOrder() {
//     console.log("Here is order sir.");
// }

// takeOrder("Pasta", serveOrder);


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


const file = (fileName, callback) => {
    setTimeout(() => {
        console.log("What's your file name? " + fileName);
        callback();
    }, 4000);
}

const downloading = () => {
    console.log("Your file is downloading..");
}

file("main.js", downloading);