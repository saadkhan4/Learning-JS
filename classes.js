// class Car{
//     constructor() {
//         console.log("Hello from constructor.");
//     }
// }

// // made instance to run constructor cuz constructor don't run automatically.
// const c1 = new Car();


// class Car{
//     constructor() {
//         console.log("Hello from constructor");
//     }
//     getModel() {
//         console.log("Ford Mustang GT");
//     }

// }

// // jo class se bana hoa hai woh instance hai.
// const c1 = new Car();  
// c1.getModel()  
// constructor k ilawa ju bhi function create kia hoga woh manually callout is tarah hoga.


// class Car{
//     constructor() {
//         console.log("Hello from constructor");
//         this.getModel();   // yh current instance hai.
//     }
//     getModel() {
//         console.log("Nissan Skyline GT");
//     }
// }

// const c1 = new Car();


class Car{
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    getAge() {
        const age = new Date().getFullYear() - this.year;
        return age;
    }

}

const myCar = new Car("Ford", 1999); 

const carAge = myCar.getAge();

console.log(`My car is ${carAge} years old`);