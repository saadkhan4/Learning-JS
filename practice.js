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

// const file = (fileName, callback) => {
//     setTimeout(() => {
//         console.log("What's your file name? " + fileName);
//         callback();
//     }, 4000);
// }

// const downloading = () => {
//     console.log("Your file is downloading..");
// }

// file("main.js", downloading);

// let cars = ["VOLVO", "BMW", "JAGUAR", "HONDA"];

// console.log(cars[3]);

// let names = [];

// names[0] = "Joel";
// names[1] = "Ellie";
// names[2] = "Skye";
// names[3] = "Midas";

// console.log(names)

// const fruits = new Array(21);
// console.log(fruits);

// let fruits = [];

// fruits[0] = "Apple";
// fruits[1] = "Banana";
// fruits[2] = "Pear";
// fruits[3] = "Berry";

// console.log(fruits.length);

// fruits.length = 2;
// console.log(fruits);

// let bikes = ["suzuki", "honda", "yamaha", "BMW"];

// console.log(bikes.toString());

// const names = new Array("Sarah", "Hamza", "Jess", "Bill");

// console.log(names.at(2));

// const vegetables = ["Tomato", "Onion", "Cabbage", "Carrot"];

// console.log(vegetables.join(" ^ "));

// let drinks = ["Sprite", "Cola", "Pepsi"];

// drinks.pop();
// console.log(drinks);

// const numbers = [2, 3, 4, 5, 6, 7, 8, 9];

// numbers.push(10);
// console.log(numbers);

// let phones = ["Apple", "Xiaomi", "Samsung"];

// phones.shift();
// console.log(phones);

// let phones = ["Apple", "Xiaomi", "Samsung", "Sony"];

// phones.unshift("Google");
// console.log(phones);

// let boys = ["Joel", "Miller", "Bill", "John"];
// let girls = ["Jess", "Jennifer", "Ellie", "Fanning"];

// let students = boys.concat(girls);
// console.log(students);

// const numbers = [];

// numbers[0] = 2;
// numbers[1] = 3;
// numbers[2] = 4;
// numbers[3] = 5;

// delete numbers [2];
// console.log(numbers);

// let pizza = ["Slice1", "Slice2", "Slice3", "Slice4", "Slice5", "Slice6", "Slice6", "Slice7"];

// let bite = pizza.slice(2, 6);
// console.log(bite);

// let fruits = [];

// fruits[0] = "Apple";
// fruits[1] = "Banana";
// fruits[2] = "Pear";
// fruits[3] = "Cherry";
// fruits[4] = "Orange";
// fruits[5] = "Peach";
// fruits[6] = "Lychee";;

// fruits.splice(2, 3, "Papaya");
// console.log(fruits);

// let names = ["Hamza", "Iqbal", "Hasseb", "Owais", "Qaim", "Mesum", "Zain"];

// names.splice(2, 4, "Bilal");
// console.log(names);

// let cars = ["AUDI", "JAGUAR", "VOLVO", "TOYOTA", "MITSUBISHI", "HONDA"];

// let driver = cars.toSpliced(2, 0, "OPEL");
// console.log(cars);
// console.log(driver);

// let cars = ["AUDI", "JAGUAR", "VOLVO", "TOYOTA", "MITSUBISHI", "HONDA"];
// let driver = cars.toSpliced(2, 3, "BMW");
// console.log(cars);
// console.log(driver);

// function bookFlight(destination, callback) {
//     setTimeout(() => {
//         console.log("Where do you want to go sir? " + destination);
//         callback();
//     }, 2000);
// }

// function confirmBooking() {
//     console.log("Here is your ticket sir.");
// }

// bookFlight("America",confirmBooking)

// async function getData() {
//     try {
//         const response = await fetch("https://dev-apis.explorebtk.com/api/v1/categories");
//         const data = await response.json();
//         console.log(data);

//     } catch (error) {
//         console.log("Error",error);
//     }
// }

// getData()

// async function getData() {
//     try {
//         const response = await fetch("data.json");
//         const data = await response.json();
//         data.forEach(element => {
//             console.log(element.grade);
//         });
//     } catch (error) {
//         console.log("Error",error);
//     }
// }

// getData()

// class Movie{
//     constructor(title, release) {
//         this.title = title;
//         this.release = release;
//     }
//     details() {
//         const date = new Date().getFullYear() - this.release;
//         let result = (`${this.title} was ${date} years old`);
//         return result;
//     }
// }

