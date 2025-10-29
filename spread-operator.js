// // Spread operator in Array.

const cars = ["Audi", "BMW", "Skoda", "Benz", "Chevrolet"];

const automobiles = [...cars];

console.log(automobiles);

// // Combining multiple arrays in spread operator.

const fruits = ["Apple", "Banana", "Cherry", "Guava", "Watermelon"];
const vegetables = ["Potato", "Carrot", "Tomato", "Cabbage"];

const items = [...fruits, ...vegetables];

console.log(items);

// // Immutable values in an array

const countries = ["Italy", "France", "Pakistan", "UAE", "United Kingdom"];
const cities = ["Monaco", "Paris", "Karachi", "Dubai", "England"];

// add values like this in array
const list = [...countries, ...cities, "United States", "Los Angeles"];

console.log(list);

// /// Spread Operator in OBJECTS.

const person = {
  name: "Charlotte",
  Age: 37,
};

const updatePerson = {
  ...person,
  city: "North Carolina",
};

console.log(updatePerson);

// // Combining objects in spread operator

const use = { name: "John", age: 35 };
const account = { type: "Premium", balance: `$${500000}` };

const profile = { ...use, ...account };

console.log(profile);

// Nested objects.

const user = {
  name: "Hamza",
  age: 25,
  address: {
    city: "Karachi",
    country: "Pakistan",
  },
};

const newUser = {
  ...user,
  address: {
    ...user.address,
    city: "Balbriggan",
    country: "Republic of Ireland",
  },
};

console.log(newUser);

