// PROMISE IN JS.

// using .then method to solve (promise).
const firstPromise = new Promise(function (resolve, reject){
    setTimeout(() => {
        resolve("It's resolved")
    }, 5000)
})

firstPromise.then((response) => {
    console.log("It's response", response);
})

// using await method to solve promise.

const secondPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("It's resolved"); 
    }, 2000);
})

const result = await secondPromise;
console.log("Result: " ,result);


// using async with await method to solve promise.

function boilWater() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Water is boiled."); 
        }, 3000);
    })
}
async function makeTea() {
    console.log("Boiling water...");
    const result = await boilWater();
    console.log(result);
    
    
}

makeTea();
