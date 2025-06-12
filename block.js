// Var is a function scope not a block scope.

function greet() {
    var meet = "hello";
    console.log(meet);
}

greet();
//meet sirf us function ke andar hi exist karta hai (function scope).
// hum function k ander hi isko access krsakte hain .


function greet() {
    var meet = "hello";
}

console.log(meet);
greet();

// yh theek nhi hai qk var function scope hai.

{
    var user = "Ali";
}

console.log(user);

//yahan name block k ander declare hoa hai lkn phir bhi bhar se accessible hai qk var block ko ignore krta hai.
// agar main name ko block k ander hi declare krunga tu tab bhi koi conflict nhi ayega.


// HUM var ko if,else yh for block k bhar bhi access kr sakte hain.

if (true) {
    var greet = "Ali";
    
}
console.log(greet);

// let ek block scope hai is waja se (i) undefined ayega.
for (let i = 0; i < 3; i++){
    
}
console.log(i);
