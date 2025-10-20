// Template string
let fName = "Ranbir";
let lName = "Roy";
console.log(`I am ${fName} ${lName}`)


// Arrow Function
const add = (a, b) => a+b;
console.log(add(5, 3));
console.log(add(9, 8))

// Spread Operator
let person = {name: "Ranbir", age: 20};
let newPerson = {...person, country: "Bangladesh"};

console.log(newPerson);
