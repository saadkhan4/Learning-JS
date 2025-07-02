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
// const c1 = new Car("Honda Civic", 2016);
// c1.getDetails();

// WITH RETURN

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }

//   getAge() {
//     const age = new Date().getFullYear() - this.year;
//     return age; // 👈 Return kar raha hai value
//   }
// }

// // 🔸 Instance banaya
// const myCar = new Car("Ford", 2014);

// // 🔹 Method call + return value use
// const carAge = myCar.getAge();

// // 🔸 Ab console.log method ke bahar likh rahe hain
// console.log(`My car is ${carAge} years old.`);


// class Car{
//   constructor() {
//     console.log("Hello from constructor");
//   }
// }

// const c1 = new Car();

// class Person{
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHello() {
//     console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
//   }
// }

// const p1 = new Person("Sansa Stark", 29);
// p1.sayHello();

// class Student {
//   constructor(name, marks) {
//     this.name = name;
//     this.marks = marks;
//   }
//   result() {
//     if (this.marks >= 40) {
//       console.log("Passed");
//     } else {
//       console.log("Failed");
//     }
//   }
// }

// const s1 = new Student("Hamza",75);
// s1.result();


// class Book{
//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//   }
//   details() {
//     console.log(`${this.title} by ${this.author}`);
//   }
// }

// const b1 = new Book("Dune", "Dennis");
// b1.details();


// class Movie{
//   constructor(name,releaseYear) {
//     this.name = name;
//     this.releaseYear = releaseYear;
//   }
//   details() {
//     const age = new Date().getFullYear() - this.releaseYear;
//     console.log(`${this.name} is ${age} years old.`);
//   }
// }

// const m1 = new Movie("John Wick", 2014);
// m1.details();


// class ShoppingCart{
//   constructor(item1, item2, item3) {
//     this.item1 = item1;
//     this.item2 = item2;
//     this.item3 = item3;
//   }
//   getTotal() {
//     return this.item1 + this.item2 + this.item3;
//   }
// }

// const cart = new ShoppingCart(100, 400, 600);
// const total = cart.getTotal();
// console.log(`Your total bill is ${total}`); 



class MathTool{
  static double(n) {
    return n * 2;
  }
}

const result = MathTool.double(3);
console.log(result);

