// Importants part of Array


// 1.length: koyti element ache seta bole
/* let fruits = ["Banana", "Jackfruits", "Orange", "Lichi"];
console.log(fruits.length); */


// 2.index: Protiti element er obosthan ke index bole (0 theke shuru hoy)
/* let fruits =["Banana", "Jackfruits", "Orange", "Lichi"];
console.log(fruits[0]);
console.log(fruits[3]) */

// 3.push(): Array er shese notun element jog kore
/* let fruits =["Banana", "Jackfruits", "Orange", "Lichi"];
fruits.push("Temarind");
console.log(fruits); */


// 4.pop():Array er sheser element muche fele
/* let fruits =["Banana", "Jackfruits", "Orange", "Lichi"];
fruits.pop();
console.log(fruits); */


// 5.indexOf(): kon element kon index a ache seta bole na thakle -1 dey
/* let fruits =["Banana", "Jackfruits", "Orange", "Lichi"];
console.log(fruits.indexOf("Banana"));
console.log(fruits.indexOf("Temarind")); */


// 6.includes():kono element array te ache kina true/false return kore
/* let fruits =["Banana", "Jackfruits", "Orange", "Lichi"];
console.log(fruits.includes("Apple"));
console.log(fruits.includes("Banana")); */


// Array kina ta check korar system
/* let fruits =["Banana", "Jackfruits", "Orange", "Lichi"];
console.log(Array.isArray(fruits));

let name = "Rahim";
console.log(Array.isArray(name)); */


// slice(start, end):purono array na kete shudhu copy kore notun choto array banay........main array change hoy na
/* let numbers = [10, 20, 30, 40, 50];
let part =numbers.slice(1, 4);
console.log(part);
console.log(numbers); */



// Shift():Array er prothom element muche fele
/* let fruits = ["Mango", "Banana", "Apple"];
fruits.shift();
console.log(fruits); */

// unshift(): Array er shurute notun element jog kore
/* let fruits = ["Mango", "Banana", "Apple"];
fruits.unshift("Temarind")
console.log(fruits); */

// join(): Array ke string a convert kore  ||simble na dile defaultvabe comma(,) asbe
/* let fruits = ["Mango", "Banana", "Apple"];
let text =fruits.join("-")
console.log(text) */



// reduce():puro array ke reduce kore akta single value banay || ekhane acc=accumulator(jogfol rakhar jonno), current=bortoman jei element ta loop hocche, 0=initial value(acc er shurur man)

let numbers = [10, 20, 30, 40];
let sum = numbers.reduce((acc, current) => acc + current, 0);
console.log(sum);