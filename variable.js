// JavaScript Variables //

//( var ) can be reassign and redeclared . SCOPE: FUNCTION
//( let ) can be reassign and not redeclared . SCOPE : BLOCK
//( const ) cannot be reassign and nor redeclared . SCOPE : BLOCK
// A block in JavaScript is simply a set of code enclosed in curly braces { }.

var name = "Alice";       // can be re-declared and updated
let age = 25;             // can be updated, not re-declared in the same block
const country = "USA";    // can't be updated or re-declared

{
    let name = "Charlotte";
    name = "Bob"
    console.log(name)
}

{
    const pi = 3.14;
    console.log(pi)
}

var message = "Hello";
var message = "Hi";
console.log(message)

// •	Re-declare: “Nayi baar variable banaana.”
// •	Re-assign: “Purane variable ka value badalna.”

// var
var x = 1;
var x = 2;   // ✅ re-declare
x = 3;       // ✅ re-assign

// let
let y = 1;
// let y = 2; // ❌ re-declare not allowed
y = 3;       // ✅ re-assign

// const
const z = 1;
// const z = 2; // ❌ re-declare not allowed
// z = 3;       // ❌ re-assign not allowed

// DATA TYPES IN JS.
// Primitive Data Types (Single Value, Immutable) !!UNCHANGEABLE!!

let name = "Charles";         // String
let ages = 25;                // Number
let isOnline = true;          // Boolean
let salary = null;            // Null
let city;                     // Undefined
let bigNumber = 123456789012345678901234567890n;  // BigInt
let id = Symbol('unique');    // Symbol

// Non-Primitive Data Types (Multiple Values, Mutable) !!CHANGEABLE!!

// Object :-
// Key-Value pairs collection
let person = { name: "Eric", age: 24 };
console.log(person.name);

// Array :-
// List of multiple values in ordered list
let fruits = ["apple", "banana", "mango"];
console.log(fruits[1]);

// Function:-
function greet() {
    console.log("Hello world");
}
greet();

// let f = Symbol("Saad")
// let g = Symbol("Saad")

// var h = 10
// var j = 10
// console.log(h==j)
// console.log(f==g)

// function greet() {
//   const a = 2;
  
//     console.log(a);
// }
// greet()
// const a = 4
// console.log(a);
