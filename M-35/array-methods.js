// ============================================================
// JavaScript Array Methods
// Full Stack Web Developer er jonno MOST USED
// ============================================================


// ============================================================
// 1. push()
// Array er seshe element add kore
// ============================================================

const fruits = ["Apple", "Banana"];

fruits.push("Mango");

console.log(fruits);


// ============================================================
// 2. pop()
// Array er last element remove kore
// ============================================================

fruits.pop();

console.log(fruits);


// ============================================================
// 3. shift()
// Array er first element remove kore
// ============================================================

fruits.shift();

console.log(fruits);


// ============================================================
// 4. unshift()
// Array er surute element add kore
// ============================================================

fruits.unshift("Orange");

console.log(fruits);


// ============================================================
// 5. forEach()
// Prottekta element er upor kaj kore
// Return kore na
// ============================================================

const numbers = [10, 20, 30, 40];

numbers.forEach(number => {
    console.log(number);
});


// Index shoho
numbers.forEach((number, index) => {
    console.log(index, number);
});


// ============================================================
// 6. map()
// Prottekta element transform kore
// New array return kore
// React e khub beshi use hoy
// ============================================================

const nums = [1, 2, 3, 4];

const doubled = nums.map(number => number * 2);

console.log(doubled);


// Object array
const users = [
    { name: "Ranbir", age: 20 },
    { name: "Rahim", age: 22 }
];

const names = users.map(user => user.name);

console.log(names);


// ============================================================
// 7. filter()
// Condition onujayi multiple element ber kore
// New array return kore
// ============================================================

const ages = [12, 18, 20, 15, 25];

const adults = ages.filter(age => age >= 18);

console.log(adults);


// Object array
const activeUsers = users.filter(user => user.age >= 21);

console.log(activeUsers);


// ============================================================
// 8. find()
// Condition match kora FIRST element return kore
// Na pele undefined
// ============================================================

const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 1000 },
    { id: 3, name: "Keyboard", price: 2000 }
];

const product = products.find(item => item.id === 2);

console.log(product);


// ============================================================
// 9. findIndex()
// Condition match kora element er index return kore
// ============================================================

const productIndex = products.findIndex(item => item.id === 2);

console.log(productIndex);


// ============================================================
// 10. reduce()
// Multiple value combine kore single value banay
// Total / Sum / Calculation er jonno important
// ============================================================

const prices = [100, 200, 300, 400];

const total = prices.reduce((sum, price) => {
    return sum + price;
}, 0);

console.log(total);


// E-commerce cart example
const cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

const cartTotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
}, 0);

console.log(cartTotal);


// ============================================================
// 11. some()
// At least ONE element condition satisfy korle true
// ============================================================

const marks = [40, 50, 75, 30];

const hasPassed = marks.some(mark => mark >= 60);

console.log(hasPassed);


// ============================================================
// 12. every()
// ALL elements condition satisfy korle true
// ============================================================

const marks2 = [70, 80, 90, 60];

const allPassed = marks2.every(mark => mark >= 50);

console.log(allPassed);


// ============================================================
// 13. includes()
// Array er moddhe value ache kina check kore
// true / false return kore
// ============================================================

const skills = ["HTML", "CSS", "JavaScript", "React"];

console.log(skills.includes("React"));

console.log(skills.includes("Python"));


// ============================================================
// 14. sort()
// Array sort kore
// Number sort korar somoy compare function use korte hoy
// ============================================================

const numbers2 = [50, 10, 100, 30, 80];

numbers2.sort((a, b) => a - b);

console.log(numbers2);


// Descending
numbers2.sort((a, b) => b - a);

console.log(numbers2);


// Object sort
const products2 = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }
];

products2.sort((a, b) => a.price - b.price);

console.log(products2);


// ============================================================
// 15. slice()
// Array er ekta part copy kore
// Original array change kore na
// ============================================================

const numbers3 = [10, 20, 30, 40, 50];

const result = numbers3.slice(1, 4);

console.log(result);

console.log(numbers3);


// ============================================================
// 16. splice()
// Element remove / add / replace korte pare
// Original array change kore
// ============================================================

const colors = ["Red", "Green", "Blue", "Yellow"];

// Green remove
colors.splice(1, 1);

console.log(colors);


// New element add
colors.splice(1, 0, "Black");

console.log(colors);


// ============================================================
// 17. concat()
// Multiple array combine kore
// ============================================================

const frontend = ["HTML", "CSS"];
const backend = ["Node.js", "MongoDB"];

const fullStack = frontend.concat(backend);

console.log(fullStack);


// ============================================================
// 18. flat()
// Nested array ke single level e niye ashe
// ============================================================

const nested = [1, 2, [3, 4], [5, 6]];

console.log(nested.flat());


// ============================================================
// 19. Spread Operator (...)
// Array copy / merge korar jonno khub important
// React e especially useful
// ============================================================

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const merged = [...arr1, ...arr2];

console.log(merged);


// Array copy
const copy = [...arr1];

console.log(copy);


// ============================================================
// 20. Array Destructuring
// Array theke value ber kore variable e rakha
// ============================================================

const user = ["Ranbir", 20, "Bangladesh"];

const [name, age, country] = user;

console.log(name);
console.log(age);
console.log(country);


// ============================================================
// MOST IMPORTANT REAL-WORLD EXAMPLE
// map + filter + reduce
// ============================================================

const products3 = [
    { name: "Laptop", price: 50000, active: true },
    { name: "Mouse", price: 1000, active: false },
    { name: "Keyboard", price: 2000, active: true }
];


// Active products ber kora
const activeProducts = products3.filter(product => product.active);

console.log(activeProducts);


// Product names ber kora
const productNames = products3.map(product => product.name);

console.log(productNames);


// Total price ber kora
const totalProductsPrice = products3.reduce(
    (total, product) => total + product.price,
    0
);

console.log(totalProductsPrice);


// ============================================================
// FINAL PRIORITY
// ============================================================

/*

MUST KNOW:

1. map()
2. filter()
3. find()
4. forEach()
5. reduce()
6. sort()
7. some()
8. every()
9. includes()
10. findIndex()

 BASIC BUT IMPORTANT:

11. push()
12. pop()
13. shift()
14. unshift()
15. slice()
16. splice()

MODERN JS:

17. Spread Operator (...)
18. Array Destructuring

For MERN Developer:

map()       -> React list render
filter()    -> Search / Category filter
find()      -> Single data find
reduce()    -> Cart total / Calculation
sort()      -> Sorting
forEach()   -> Loop
some()      -> Check
every()     -> Validation
includes()  -> Search / Check
findIndex() -> Index find

*/