// const m1 = new Movie("Transforms", 2007);
// console.log(m1.details());

// class ShoppingCart{
//     constructor(item1, item2, item3) {
//         this.item1 = item1;
//         this.item2 = item2;
//         this.item3 = item3;
//     }
//     details() {
//         return this.item1 + this.item2 + this.item3;
//     }
// }

// const cart = new ShoppingCart(222, 543, 677);
// const total = cart.details();
// console.log(`Your total bill is $${total}`);

// class Person{
//     constructor(name, birthYear) {
//         this.name = name;
//         this.birthYear = birthYear;
//     }
//     details() {
//         const date = new Date().getFullYear() - this.birthYear;
//         let result = (`My name is ${this.name} and I'm ${date} years old.`);
//         return result;
//     }
// }

// const p1 = new Person("Robert Pattinson", 1997);
// console.log(p1.details());

// async function getData() {
//     try{
//         const response = await fetch("data.json");
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error",error);
//     }
// }

// getData()

// const response = new Promise((resolve, reject) => {
//     let shopOpen = true;

//     setTimeout(() => {
//         if (shopOpen) {
//             resolve("Shop is open");
//         } else {
//             reject("Shop is closed");
//         }
//     }, 2000);
// })

// response.
//     then(success => {
//     console.log("Success",success);
//     })
//     .catch(failure => {
//     console.log("Failure",failure);
//     })

// const music = new Promise((resolve, reject) => {
//     let pressesPlay = true;

//     setTimeout(() => {
//         if (pressesPlay) {
//            resolve("Song is playing");
//         } else {
//             reject("No internet. Can't play song");
//        }
//     }, 3000);
// })

// music.
// then(success => {
//     console.log("Success",success);
// })
//     .catch(failure => {
//     console.log("Failure",failure);

//  })

// const electric = new Promise((resolve, reject) => {
//     let power = true;

//     if (power) {
//         resolve("The light is ON.");
//     } else {
//         reject("No electricity. Light is OFF.");
//     }
// })

// async function powerAvailable() {
//     try {
//         const e1 = await electric;
//         console.log("Success",e1);
//     } catch (error) {
//         console.log("Failure",error);
//     }

// }
// powerAvailable();

// async function getData() {
//     try {
//         const response = await fetch("data.json");
//         const data = await response.json();
//         console.log(data);
//     } catch (error){
//         console.log("Error",error);
//     }
// }

// getData()

// async function details() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error",error);
//     }
// }
// details();

// async function formed() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         data.forEach(element => {
//             console.log(element.email);
//         });
//     } catch (error) {
//         console.log("Error",error);
//     }
// }

// formed();

// async function getData() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error",error);
//     }
// }
// getData();

// async function getData() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users/5");
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error",error);
//     }
// }

// getData();

// async function getData() {
//     try {
//         const response = await fetch("data.json");
//         const data = await response.json();
//         data.forEach(element => {
//             console.log(element.name);
//         });
//     } catch (error) {
//         console.log("Error",error);
//     }
// }

// getData()

//1. array literal

// const cars = ["Volvo", "Benz", "Honda"];

// console.log(cars);

//2 . indexing array

// const fruits = []

// fruits[0] = "Apple";
// fruits[1] = "Banana";
// fruits[2] = "Pear";

// console.log(fruits[1]);

//3 . new array

// const cars = new Array("Honda", "Civic");

// console.log(cars);

// METHODS OF ARRAY
//1. length

// const cars = ["Jeep", "Range Rover", "Toyota"];

// console.log(cars.length);

// cars.length = 1;
// console.log(cars);

//2. toString()

// const names = []

// names[0] = "Joel";
// names[1] = "Abby";
// names[2] = "Jess";
// names[3] = "Sansa Stark";

// console.log(names.toString());

// const drinks = ["Fanta", "Pepsi", "Coke", "Sprite"];

// console.log(drinks.at(2));

// const fruits = [];

// fruits[0] = "Apple";
// fruits[1] = "Pear";
// fruits[2] = "Banana";
// fruits[3] = "Papaya";

// console.log(fruits.join(" | "));

// const company = ["Apple", "Motorola", "Samsung", "Google"];

// console.log(company.pop());
// console.log(company);

// const bikes = ["Honda", "Suzuki", "Yamaha"];

