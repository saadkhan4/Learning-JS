// ARRAY IN JS.
//There are 3 methods of an array :-
//1. ARRAY LITERAL
//2. EMPTY ARRAY + INDEX ASSIGNMENT
//3. NEW ARRAY


//1. ARRAY LITERAL
// const cars = ["Benz", "Audi", "Bmw"];

// console.log(cars)

//2. EMPTY ARRAY + INDEX ASSIGNMENT
// const names = [];
// names[0] = "Joel";
// names[1] = "Ellie";
// names[2] = "Abby";
// names[3] = "Tommy";

// console.log(names[1]);

//3. NEW ARRAY

// const fruits = new Array("apple","banana");

// console.log(fruits);


// METHOD OF ARRAYS.

//1. Length (size) of an array.

// const names = ["ali", "sara", "hamza"];

// console.log(names.length);

// names.length = 2;

// console.log(names)

//2. toString (convert into single string)

// const fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits.toString());

//3. at() (return index element same as [])

// const vegetables = ["Onion", "Capsicum", "Tomato"];
// console.log(vegetables.at(2));

//4. join() ( single string bana kr har index k bd jo bhi hum dengy jese symbols etc)

// const students = ["Ali", "Sara", "Bob"];
// console.log(students.join(" | "));

//5. pop() (Removes last element & return from an array)

// const cars = ["Volvo", "BMW", "Benz"];
// console.log(cars.pop());
// console.log(cars);


//6. push() (To add element in the last).

// const heroes = ["Superman", "Thor", "Nat"];
// heroes.push("Iron man");
// console.log(heroes);

//7. shift (same as pop but removes first element of an array)

// const villans = ["Doom", "Witch", "Electro"];
// villans.shift();
// console.log(villans);


//8. unShift (same as push but add first element of an array)

// const villans = ["Doom", "punisher", "Matt"];
// villans.unshift("lex");
// console.log(villans);


//9. delete() using delete creates undefined holes in the array.
// it's better to use pop and shift.

// const drinks = ["Coke", "Sprite", "Fanta"];
// delete drinks[2];
// console.log(drinks);

//10. concat () aka Merging array.

// const boys = ["Ali", "hamza", "saad"];
// const girls = ["Sara", "Amna", "Natasha"];

// const students = boys.concat(girls);
// console.log(students)
// we can also add as a string into an array
// console.log(students.concat("Bob"));


//11. slice ()  

// const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// let part = numbers.slice(2);
// console.log(part);


// const cake = ["Slice1", "Slice2", "Slice3", "Slice4", "Slice5"];

// let my_slice = cake.slice(2,4);
// console.log(my_slice);

