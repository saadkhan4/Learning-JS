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

const electric = new Promise((resolve, reject) => {
    let power = true;

    if (power) {
        resolve("The light is ON.");
    } else {
        reject("No electricity. Light is OFF.");
    }
})

async function powerAvailable() {
    try {
        const e1 = await electric;
        console.log("Success",e1);
    } catch (error) {
        console.log("Failure",error);
    }
    
}
powerAvailable();