// console.log(bikes.push("BMW"));
// console.log(bikes);

// const cars = ["Toyota", "Nissan", "Mitsubishi", "Mazda"];

// cars.shift();
// console.log(cars);

// let numbers = [12, 43, 65, 123, 87, 12, 898, 12];

// console.log(numbers.unshift(21));
// console.log(numbers);

// const subjects = ["Chemistry", "Biology", "Physics"];

// delete subjects[2];
// console.log(subjects);

// const boys = ["John", "Jack", "Sawyer", "Sayid"];
// const girls = ["Ana", "Kate", "Libby", "Jess"];

// const students = boys.concat(girls);
// console.log(students);

// const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// let result = numbers.slice(2, 5);
// console.log(result);

// const pizza = ["Slice1", "Slice2", "Slice3", "Slice4", "Slice5", "Slice6"];

// let result = pizza.slice(3, 5);
// console.log(result);

// const colors = ["Red", "Blue", "Black", "Green", "Magenta", "Pink"];

// colors.splice(2, 0, "Rose");
// console.log(colors);

// const foods = ["Spaghetti", "Fries", "Pasta", "Fish", "Burger", "Meat"];
// foods.splice(3, 1, "Rice");
// console.log(foods);

// const cars = ["BMW", "Audi", "Benz", "Toyota"];
// console.log(cars.length);

// const names = ["Robert", "Joel", "Bill", "Jess"];

// console.log(names.toString());

// const items = ["Chair", "Pen", "Trousers", "Phone"];

// console.log(items.at());

// const subjects = ["Eng", "Phy", "Chem", "Isl"];
// console.log(subjects.join(" | "));

// const vehicle = ["Cars", "Bikes", "Boats", "Cycles"];

// vehicle.pop();
// console.log(vehicle);

// const stationary = ["Pen", "Pencil", "Eraser", "Remover", "Card Sheet"];

// stationary.push("Diary");
// console.log(stationary);

// const phones = ["Iphone", "Samsung", "Motorola", "Pixel"];

// phones.shift()
// console.log(phones);

// const laptop = ["Mac", "Dell", "Hp", "Lenovo"];

// laptop.unshift("Acer");
// console.log(laptop);

// const colors = ["Blue", "Mlue", "Yellow", "Black"];

// delete colors [2];
// console.log(colors);

// const boys = ["Jason", "Bill", "Tyler", "Charlie"];
// const girls = ["Kate", "Charlotte", "Ellie", "Jess"];

// const students = boys.concat(girls);
// console.log(students);

// const cake = ["Slice1", "Slice2", "Slice3", "Slice4", "Slice5", "Slice6", "Slice7", "Slice8"];

// let getSlice = cake.slice(2, 5);
// console.log(getSlice);

// const numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];

// numbers.splice(2, 3, "Hello");
// console.log(numbers);

// const games = ["Nfs", "Re4", "Red Dead", "Fortnite", "Stellar Blade", "Cyberpunk 2077", "Apex"];

// games.splice(3, 5, "Witcher");
// console.log(games);

// const fruits = ["Apple", "Banana", "Pear", "Blueberry", "Raspberry"];

// let result = fruits.toSpliced(2, 3, "Cherry");
// console.log(fruits);
// console.log(result);

// const cars = ["Volvo", "BMW", "Nissan", "Audi"];
// console.log(cars.toString())

// const animals = ["Dog", "Cat", "Elephant", "Lion"];
// console.log(animals);

// const drinks = ["Fanta", "Pepsi", "Coke", "Sprite"];
// console.log(drinks.at(2));

// throw new Error("This is an error");

// const drinks = ["fanta", "pepsi", "coke"];

// console.log(drinks.toString());

// const color = ["black", "pink", "white","blue"];

// console.log(color.length);

// const cars = ["BMW", "AUDI", "BENZ", "VOLVO"];

// console.log(cars.at(2));

// const bikes = ["Honda", "SUZUKI", "BMW", "Yamaha"];

// console.log(bikes.join(" | "));

// const foods = ["Burger", "Spaghetti", "pasta", "maggi"];

// console.log(foods.pop(2));
// console.log(foods);

// const cities = ["Karachi", "Lahore", "Pindi", "London"];

// console.log(cities.push("Moscow"));
// console.log(cities);

// const countries = ["United Kingdom", "UAE", "Pakistan", "Japan"];

