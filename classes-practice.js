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
//     return age; //  Return kar raha hai value
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



// class MathTool{
//   static double(n) {
//     return n * 2;
//   }
// }

// const result = MathTool.double(3);
// console.log(result);

// class Book{
//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//   }
//   details() {
//     console.log(`${this.title} is written by ${this.author}`);
//   }
// }

// const b1 = new Book("Pride & Prejudice", "Jane Austin");
// b1.details();

// class Movie{
//   constructor(title, releaseYear) {
//     this.title = title;
//     this.releaseYear = releaseYear;
//   }
//   getAge() {
//     const date = new Date().getFullYear() - this.releaseYear;
//     let result = `${this.title} is ${date} years old.`;
//     return result;
//   }
// }

// const m1 = new Movie("Avengers Endgame", 2018);
// console.log(m1.getAge());


// class Person{
//   constructor(name, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
//   }
//   getDetails(){
//     const date = new Date().getFullYear() - this.birthYear;
//     let result = (`My name is ${this.name} and I'm ${date} years old.`);
//     return result;
//   }
// }

// const p1 = new Person("Joel Miller", 1995);
// console.log(p1.getDetails());


// class Subtraction{
//   static subtract(x, y) {
//     return x - y
//   }
// }
// console.log(Subtraction.subtract(3, 1));


// class Greet{
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   details() {
//     console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
//   }
// }

// const g1 = new Greet("Sansa Stark", 29);
// g1.details();

// class Car{
//   constructor(brand, model) {
//     this.brand = brand;
//     this.model = model;
//   }
//   getDetails() {
//     console.log(`${this.brand} made ${this.model} in 2016`);
//   }
// }

// const c1 = new Car("Honda", "Civic");
// c1.getDetails();

// class Movie{
//   constructor(title, releaseYear) {
//     this.title = title;
//     this.releaseYear = releaseYear;
//   }
//   getDetails() {
//     const date = new Date().getFullYear() - this.releaseYear;
//     console.log(`${this.title} is ${date} years old`);
//   }
// }

// const m1 = new Movie("Transformers", 2007);
// m1.getDetails();

// class Student{
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

// const s1 = new Student("Sam Witwicky", 50);
// s1.result();

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

// const cart = new ShoppingCart(122, 677, 455);
// const total = cart.getTotal();
// console.log(`Your total is $${total}`);


// class StudentMarks{
//   constructor(maths, english, science) {
//     this.english = english;
//     this.maths = maths;
//     this.science = science;
//   }
//   getTotalMarks() {
//     return this.english + this.maths + this.science;
//   }
// }

// const s1 = new StudentMarks(50, 67, 89);
// const total = s1.getTotalMarks()
// console.log(`Total marks are ${total}`);


// class Person{
//   constructor(name, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
//   }

//   getDetails() {
//     const date = new Date().getFullYear() - this.birthYear;
//     let result = (`My name is ${this.name} and I'm ${date} years old.`);
//     return result;
//   }
// }

// const p1 = new Person("Sansa Stark", 1998);
// console.log(p1.getDetails())


// class Multiplication{
//   static multiply(x,y) {
//     return x * y;
//   }
// }

// console.log(Multiplication.multiply(3 ,6));


// class Person{
//   constructor(name, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
//   }
//   getDetails() {
//     const date = new Date().getFullYear() - this.birthYear;
//     let result = (`I'm ${this.name} and I'm ${date} years old.`)
//     return result;
//   }
// }

// const p1 = new Person("John Snow", 1988);
// console.log(p1.getDetails());



// class Movie{
//     constructor(title, releaseYear) {
//         this.title = title;
//         this.releaseYear = releaseYear;
//     }

//     getDetails() {
//         const date = new Date().getFullYear() - this.releaseYear;
//         let result = (`${this.title} is ${date} years old.`);
//         return result;
//     }
// }

// const m1 = new Movie("Insidious",2009);
// console.log(m1.getDetails());


// class Car{
//     constructor(brand, model, year) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     }
//     getCarInfo() {
//         let result = (`${this.brand} ${this.model} ${this.year}`);
//         return result;
//     }
// }

// const c1 = new Car("Mitsubishi", "Eclipse", 1997);
// console.log(c1.getCarInfo());


// class Student{
//     constructor(name, grade, marks) {
//         this.name = name;
//         this.grade = grade;
//         this.marks = marks;
//     }

//     getResult() {
//         let marks = this.marks;

//         if (marks >= 50) {
//             console.log("Passed");   
//         } else {
//             console.log("Failed");
//         }
//     }
// }

// const s1 = new Student("Tony", "XII", 56);
// s1.getResult();


// class Book{
//     constructor(title, author,year) {
//         this.title = title;
//         this.year = year;
//         this.author = author;
//     }
//     getSummary() {
//         const result = (`${this.title} by ${this.author} was published in ${this.year}`);
//         return result;
//     }
// }

// const m1 = new Book("The Hobbit", "J.R.R. Tolkien",1937);
// console.log(m1.getSummary());


// class Person{
//     constructor(name, birthYear) {
//         this.name = name;
//         this.birthYear = birthYear;
//     }
//     moreDetails() {
//         const date = new Date().getFullYear() - this.birthYear;
//         const result = (`My name is ${this.name} and I'm ${date} years old.`);
//         return result;
//     }
// }

// const p1 = new Person("Robert Pattinson", 1995);
// console.log(p1.moreDetails());


// class ShoppingCart{
//     constructor(item1, item2, item3) {
//         this.item1 = item1;
//         this.item2 = item2;
//         this.item3 = item3;
//     }
//     details() {
//         const result = this.item1 + this.item2 + this.item3;
//         return result;
//     }
// }

// const s1 = new ShoppingCart(122, 99, 45);
// console.log(s1.details());

// class Car{
//     constructor(name, modelYear) {
//         this.name = name;
//         this.modelYear = modelYear;
//     }
//     getDetails() {
//         const date = new Date().getFullYear() - this.modelYear;
//         const result = (`${this.name} is ${date} years old.`);
//         return result;
//     }

// }

// const c1 = new Car("BMW M4 GTS", 2018);


// console.log(c1.getDetails());

// class Car{
//     static plus(x, y) {
//         console.log(x + y);
        
//     }
// }

// Car.plus(3 + 5);