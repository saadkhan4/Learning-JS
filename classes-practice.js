// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     sayHello() {
//         console.log(`"My name is ${this.name} and I'm ${this.age} Years old."`)
//     }
// }

// const p1 = new Person("Ali",19);
// p1.sayHello();

// class Car{
//     constructor(brand, model) {
//         this.brand = brand;
//         this.model = model;
//     }
//     showDetails() {
//         console.log(`"This car is a ${this.brand} ${this.model}"`);
//     }
// }

// const c1 = new Car("Honda" , "Civic");
// c1.showDetails();


// class Car{
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
//     getDetails() {
//         const date = new Date().getFullYear() - this.year
//         console.log(`This is ${this.name} and it's ${date} years old`);
        
//     }
// }

// const c1 = new Car("Nissan Skyline GT", 1999);
// c1.getDetails();

class Car{
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    getDetails() {
        const date = new Date().getFullYear() - this.year
        console.log(`This is ${this.name} and it's ${date} years old`);
    }

}
const c1 = new Car("Honda Civic", 2016);
c1.getDetails();