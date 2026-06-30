/* let num = 25;

if (num >= 20 && num <= 30) {
    console.log("Yes");
} else {
    console.log("No");
}
 */



function sum(a,b) {
    const result = a + b;
    return result;
}
const output = sum(4,5);
console.log(output)


//=========================================================
// JavaScript Array Methods
// push() | pop() | shift() | unshift()
//=========================================================



//=========================================================
// push()
// Kaj:
// push() array er seshe (Last) notun element add kore.
//
// Return:
// Notun array er length return kore.
//=========================================================

let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);
// Output:
// ["Apple", "Banana", "Mango"]


// Array er seshe Orange add korlam
let newLength = fruits.push("Orange");

console.log(fruits);
// Output:
// ["Apple", "Banana", "Mango", "Orange"]

console.log(newLength);
// Output:
// 4
// Karon ekhon array te mot 4 ta element ache.


// Ek sathe onekgulo element add kora jay
fruits.push("Lichi", "Jackfruit");

console.log(fruits);
// Output:
// ["Apple", "Banana", "Mango", "Orange", "Lichi", "Jackfruit"]





//=========================================================
// pop()
// Kaj:
// pop() array er sesher (Last) element remove kore.
//
// Return:
// Je element remove hoy, seta return kore.
//=========================================================

let numbers = [10, 20, 30, 40];

console.log(numbers);
// Output:
// [10, 20, 30, 40]


// Sesher element remove korlam
let removedNumber = numbers.pop();

console.log(numbers);
// Output:
// [10, 20, 30]

console.log(removedNumber);
// Output:
// 40
// Karon sesher element ta remove hoye variable e store hoyeche.





//=========================================================
// unshift()
// Kaj:
// unshift() array er shurute (First) notun element add kore.
//
// Return:
// Notun array er length return kore.
//=========================================================

let colors = ["Blue", "Green"];

console.log(colors);
// Output:
// ["Blue", "Green"]


// Array er shurute Red add korlam
let colorLength = colors.unshift("Red");

console.log(colors);
// Output:
// ["Red", "Blue", "Green"]

console.log(colorLength);
// Output:
// 3
// Karon ekhon array te mot 3 ta element ache.


// Ek sathe onekgulo element add kora jay
colors.unshift("Black", "White");

console.log(colors);
// Output:
// ["Black", "White", "Red", "Blue", "Green"]





//=========================================================
// shift()
// Kaj:
// shift() array er prothom (First) element remove kore.
//
// Return:
// Je element remove hoy, seta return kore.
//=========================================================

let cities = ["Dhaka", "Rangpur", "Dinajpur", "Khulna"];

console.log(cities);
// Output:
// ["Dhaka", "Rangpur", "Dinajpur", "Khulna"]


// Prothom element remove korlam
let removedCity = cities.shift();

console.log(cities);
// Output:
// ["Rangpur", "Dinajpur", "Khulna"]

console.log(removedCity);
// Output:
// Dhaka





//=========================================================
// Real Life Example (Queue)
// Queue te je age ashbe, se age service pabe.
//=========================================================

let queue = [];

// Rahim, Karim, Hasan line e daralo
queue.push("Rahim");
queue.push("Karim");
queue.push("Hasan");

console.log(queue);
// Output:
// ["Rahim", "Karim", "Hasan"]


// Line er prothom manus service peye ber hoye gelo
let servedPerson = queue.shift();

console.log(servedPerson);
// Output:
// Rahim

console.log(queue);
// Output:
// ["Karim", "Hasan"]


// Ekjon VIP aslo, tai take line er shurute rakhlam
queue.unshift("VIP");

console.log(queue);
// Output:
// ["VIP", "Karim", "Hasan"]


// Sesher manus line chere chole gelo
let leftPerson = queue.pop();

console.log(leftPerson);
// Output:
// Hasan

console.log(queue);
// Output:
// ["VIP", "Karim"]





//=========================================================
// Shortcut
//=========================================================

/*

push()
---------
✔ Array er seshe element add kore.
✔ New length return kore.

Example:

["A", "B"]

↓

push("C")

↓

["A", "B", "C"]


-------------------------------------


pop()
--------
✔ Array er sesher element remove kore.
✔ Removed element return kore.

Example:

["A", "B", "C"]

↓

pop()

↓

["A", "B"]


-------------------------------------


unshift()
------------
✔ Array er shurute element add kore.
✔ New length return kore.

Example:

["B", "C"]

↓

unshift("A")

↓

["A", "B", "C"]


-------------------------------------


shift()
----------
✔ Array er prothom element remove kore.
✔ Removed element return kore.

Example:

["A", "B", "C"]

↓

shift()

↓

["B", "C"]


====================================
Easy Trick
====================================

push()     ➜ Last e Add
pop()      ➜ Last theke Remove

unshift()  ➜ First e Add
shift()    ➜ First theke Remove

*/