/* ============================================================
   REACT শেখার আগে যেসব JavaScript টপিক জানা জরুরি
   ============================================================ */


/* ============================================================
   1. var, let, const — Variable Declaration
   ============================================================ */

var oldWay = "var scope function-level, hoist hoy"; // পুরাতন পদ্ধতি, এড়িয়ে চলা ভালো
let changeable = "let দিয়ে বানানো variable পরে change করা যায়";
const fixed = "const দিয়ে বানানো variable reassign করা যায় না";

changeable = "এইভাবে change করা যাবে"; // ঠিক আছে
// fixed = "এটা করলে error দিবে"; // ❌ TypeError

console.log(oldWay, changeable, fixed);


/* ============================================================
   2. Data Types
   ============================================================ */

const str = "Hello";           // String
const num = 25;                // Number
const bool = true;             // Boolean
const arr = [1, 2, 3];         // Array (object type)
const obj = { name: "Rahim" }; // Object
const nul = null;              // Null
let undef;                     // Undefined
const sym = Symbol("id");      // Symbol

console.log(typeof str, typeof num, typeof bool, typeof arr, typeof obj);


/* ============================================================
   3. Template Literals (Backtick String) — React এ খুব দরকার
   ============================================================ */

const name = "Karim";
const age = 22;

// পুরাতন পদ্ধতি:
console.log("আমার নাম " + name + ", বয়স " + age);

// Template literal (নতুন ও পরিষ্কার পদ্ধতি):
console.log(`আমার নাম ${name}, বয়স ${age}`);

// Multi-line string সহজে লেখা যায়
const multiLine = `প্রথম লাইন
দ্বিতীয় লাইন`;
console.log(multiLine);


/* ============================================================
   4. Arrow Functions — React Component/Function এ সবচেয়ে বেশি ব্যবহৃত
   ============================================================ */

// Normal function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => {
  return a + b;
};

// একলাইনে হলে return এবং {} ছাড়া লেখা যায়
const addShort = (a, b) => a + b;

// একটা parameter হলে () ছাড়া লেখা যায়
const square = x => x * x;

console.log(add(2, 3), addArrow(2, 3), addShort(2, 3), square(4));


/* ============================================================
   5. Array Destructuring — useState hook বোঝার জন্য অত্যন্ত জরুরি
   ============================================================ */

const numbers = [10, 20, 30];
const [first, second, third] = numbers;
console.log(first, second, third);

// React এ useState ঠিক এভাবেই কাজ করে:
// const [count, setCount] = useState(0);


/* ============================================================
   6. Object Destructuring — Props নেওয়ার জন্য জরুরি
   ============================================================ */

const user = { username: "sakib", email: "sakib@mail.com", role: "admin" };
const { username, email } = user;
console.log(username, email);

// Rename করেও destructure করা যায়
const { username: uName } = user;
console.log(uName);

// React এ props destructure করা হয় এভাবে:
// function Profile({ username, email }) { ... }


/* ============================================================
   7. Spread Operator (...) — State update এর জন্য দরকার
   ============================================================ */

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // নতুন array বানানো, পুরনোটা change না করে
console.log(arr2);

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // নতুন object বানানো
console.log(obj2);

// React এ state immutably update করার সময় এভাবে ব্যবহার হয়:
// setUser({ ...user, name: "নতুন নাম" });


/* ============================================================
   8. Rest Operator (...) — Function argument আর destructuring এ
   ============================================================ */

function sumAll(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10

const { a, ...rest } = { a: 1, b: 2, c: 3 };
console.log(a, rest); // 1 { b: 2, c: 3 }


/* ============================================================
   9. Array Methods — List রেন্ডার করার জন্য (map খুবই গুরুত্বপূর্ণ)
   ============================================================ */

const products = [
  { id: 1, name: "Book", price: 200 },
  { id: 2, name: "Pen", price: 20 },
  { id: 3, name: "Bag", price: 500 },
];

// map() — প্রতিটা item দিয়ে নতুন array বানায় (JSX list render করতে ব্যবহার হয়)
const names = products.map(p => p.name);
console.log(names);

// filter() — শর্ত মিললে সেই item গুলো নিয়ে নতুন array
const expensive = products.filter(p => p.price > 100);
console.log(expensive);

// find() — একটামাত্র item খুঁজে বের করে
const found = products.find(p => p.id === 2);
console.log(found);

// reduce() — সব মিলিয়ে একটা মান বের করে
const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
console.log(totalPrice);

// forEach() — শুধু loop চালায়, নতুন array বানায় না
products.forEach(p => console.log(p.name));

// some() / every()
console.log(products.some(p => p.price > 400)); // true
console.log(products.every(p => p.price > 10)); // true


/* ============================================================
   10. Ternary Operator — JSX এ if/else এর বদলে ব্যবহার হয়
   ============================================================ */

const isLoggedIn = true;
const message = isLoggedIn ? "Welcome!" : "Please log in";
console.log(message);

// React JSX এ এভাবে দেখা যায়:
// {isLoggedIn ? <Dashboard /> : <Login />}


/* ============================================================
   11. Logical AND (&&) — Conditional Rendering এ ব্যবহার হয়
   ============================================================ */

const hasNotification = true;
// hasNotification && console.log("তোমার নতুন notification আছে");

// React এ:
// {hasNotification && <NotificationIcon />}


/* ============================================================
   12. Optional Chaining (?.) ও Nullish Coalescing (??)
   ============================================================ */

const userData = { profile: { city: "Dhaka" } };

console.log(userData?.profile?.city);     // "Dhaka"
console.log(userData?.address?.street);   // undefined, error দিবে না

const inputValue = null;
const finalValue = inputValue ?? "Default Value"; // null/undefined হলে default
console.log(finalValue);


/* ============================================================
   13. Default Parameters
   ============================================================ */

function greet(userName = "Guest") {
  return `Hello, ${userName}`;
}
console.log(greet());          // Hello, Guest
console.log(greet("Nadia"));   // Hello, Nadia


/* ============================================================
   14. ES6 Classes — Class Component বোঝার জন্য (আজকাল কম দরকার,
        তবে পুরনো React code পড়তে জানা ভালো)
   ============================================================ */

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} একটা শব্দ করলো`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} ঘেউ ঘেউ করলো`);
  }
}

