// OPERATORS IN JS.
// 1. Arithmetic operator
// 2. Assignment operator
// 3. Comparison operator
// 4. Logical operator

// 2. ASSIGNMENT OPERATOR:-        (Used to assign values to variables)

let c = 4;
c += 1;           // c = c + 1
console.log(c)

let b = 7;
b -= 3;          // b = b - 3
console.log(b)

let v = 8;
v *= 2;             // v = v * 2 
console.log(v)

let s = 10;
s /= 3;               // s = s / 3
console.log(s)

let t = 20;
t %= 6;              // t = t % 6
console.log(t)

// 3. COMPARISON OPERATORS          (Used to compare two values and return true or false)

console.log(5 == "5");    // true  (values are equal)
console.log(5 === "5");   // false (types are different: number vs string)
console.log(10 != 8);     // true
console.log(7 > 3);       // true
console.log(4 <= 2);      // false

// 4. LOGICAL OPERATORS             //(Used to combine multiple conditions)

let age = 20;
let hasID = true;

if (age >= 18 && hasID) {              //Returns true only if both conditions are true

    console.log("You can enter.") 
} else {
    console.log("You cannot enter.")
}


let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
    console.log("You can relax!");          //If any one condition is true → result is true.
}

let isOnline = false;

if (!isOnline) {
  console.log("User is offline.");         //! flips the value: true → false, false → true.
}