// console.log(countries.shift());
// console.log(countries);

// const names = ["Ali", "Matt", "Tony", "Sarah"];

// names.shift(2);
// console.log(names);

// const company = ["Samsung", "Apple", "Motorola", "Lenovo"];

// company.unshift("HP");
// console.log(company);

// const fruits = ["Apple", "Banana", "Pear", "Watermelon", "Cherry"];

// delete fruits[2];
// console.log(fruits);

// const boys = ["Matt", "Tony", "Banner", "Steve", "Rogers"];
// const girls = ["Wanda", "Natasha", "Max", "Kat"];

// const students = boys.concat(girls);
// console.log(students);

// const cake = ["Slice 1", "Slice 2", "Slice 3", "Slice 4", "Slice 5", "Slice 6"];

// let part = cake.slice(2, 5);
// console.log(part);

// const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// let result = numbers.slice(3, 5);
// console.log(result);

// const color = ["Blue", "Black", "Grey", "Pink", "White", "Red", "Orange", "Magenta"];

// color.splice(2, 0, "Rose");
// console.log(color);

// const color = ["Blue", "Black", "Grey", "Pink", "White", "Red", "Orange", "Magenta"];

// color.splice(2, 4, "Rose");
// console.log(color);

// function greet() {
//     var name = "Ali";
//     console.log(name);
// }

// greet()

// const cars = ["Volvo", "BMW", "Audi", "Honda"];
// // console.log(cars.length);

// cars.length = [2];
// console.log(cars);

// const names = [];
// names[0] = "Joel";
// names[1] = "Abby";
// names[2] = "Carlos";
// names[3] = "Jill";

// console.log(names.toString());

// const fruits = ["Apple", "Banana", "Pear", "Guava"];
// console.log(fruits.at(2));

// const bikes = ["Honda", "Suzuki", "BMW", "Kawasaki"];
// console.log(bikes.join(" | "));

// const drinks = ["Pepsi", "Coke", "Dr Pepper", "Fanta",];
// drinks.pop();
// console.log(drinks);

// const phones = ["Apple", "Samsung", "Motorolla", "Lenovo"];
// phones.push("Sony");
// console.log(phones);

// const cars = new Array("BMW", "AUDI", "Honda", "Toyota");
// cars.shift("Mitsubishi");
// console.log(cars);

// const clothes = ["Pants", "Torso", "Shirt", "Tie"];
// clothes.unshift("T-shirt");
// console.log(clothes);

// const items = ["Cars", "tools", "Books", "Keys"];
// delete items[2];
// console.log(items);

// const cake = ["Slice 1", "Slice 2", "Slice 3", "Slice 4", "Slice 5"];
// let serve = cake.slice(2);
// console.log(serve);

// const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// let output = numbers.slice(3, 5);
// console.log(output);

// const pizza = ["Fajita", "Pepperoni", "Supreme", "Cheesy", "Plain", "Chicken"];
// pizza.splice(2, 0, "Beef");
// console.log(pizza);

// const colors = ["Blue", "Red", "Black", "Pink", "Rose", "Silver", "Grey", "White"];
// colors.splice(2, 4, "Purple");
// console.log(colors);

// for (let i = 0; i < 3; i++) {
//   console.log("this is for loop");
// }

// for (const x of "Programming") {
//   console.log(x);
// }

// let obj = {
//   name: "Leon Kennedy",
//   age: 25,
//   company: "Umbrella Corporation",
// };

// for (const key in obj) {
//   const element = obj[key];
//   console.log(key,element);
// }

// let i = 0;

// while (i < 3) {
//     console.log("This is while loop");
//     i++;
// }

// let p = 10;

// do {
//     console.log("this is do while loop");
//     p++;
// } while (p < 5);

// for (i = 0; i < 3; i++) {
//   console.log("this is for loop.");
// }

// for (const x of "development") {
//   console.log(x);
// }

// let cars = ["Volvo", "BMW", "Audi", "Mercedes Benz"];

// for (const element of cars) {
//     console.log(element);
// }

// for (const element of "Programming") {
// console.log(element);

// }

// for (i = 0; i < 3; i++) {
//   console.log("This is for loop");
// }

// let digits = [23, 43, 123, 43, 12, 4123, 2];

// for (const num of digits) {
//     console.log(num);

// }

// for (const x of "Development") {
//     console.log(x);

// }

