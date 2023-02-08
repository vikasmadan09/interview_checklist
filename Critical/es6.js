// https://medium.com/@bluetch/javascript-es6-es7-es8-es9-es10-es11-and-es12-519d8be7d48c
// https://medium.com/@cannon_circuit/10-must-have-cheat-sheets-for-web-developers-810c2afa1206

// 1. class
class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  // This is a property on the prototype chain
  toString() {
    console.log("name:" + this.name + ", color:" + this.color);
  }
}

var animal = new Animal("myDog", "yellow"); // instantiate
animal.toString(); // name: myDog, color: yellow

console.log(animal.hasOwnProperty("name")); //true
console.log(animal.hasOwnProperty("toString")); // false
console.log(animal.__proto__.hasOwnProperty("toString")); // true

class Cat extends Animal {
  constructor(action) {
    // The subclass must call the super function in the constructor, otherwise an error will be reported when new comes out
    // If the constructor was not written originally, the default constructor with super will be automatically generated
    super("cat", "white");
    this.action = action;
  }
  toString() {
    console.log(super.toString());
  }
}

var cat = new Cat("catch");
cat.toString();

console.log(cat instanceof Cat); // true
console.log(cat instanceof Animal); // true

// 2. Module

// Each module has its own namespace to avoid conflicts, use import and export to import and export.

// Basically treats a .js file as a module.

// 3. Arrow function

// () => {…}, short for function. Most importantly, he can ensure that this always points to himself
// No more writing var self = this, var that = this, etc!

// const add = (a, b) => { return a + b};

// const res = add(1, 2); // 3

// // If the syntax is simple, `{}` and `return` can be omitted. It will look neater
// const minus = (a, b) => a - b;
// const res1 = minus(3, 1); // 2

// 4. Function parameter default value

// If the function does not pass parameters, the default value is used. more condensed writing.

// function example(height = 50, width = 40) {
//      const newH = height * 10;
//      const newW = width * 10;
//      return newH + newW;
// }

// example(); // 900 (50*10 + 40*10)

// 5. Template literal

// The composition of long strings, in the past, was concatenated through +.

// Its readability is pretty bad. With template strings, it’s much easier to read.

// const firstName = 'Ken';
// const lastName = 'Huang';
// // not use template literal
// const name = 'Hello, My name is' + firstName + ', ' + lastName;
// // use template literal
// const nameWithLiteralString = `Hello, My name is ${firstName}, ${lastName}`;

// 6. Destructuring assignment

// Allow JavaScript to easily get content from arrays and objects.

const arr = [1, 2, 3, 4, 5];
const [one, two, three] = arr;
console.log(one); // 1
console.log(two); // 2
console.log(three); // 3

// To skip certain values
const [first, , , , last] = arr;
console.log(first); // 1
console.log(last); // 5

// Objects can also be destructurized and assigned
const student = {
  name: "Ken Huang",
  age: 38,
  city: "Taipei",
};
const { name, age, city } = student;
console.log(name); // "Ken Huang"
console.log(age); // "38"
console.log(city); // "Taipei"

// 7. Spread operator

// That is…, Array can be expanded, if it is an Object, it will be expanded according to key-value.

const stuendts = ["Angel", "Ryan"];
const people = ["Sara", ...stuendts, "Kelly", "Eason"];
conslog.log(people); // ["Sara", "Angel", "Ryan", "Kelly", "Eason"]

// 8. Object property shorthand

// The value can be omitted if the field names that make up the object are the same as the variables in the preceding paragraphs. looks more streamlined.

// const name = 'Angel', age = 18, city = 'ChangHwa';

// Before ES6, we must write like this
const customer = {
  name: name,
  age: age,
  city: city,
}; // // {name: 'Angel', age: 18, city: 'ChangHwa'}

// After ES6, we can do it
const newCustomer = {
  name,
  age,
  city,
}; // {name: '小明Angel, age: 18, city: 'ChangHwa'}

// 9. Promise

// The promise is a solution to asynchronous (non-synchronous) writing, which is more elegant than the original callback writing.

// In the early days, it was a suite of the open-source community, and later it was incorporated into the language standard.

// Early callback hell…
// And ES8 (ES2017) releases a more perfect async, await, which directly makes asynchronous writing like synchronization.

// The disadvantage is that when thoughts fall on complex business logic, await is sometimes missed, and errors are found at runtime.

// 10. let, const to replace var

// let: general variable, can be overridden

// const: Once declared, its contents cannot be modified. Because arrays and objects are indicators, their contents can be increased or decreased. but not to change its indicators

// In the early days, the var scope of js was global.

// That is, the variable is declared after you use it. When it is executed, it will be automatically mentioned to the top level, and it will be assigned later.
// more prone to contamination.

// console.log(a); // undefined
// var a = 10;
// using let or const

// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// let a = 10;
