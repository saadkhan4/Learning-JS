// Practice file of JS.

let age = 18;

if (age >= 18) {
    console.log("You can go!")
}

let age = 20;

if (age >= 18) {
    console.log("You can vote!")
} else {
    console.log("You cannot vote!")
}

let temperature = 10;

if (temperature >= 40) {
    console.log("It's hot today.")
} else if (temperature >= 25) {
    console.log("It's moderate today.")
} else {
    console.log("It's cold today.")
}

let day = 3;

switch (day) {
    case 1:
        console.log("It's Monday.");
        break;
    case 2:
        console.log("It's Friday.");
        break;
    case 3:
        console.log("It's Sunday.");
        break
    default:
        console.log("Random day.");
} 

let age = 22;
let hasID = false;

if (age >= 18 && hasID) {
    console.log("You can go.");
} else {
    console.log("You can't go.")
}

let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
    console.log("You can relax.")
} else {
    console.log("You can't relax.")
}

let condition = true;

if (condition !== true) {
    console.log("that's true.");
} else {
    console.log("that's not true.")
}

function greet() {
    console.log("Hello there!");
}
greet()

let isRaining = true;

if (!isRaining) {
    console.log("You'll need an umbrella.");
} else {
    console.log("There is no need of umbrella.")
}

let firstName = "Charlotte";
let lastName = "flair";
let age = 39;

console.log(`I'am ${firstName} ${lastName} and I'am ${age} years old.`);

for (i = 0; i < 3; i++){
    console.log("this is for loop.")
}

for (const element of "Specified") {
    console.log(element)
}

const p = [1, 3, 4, 54, 234, 22, 0];

for (const element of p) {
    console.log(element)
    
}

let obj = {
    Name: "Miller",
    Age: 35,
    Company : "Apple INC"
}

for (const key in obj) {
    const element = obj[key];
    console.log(element,key)
        
}

let i = 0;

while (i < 3) {
    console.log("this is while loop.");
    i++;
}

let p = 0;

do {
    console.log("this is do while loop");
    p++;
} while (p < 3);


let a = [32, 43, 65, 12, 87, 9, 1];

a.forEach(element => {
  console.log(element)  
});




// // with return method
// function getStudentByName(name) {
//     console.log("studentName: ", name);
//     return name;
// }
