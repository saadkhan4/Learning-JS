// Practice file of JS.

// 1. assignment operator

// let p = 4;
// p += 3;
// console.log(p);

// let l = 3;
// l -= 4;
// console.log(l);

// let s = 7;
// s *= 3;
// console.log(s);

// let c = 2;
// c /= 4;
// console.log(c);

// 2. assignment operator in conditional statements

// let age = 18;

// if (age >= 12) {
//     console.log("You can enter.");
// } else {
//     console.log("You cannot enter.");
// }

// let temperature = 45;

// if (temperature >= 35) {
//     console.log("It's hot today.");
// } else if (temperature >= 25){
//     console.log("It's moderate today.");
// } else {
//     console.log("It's cold today.")
// }


// let price = 2;

// if (price >= 50) {
//     console.log(`"It's expensive $${price}"`);
// } else if (price >= 30) {
//     console.log(`"It's not expensive $${price}"`);
// } else {
//     console.log(`"It's very cheap $${price}"`);
// }

// 4. Logical operator.

// let hasID = false;
// let hasAge = 22;

// if (hasAge >= 19 && hasID) {
//     console.log("You can go.");
// } else {
//     console.log("You can't go.");
// }

// let isWeekend = true;
// let isHoliday = false;

// if (isWeekend || isHoliday) {
//     console.log("You can relax");
// } else {
//     console.log("You can't relax");
// }

// let condition = true;

// if (condition !== true) {
//     console.log("That's true");
// } else {
//     console.log("That's not true");
// }

// let isRaining = true;

// if (!isRaining) {
//     console.log("You'll need an umbrella.")
// } else {
//     console.log("You don't need an umbrella.")
// }

// let firstName = "Stellar";
// let lastName = "Blade";
// let age = 24;

// console.log(`My name is ${firstName} ${lastName} and I'am ${age}`);

// LOOPS

// for (i = 0; i < 3; i++){
//     console.log("This is for loop.")
// }

// let x = [1, 4, 2, 4, 12];

// for (const element of x) {
//     console.log(element);
// }

// for (const element of "Manipulation") {
//     console.log(element);
// }

// let player = {
//     Name: "Glenn Maxwell",
//     Team: "Australia",
//     Age: 38
// }

// for (const key in player) {
//     const element = player[key];
//     console.log(element, key);
            
// }

// let s = 0;

// while (s < 5) {
//     console.log("this is while loop");
//     s++;
// }

// let o = 0;

// do {
//     console.log("this is do while loop.")
//     o++;
// } while (o < 3);

// let h = [32, 54, 2, 31, 43, 123, 56, 87, 3];

// h.forEach(element => {
//     console.log(element);
// });


// const bikes = ["suzuki", "honda", "yamaha"];

// console.log(bikes);


// const cars = [];

// cars[0] = "BMW";
// cars[1] = 12;
// cars[2] = "AUDI";

// console.log(cars);


// const names = new Array("Ali","Joel","Sarah");

// console.log(names);


// const names = ["Ali", "Sara", "Hamza"];

// // console.log(names.length);

// names.length = 2;
// console.log(names);

// const fruits = [];

// fruits[0] = "Apple";
// fruits[1] = "Pear";
// fruits[2] = "Banana";

// console.log(fruits.toString());


// const vegetables = ["Tomato", "Capsicum", "Carrot"];

// console.log(vegetables.at(2));



// const bikes = ["Suzuki", "Honda", "Yamaha"];

// console.log(bikes.join(" @ "));

// const cars = ["Volvo", "BMW", "AUDI"];

// console.log(cars.pop(1));
// console.log(cars);


// const heroes = ["Matt", "Tony", "Chris"];

// (heroes.push("Natasha"));
// console.log(heroes);

// const villans = ["Kingpin", "Doom", "Electro"];

// villans.shift(1);
// console.log(villans);


// const fruits = ["apple", "pear", "watermelon"];

// fruits.unshift("banana");
// console.log(fruits);

// const drinks = ["Coke", "Fanta", "Pepsi"];

// delete drinks[2];
// console.log(drinks);

// const cities = new Array("London", "Boston", "Karachi");

// delete cities[1];
// console.log(cities);


const boys = ["Ali", "Hamza", "Ahmed"];
const girls = ["Amna", "Sarah", "Marium"];

const students = boys.concat(girls);
console.log(students);

