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


// const boys = ["Ali", "Hamza", "Ahmed"];
// const girls = ["Amna", "Sarah", "Marium"];

// const students = boys.concat(girls);
// console.log(students);


// const animals = ["Cat", "Dog", "Panther", "Tiger", "Cheetah"];
// animals.splice(2, 0, "Elephant");
// console.log(animals);


// const fruits = ["Apple", "Banana", "Strawberry", "Watermelon"];
// fruits.splice(1, 2);
// console.log(fruits);


// const cars = ["BMW", "VOLVO", "AUDI", "OPEL"];

// console.log(cars.length);

// cars.length = 3;

// console.log(cars)

// let names = ["Ali", "Numair", "Qaim"];
// console.log(names.toString());


// let fruits = ["Apple", "Banana", "Pear"];
// console.log(fruits.at(2));

// const cars = ["BMW", "VOLVO", "OPEL"];
// console.log(cars);


// let names = [];

// names[0] = "Ron";
// names[1] = "Jesse";
// names[2] = "Walt";

// console.log(names);

// const fruits = new Array("Apple", "Banana", "Pear");
// console.log(fruits);

// const cars = ["OPEL", "NISSAN", "HONDA"];

// console.log(cars.length);

// cars.length = 2;
// console.log(cars);

// let numbers = ["Rhodes","Cody","Charlotte"];
// console.log(numbers.toString());

// let bikes = ["Honda", "Suzuki", "BMW", "Yamaha"];
// console.log(bikes.at(1));

// let games = [];
// games[0] = "Resident evil";
// games[1] = "Stellar Blade";
// games[2] = "Silent hill";

// console.log(games.join(" $ "));

// let drinks = ["Coke", "Pepsi", "Sprite", "Fanta"];

// console.log(drinks.pop());
// console.log(drinks);

// let bikes = ["Honda", "BMW", "Suzuki",];
// console.log(bikes.push("Yamaha"));
// console.log(bikes);


// let fruits = ["Banana", "Apple", "Pear", "Strawberry"];
// console.log(fruits.shift());
// console.log(fruits);

// let vegetables = [];

// vegetables[0] = "Cucumber";
// vegetables[1] = "Carrot";
// vegetables[2] = "Capsicum";
// vegetables[3] = "Tomato";

// console.log(vegetables.unshift("Cabbage"));
// console.log(vegetables);

// let names = ["Joel", "Miller", "Sasha", "Jill"];

// delete names[2];
// console.log(names);


// let boys = ["Joel", "Bill", "Ali"];
// let girls = ["Jessica", "Jennifer", "Britney"];

// let students = boys.concat(girls);
// console.log(students);


// let cities = ["London", "Washington", "Tokyo", "Toronto", "Paris"];

// let list = cities.slice(2, 4);
// console.log(list);


// let numbers = [23, 43, 13, 412, 43, 124, 54, 65];
// let my_list = numbers.slice(3, 6);
// console.log(my_list);


// let chocolates = ["Snickers", "Bounty", "Twix", "Mars", "Kit-Kat"];
// chocolates.splice(1, 3,"Dairy-milk");
// console.log(chocolates);

// let clothes = ["Shirt", "Jacket", "Hoodie", "Pants"];

// clothes.splice(2, 0, "Shorts");
// console.log(clothes);

// let cars = ["BMW", "NISSAN", "HONDA", "TOYOTA", "MAZDA"];
// cars.splice(2, 4, "AUDI");
// console.log(cars);

// let fruits = ["Watermelon", "Pine-apple", "Guava", "Apple", "Pear", "Orange"];
// fruits.splice(2, 3, "Mango");
// console.log(fruits);


let names = ["Ali", "Sara", "Hamza", "Numair", "Amna", "Joel","Subhan","Eman"];
names.splice(2, 4, "Charlotte");
console.log(names);