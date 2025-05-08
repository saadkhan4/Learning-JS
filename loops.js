// LOOPS IN JS.
// 1. FOR LOOP
// 2. FOR OFF-LOOP
// 3. FOR IN_LOOP
// 4. WHILE LOOP
// 5. DO WHILE LOOP
// 6. FOR EACH LOOP


// 1. FOR LOOP

for (let i = 0; i < 3; i++){
    console.log("Hello world")
}

// 2. FOR OFF-LOOP                                  
for (const x of "Programming") {             //Loops through values in arrays, strings, etc.
    console.log(x)    
}


// 3. FOR IN-LOOP
let obj = {                                  

    name: "Maria",
    age: "20",
    company : "Apple INC"
}
for (const key in obj) {                     //Loops through object keys (properties)
    const element = obj[key];
    console.log(key, element)    
}
// 4. WHILE LOOP
let i = 0;                                 //Repeats code while a condition is true
while (i<5) {
    console.log("Hello mars! ")
    i++;
}
// 5. DO-WHILE LOOP
let p = 10;                                
do {
    console.log("Hello world!")
    p++;
} while (p<5);                              //Runs code at least once, then checks condition


// 6. FOR EACH LOOP
let x = [1, 2, 3, 4, 5, 6, 7]

x.forEach(element => {                       // efficient loop for using array.
    console.log(element)
});

