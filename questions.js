// 1) Hoisting?
// Ans) JavaScript hoisting ka matlab hota hai ke compiler variables aur functions ko execution se pehle le jata hai.
// lekin value assign nahi hoti, sirf declaration hoist hoti hai
//Hoisting mean program run hone se pehle he unko memory allocate karna.
// console.log(a); // undefined, kyunki a ki declaration hoist ho gayi hai, lekin value assign nahi hui
var a = 10;

var b;
// console.log(b); // undefined, kyunki b ki declaration hoist ho gayi hai, lekin value assign nahi hui
b = 10;

// 2) Closures?
// Ans) Closure ek function hota hai jo apne outer function ke variables ko access kar sakta hai, chahe outer function execute ho chuka ho.
// Closure ke through hum private variables create kar sakte hain aur data encapsulation achieve kar sakte hain.
// function outer() {
//   let name = "Musharib";

//   function inner() {
//     console.log(name);
//   }

//   return inner;
// }

// const myFunc = outer();
// myFunc();

function createCounter() {
  let count = 0;
  return {
    increament: function () {
      count++;
      return count;
    },
    decreament: function () {
      count--;
      return count;
    },
  };
}

const counter = createCounter();
// console.log(counter.increament());
// console.log(counter.decreament());

// 1.) Event loop test by predicting output below :
// console.log("1");
// console.log("2");
// setTimeout(() => {
//   console.log("This message appears after 2 seconds.");
// }, 0);
// Promise.resolve(console.log("4"));
// console.log("5");

const user = {
  name: "Musharib",
  greet: function () {
    return `Hello ${this.name}`;
  },
  arrowGreet: () => {
    return `Hello ${this.name}`; //yahan pe undefined melyga q k arrow func ka apna koi this nhi hota aur arrow function refer karta hai global object. global obkect mein koi name define he nahi kara islia undefined ayea
  },
};

// console.log(user.greet());
// console.log(user.arrowGreet());

const users = [
  { name: "bob", age: 21 },
  { name: "bobby", age: 15 },
  { name: "Alice", age: 18 },
  { name: "Justin", age: 10 },
  { name: "David", age: 20 },
];

// let age = users
//   .filter((u) => u.age >= 18)
//   .map((n) => n.name)
//   .forEach((na) => console.log(na)); //sirf array take console karenge toh array return hoga aur agr forEach main console karenge to each value ayegi
// console.log(age);

function createClousur() {
  let count = 0;
  return {
    inc: () => ++count,
    dec: () => --count,
  };
}

const c1 = createClousur();
const c2 = createClousur();

c1.inc();
c1.inc();
c2.dec();

// console.log(c1.inc());
// console.log(c2.dec());

// optional chaining => hamare runtime error ko reduce karta hai, islia niche code main details pe error ya code nhi phatega balke
// simple undefined show karega

const user1 = { profile: { name: "Optional Chaining" } };
// console.log(user1.profile?.name);
// console.log(user1.details?.name);

// Pure vs ImPure functions
// 1) Deterministic : for same input, it always return same output
// 2) No side effect : it does not change anything outside of its scope, eg. does not modify global varaible, don't touch DOM, don't use random value and deal with time
function Pure(num) {
  return num + 1;
}

// console.log(Pure(10));

// Impure, Impure main hum dekh sakte hain ke function jo hai global
// variable pe depend hai aur global variable ki value bi change ho rhi hai, aur random value ho sakti hai
// pure main expected output ya work pata hota hai jaise jo bi arg hoga us main increamnet karke return kardega impure main aesa nhi hota
const impureNum = 12;
function Impure() {
  return impureNum + 1;
}

// console.log(Impure());

// Q) What is curring?
// Ans) Ek large function ko hum small functions main tod ke kaam karain usse curring kehte hain
function curry(x) {
  return function (y) {
    // closure
    return function (z) {
      //closure
      return x + y + z;
    };
  };
}

const temp = curry(2)(3); //partially applied function, means jo
// func call kiya hai usko jo exoected arg hain woh nhi diye, kuch arg diye hai aur woh process karke ek new func
// return karta hai jo temp ke and store hai aur remaining arg humne temp ko diye phr
console.log(temp(4));
console.log(temp(10));

// Callback is a function that is passed as an argument to another function and is executed after some operation is completed.
//  It allows us to handle asynchronous operations and ensures that certain code runs only after a specific task is finished.

// Higer order function is a function that takes another function as an argument or returns a function as its result.
//  It allows us to create more abstract and reusable code by treating functions as first-class citizens in JavaScript.
