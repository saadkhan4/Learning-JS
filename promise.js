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

// using resolve and reject to solve promise.
const orderPizza = new Promise((resolve, reject) => {
  let pizzaShopOpen = false;

  setTimeout(() => {
    if (pizzaShopOpen) {
      resolve("It's open");
    } else {
      reject("It's closed");
    }
  }, 2000);
});

orderPizza
  .then((message) => {
    console.log("Success", message);
  })
  .catch((error) => {
    console.log("Failure", error);
  });

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


