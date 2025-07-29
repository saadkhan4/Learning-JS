// Conditional statements in JS.

//1. if statement
//2. if else statement
//3. if else if else statement
//4. switch statement

// IF STATEMENT:-
let age = 18;

if (age >= 18) {
    console.log("You can vote. ")
}

// IF ELSE STATEMENT:-
let marks = 90;

if (marks >= 50) {
    console.log("You are passed! ");
} else {
    console.log("You are failed! ");
}

// IF ELSE IF ELSE STATEMENT:-
let temperature = 35;

if (temperature >= 40) {
    console.log("It's very hot outside. ")
} else if (temperature >= 25) {
    console.log("The weather is warm. ")
} else {
    console.log("It's cool or cold outside. ")
}

// SWITCH STATEMENT:-
let day = 2;

switch (day) {           //switch statement check karta hai ke day ki value kis case se match karti hai.
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:            //Agar koi case match na ho, to ye run hota hai.
        console.log("Another day");
}