const myDog = new Dog("Tommy");
myDog.speak();


/* ============================================================
   15. Closures — Custom Hook ও state logic বোঝার জন্য দরকার
   ============================================================ */

function counterMaker() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = counterMaker();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3


/* ============================================================
   16. Higher Order Functions — একটা function অন্য function কে
        argument হিসেবে নেয় বা return করে (React hooks এভাবেই কাজ করে)
   ============================================================ */

function withLogging(fn) {
  return function (...args) {
    console.log("Function call হচ্ছে...");
    return fn(...args);
  };
}

const loggedAdd = withLogging((a, b) => a + b);
console.log(loggedAdd(5, 5));


/* ============================================================
   17. Promise — Asynchronous কাজ বোঝার জন্য
   ============================================================ */

function fakeApiCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) resolve("ডাটা পাওয়া গেছে");
      else reject("এরর হয়েছে");
    }, 1000);
  });
}

fakeApiCall()
  .then(result => console.log(result))
  .catch(error => console.log(error));


/* ============================================================
   18. Async / Await — useEffect এ API call করার জন্য অত্যন্ত জরুরি
   ============================================================ */

async function loadData() {
  try {
    const result = await fakeApiCall();
    console.log("Async/Await দিয়ে:", result);
  } catch (error) {
    console.log("Error:", error);
  }
}

loadData();


/* ============================================================
   19. Fetch API — Backend থেকে ডাটা আনার জন্য (React এ খুবই common)
   ============================================================ */

async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Fetch error:", error);
  }
}

// getUsers(); // Browser এ uncomment করে চালানো যাবে


/* ============================================================
   20. ES6 Modules — import/export (React file structure এর ভিত্তি)
   ============================================================ */

// অন্য একটা ফাইলে (math.js) থাকলে:
// export const sum = (a, b) => a + b;
// export default function multiply(a, b) { return a * b; }

// এই ফাইলে import করতে হলে:
// import multiply, { sum } from "./math.js";


/* ============================================================
   21. this Keyword — Arrow function vs Normal function এ পার্থক্য
   ============================================================ */

const person = {
  name: "Sadia",
  normalFn: function () {
    console.log("Normal function this.name:", this.name); // Sadia
  },
  arrowFn: () => {
    console.log("Arrow function this.name:", this?.name); // undefined
  },
};

person.normalFn();
person.arrowFn();


/* ============================================================
   22. Event Handling (DOM) — React এর onClick, onChange এর ভিত্তি
   ============================================================ */

// Plain JS এ:
// button.addEventListener("click", () => console.log("Click হয়েছে"));

// React এ একইরকম, শুধু JSX আকারে:
// <button onClick={() => console.log("Click হয়েছে")}>Click me</button>


/* ============================================================
   23. JSON — API response ও LocalStorage এর জন্য
   ============================================================ */

const jsUser = { name: "Tanvir", age: 24 };

const jsonString = JSON.stringify(jsUser); // Object → JSON string
console.log(jsonString);

const parsedBack = JSON.parse(jsonString); // JSON string → Object
console.log(parsedBack);


/* ============================================================
   24. setTimeout / setInterval — useEffect cleanup বোঝার জন্য
   ============================================================ */

const timeoutId = setTimeout(() => {
  console.log("৩ সেকেন্ড পর এটা রান হলো");
}, 3000);

// clearTimeout(timeoutId); // Cleanup — React এর useEffect return এ এভাবেই লাগে


/* ============================================================
   এখন এই টপিকগুলো ভালোভাবে বুঝলে React শেখা অনেক সহজ হবে:
   - JSX আসলে JS function call (React.createElement) এর syntax sugar
   - useState → Array destructuring
   - props → Object destructuring
   - Conditional rendering → Ternary + &&
   - List rendering → map()
   - useEffect → async/await, closures, cleanup function
   - Component composition → Higher order functions এর মতোই ধারণা
   ============================================================ */