// let obj = {
//   Name: "Tim Cook",
//   Company: "APPLE INC",
//   Salary: "12,000$",
// };

// for (const key in obj) {
//     const element = obj[key];
//     console.log(key,element);

// }

// let i = 0;

// while (i < 3) {
//   console.log("this is while loop");
//   i++;
// }

// let k = 10;

// do {
//     k++;
//     console.log("This is do while loop");
// } while (k < 3);

// let o = [12, 43, 134, 54, 13, 4313, 12, 43];
// o.forEach(element => {
//     console.log(element);

// });

// let cars = ["Volvo", "Benz", "BMW", "Ferrari", "Lamborghini"];

// console.log(cars);

// const names = [];

// names[0] = "Joel";
// names[1] = "Abby";
// names[2] = "Ellie";
// names[3] = "Tommy";

// console.log(names[1]);

// const fruits = new Array("Apple", "banana", "Orange", "Peach");
// console.log(fruits);

// const names = ["Joel", "Abby", "Tommy", "Leon"];
// console.log(names.join(" | "));

// const boys = ["Joel", "Tommy", "Tony", "Leon", "Alan"];
// const girls = ["Ada", "Sarah", "Lily", "Kate"];

// console.log(boys.concat(girls));

// const cars = ["Volvo", "BMW", "Audi", "Toyota"];
// console.log(cars.pop());
// console.log(cars);

// const cars = ["BMW", "Volvo", "Audi", "Benz"];
// cars.push("BYD")
// console.log(cars);

// const cars = ["Volvo", "BMW", "Audi"];
// cars.shift();
// console.log(cars);

// const bikes = ["BMW", "Honda", "Yamaha"];
// bikes.unshift("Ducati");
// console.log(bikes);

// const pizza = ["Slice 1", "Slice 2", "Slice 3", "Slice 4", "Slice 5", "Slice 6", "Slice 7"];
// let part = pizza.slice(2, 4);
// console.log(part);

// const numbers = [12, 32, 43, 54, 3, 4234, 54, 123];
// let num = numbers.slice(3, 5);
// console.log(num);

// const cake = ["Slice 1", "Slice 2", "Slice 3", "Slice 4", "Slice 5", "Slice 6", "Slice 7"];
// cake.splice(2, 0, "Slice 8");
// console.log(cake);

// const names = ["Jess", "Tyler", "John", "Mack", "Ali", "Sarah", "Tim", "Buttler","Charlotte","Morgan"];
// names.splice(3, 4, "Salt");
// console.log(names);

// const giveOrder = new Promise((resolve, reject) => {
//   let inStock = true;
//   setTimeout(() => {
//     if (inStock === true) {
//       resolve("It's in stock");
//     } else {
//       reject("Out of Stock");
//     }
//   }, 2000);
// });

// async function getData() {
//   try {
//     const data = await giveOrder;
//     console.log("Success", data);
//   } catch (error) {
//     console.log("Error", error);
//   }
// }

// getData()

// const fruits = ["Apple", "Banana", "Pear"];
// const [first, second] = fruits;

// console.log(first,second);

// const person = {
//   name: "Wayne",
//   company: "Apple INC",
//   age: 12
// }

// const { name, company, age } = person;

// console.log(name);
// console.log(company);
// console.log(age);

// const countries = ["US", "UK", "Spain", "Korea", "Japan", "France"];
// const [one, two, three, four, five] = countries

// console.log(one,four);

// const carDetails = {
//   model: "Nissan Skyline",
//   year: 1999,
//   country: "Japan",
// };

// const { model, year, country } = carDetails;

// console.log(model, year);

// const phoneDetails = {
//   model: "Iphone 16 Pro",
//   year: 2024,
//   company: "Apple Inc",
//   country: "US",
//   color : "Desert Titanium"
// }

// const { model, year, company, country, color } = phoneDetails
// console.log(color,company,country);

// const games = ["Resident Evil", "CyberPunk 2077", "Fortnite", "Stellar Blade", "Call of Duty"];

// let [one,two,three,four,five] = games

// console.log(two,three);

// const cars = ["Audi", "BMW", "Porsche", "Toyota", "Nissan"];

// const [list1, list2, list3, list4, list5] = cars

// console.log(list1,list5);

// const movieDetails = {
//     title: "F1",
//     releaseDate: "21 September",
//     budget : "20000000",

// }

