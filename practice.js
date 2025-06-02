// Practice file of JS.

// 1. assignment operator

// let c = 4;
// c = c += 4;
// console.log(c);

// let p = 3;
// p = p *= 4;
// console.log(p)

// let z = 2;
// z = z -= 9;
// console.log(z)

// 2. logical operator in conditional statements

// let age = 18;

// if (age >= 18) {
//     console.log("You can vote.");
// }


// let age = 25;

// if (age >= 20) {
//     console.log("You can vote.");
// } else {
//     console.log("You can't vote.")
// }

// let temperature = 21;

// if (temperature >= 35) {
//     console.log("It's very hot today.")
// } else if (temperature >= 20) {
//     console.log("It's moderate today.")
// } else {
//     console.log("It's cold today.")
// }


// let price = 70;

// if (price >= 50) {
//     console.log(`It's expensive $${price}`);
// } else if (price >= 25) {
//     console.log(`It's not expensive $${price}`);
// } else {
//     console.log(`It's cheap $${price}`);
// }

// let day = 4;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break
//     case 2:
//         console.log("Tuesday");
//         break
//     case 3:
//         console.log("Wednesday");
//         break
//     case 4:
//         console.log("Thursday");
//         break
//     default:
//         console.log("It's just another day")
        
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

let h = [32, 54, 2, 31, 43, 123, 56, 87, 3];

h.forEach(element => {
    console.log(element);
});