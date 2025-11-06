// This is the method of Js and it will transform the every element of array into new array.

// const numbers = [2, 4, 5, 6, 7];
// // with arrow function
// const doubled = numbers.map(num => num * 2);
// console.log(doubled);


// with normal function
// const numbers = [2, 4, 5, 6, 5, 9];
// const doubled = numbers.map(function (num) {
//     return num * 2;
// })

// console.log(doubled);


const names = ["Charlotte", "Jess", "Alicia"];
const upperNames = names.map(name => name.toUpperCase());

console.log(upperNames);


const cars = [
    { model: "M5", company: "BMW" },
    { model: "LFA", company: "Lexus" },
    { model: "SKYLINE", company: "Nissan" },
];

// we created exotic a arrow function
const automobiles = cars.map(exotic => exotic.model);
console.log(automobiles);