// const { title, releaseDate, budget } = movieDetails

// console.log(title,budget);

// const films = ["Dune", "F1", "Fast Five", "Iron Man", "Tron"];

// const [one, two, three, four, five] = films;

// console.log(one,two,five);

// const person = {
//   name: "Tyler",
//   age: "21",
//   company: "Apple INC",
// }

// const { name, age, company } = person;
// console.log(name, company);

// const cars = ["Audi", "Volvo", "BMW", "Honda", "Toyota"];

// const [item1, item2, item3, item4, item5] = cars

// console.log(item1,item4);

// let person = {
//   name: "Razor Callahan",
//   ride: "BMW M3 GTR",
//   city: "Rockport",
//   age: 34

// }

// const { name, ride, city, age } = person

// console.log(name,ride,city);

// const phones = ["iPhone", "Samsung", "Moto", "Lenovo", "Google"];

// const [item1, item2, item3, item4, item5, item6] = phones

// console.log(item2,item1);

// const details = {
//   founder: "Steve Jobs",
//   company : "Apple INC",
//   year: "1999",
// }

// const { founder, company, year } = details

// console.log(founder,company);

// const cars = ["Audi", "BMW", "Ferrari", "Lamborghini"];

// for (const x of cars) {
//   console.log(x);

// }

// let person = {
//   name: "Tyler James",
//   Age: "21",
//   Company : "Apple INC"
// }

// for (const key in person) {
//   const element = person[key];
//   console.log(key,element);

// }

// const cars = ["Toyota", "Honda", "BMW", "Audi"];

// const [item1, item2, item3, item4] = cars;

// console.log(item1,item4);

// const cars = ["Audi", "BMW", "Ferrari", "Ford", "Honda"];

// console.log(cars.length);

// const cars = ["Audi", "BMW", "Ferrari", "Ford", "Honda"];

// console.log(cars.toString());

// const cars = ["Audi", "BMW", "Ferrari", "Ford", "Honda"];

// console.log(cars.at(3));

// const drinks = ["Fanta", "Coke", "Pepsi", "Dew", "Sprite"];

// console.log(drinks.join(" | "));

// const cars = ["Audi", "BMW", "Ferrari", "Ford", "Honda"];

// console.log(cars.pop());
// console.log(cars);

// const cars = ["Audi", "BMW", "Ferrari", "Ford", "Honda"];

// console.log(cars.push("Mitsubishi Motors"));

// console.log(cars);

// const drinks = ["Fanta", "Coke", "Pepsi", "Dew", "Sprite"];

// drinks.push("Apple");

// console.log(drinks);

// const heros = ["Iron man", "Buck", "Natasha", "Cap", "Vision"];

// heros.shift("Wanda")

// console.log(heros);

// const cars = ["Toyota", "Honda", "Suzuki", "Mazda", "Nissan"];

// cars.unshift("Audi");

// console.log(cars);

// const cars = ["Toyota", "Honda", "Suzuki", "Mazda", "Nissan"];

// delete cars[2];

// console.log(cars);

// const boys = ["Tyler", "Will", "Steve"];
// const girls = ["Jess", "Nancy", "Max"];

// const students = boys.concat(girls);

// console.log(students);

// const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// let part = numbers.slice(2, 6);

// console.log(part);

// const cake = ["Slice1", "Slice2", "Slice3", "Slice4", "Slice5", "Slice6"];

// cake.splice(2, 0, "Slice7");

// console.log(cake);

// const colors = ["Red", "Blue", "Green", "Black", "Orange", "Salmon Pink", "White"];

// colors.splice(3, 2, "Magenta");

// console.log(colors);

// const cars = ["Audi", "BMW", "VOLVO", "SKODA", "BENZ"];

// const [ item1, item2, item3, item4, item5 ] = cars

// console.log(item1,item3);

// const data = {
//     name: "Julia",
//     age: 21,
//     company : "APPLE INC"
// }

// const { name, age } = data;
// console.log(name,age);

// for (let i = 0; i < 3; i++){
//     console.log("this is for loop");
// }

// for (const x of "Programming") {
//     console.log(x);

// }

// const cars = ["Audi", "Benz", "BMW", "SKODA"];

// for (const x of cars) {
//     console.log(x);

// }

// const obj = {
//     name: "Eric",
//     age: 24,
//     phone: "Iphone"
// }

// for (const key in obj) {
//     const element = obj[key];
//     console.log(element);

// }

// let i = 0;

// while (i < 3) {
//     console.log("this is while loop");
//     i++;
// }

// let p = 10;

// do {
//     p++;
//     console.log("this is do while loop");
// } while (p < 3);

// const cars = ["Audi", "Benz", "Skoda", "BMW"];

// cars.forEach(element => {
//     console.log(element);

// });

// const movie = [
//     { title: "Avengers", rating: 9 },
//     { title: "TRON legacy", rating: 7.2 },
//     { title: "Transformers", rating: 7.9 },
//     {title : "John Wick", rating : 7.8}
// ];

// const goodMovies = movie.filter(movie => movie.rating < 8);
// console.log(goodMovies);

// const items = [
//     { name: "Burger", price: 450 },
//     { name: "Pizza", price: 800 },
//     { name: "Roll",price : 300}
// ]

// const price = items.filter(items => items.price < 600);
// console.log(price);

// const games = [
//   { name: "RE4", price: `$${67}` },
//   { name: "Cyberpunk 2077", price: `$${50}` },
//   { name: "Days Gone", price: `$${47}` },
// ];

// const exclusive = games.filter((games) => games.price < 50);
// console.log(exclusive);

// const movies = [
//   { name: "John Wick", rating: 7.8 },
//   { name: "Tron Legacy", rating: 6.5 },
//   { name: "Cars", rating: 8.4 },
// ];

// const filtered = movies.filter((movies) => movies.rating < 7.0);
// console.log(filtered);

// const cars = ["Toyota", "BMW", "Audi", "Honda", "Ferrari", "Opel"];

// const [item1, item2, item3, item4, item5, item6] = cars

// console.log(item1,item4);

// const person = {
//   name: "Steve",
//   age: 23,
//   company : "Apple INC"
// }

// const { name, age, company } = person

// console.log(name,age);

// const items = [
//     { name: "Burger", price: 450 },
//     { name: "Pizza", price: 800 },
//     { name: "Roll",price : 300}
// ]

// const price = items.filter(items => items.price < 600);
// console.log(price);

// const games = [
//   { name: "RE4", price: 30 },
//   { name: "CyberPunk 2077", price: 400 },
//   { name: "Days Gone", price: 300 },
// ];

// const price = games.filter(items => items.price < 200);
// console.log(price);

// const foodItems = [
//   { name: "Burger", price: 230 },
//   { name: "Fries", price: 120 },
//   { name: "Pizza", price: 350 },
// ];

// const total = foodItems.filter(foodItems => foodItems.price > 150);
// console.log(total);

// const cars = ["Audi", "BMW", "Chrysler", "Toyota", "Skoda"];

// const [item1, item2, item3, item4, item5] = cars;

// console.log(cars);

// const person = {
//   name: "Hamza Mughal",
//   age: "25",
//   country: "Ireland",
// };

// const { name, age, country } = person;

// console.log(name,age);

// const games = [
//   { name: "RE4", price: 34 },
//   { name: "CyberPunk 2077", price: 56 },
//   { name: "Stellar Blade", price: 70 },
// ];

// const exclusive = games.filter(games => games.price > 50);
// console.log(exclusive);

// const cars = ["Audi", "Skoda", "Benz", "Toyota"];
// const bikes = ["Yamaha", "Honda", "Suzuki", "Kawasaki"];

// const automobiles = [...cars,...bikes , "Mitsubishi Motors"];
// console.log(automobiles);

// const cars = ["Audi", "BMW", "Benz", "Skoda", "Toyota"];

// const [item1, item2, item3, item4, item5] = cars
// console.log(item1,item5);

// const person = {
//     name: "Ellie Fanning",
//     age: 28,
//     company : "Apple INC"
// }

// const { name, age, company } = person;
// console.log(name,age);

// const boys = ["Alan", "Mike", "Will", "Dustin"];
// const girls = ["Nancy", "Joyce", "Max"];

// const students = boys.concat(girls);
// console.log(students);

// const names = ["Ali", "Joe", "Jim", "Hamza", "Ellie"];
// console.log(names.length);

// const games = [
//   { name: "Ghost Of Tushima", price: 50 },
//   { name: "Resident Evil", price: 34 },
//   { name: "Cyberpunk 2077", price: 45 },
// ];

// const exclusive = games.filter(games => games.price > 40);
// console.log(exclusive);

