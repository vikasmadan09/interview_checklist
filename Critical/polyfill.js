Array.prototype.myMap = function (callback) {
  var arr = [];
  for (let i = 0; i < this.length; i++) {
    /* call the callback function for every value of this array and       push the returned value into our resulting array
     */
    arr.push(callback.call(this, this[i], i, arr));
  }
  return arr;
};

console.log([1, 2, 3, 4].myMap((ele) => ele * 2));

Array.prototype.myFilter = function (callback) {
  var arr = [];
  // return element for newArray, if true
  for (let i = 0; i < this.length; i++) {
    if (callback.call(this, this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

console.log([1, 2, 3, 4, 5, 6].myFilter((ele) => ele % 2 === 0));

Array.prototype.myReduce = function (callback, initialValue) {
  var accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callback.call(undefined, accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
};

console.log([1, 2, 3, 4, 5].myReduce((acc, curr) => acc + curr));

// Bind method
let nameObj = {
  firstname: "Vikas",
  lastname: "Madan",
};

function printName(hometown, state) {
  console.log(
    this.firstname + " " + this.lastname,
    " is from",
    hometown,
    state
  );
}

let printMyName = printName.bind(nameObj, "bangalore");
printMyName("karnataka");

Function.prototype.mybind = function (...args) {
  let obj = this;
  let params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.mybind(nameObj, "bangalore");
printMyName2("karnataka");

// Prototypal Inheritance
let user = {
  first: "Vikas",
  last: "Madan",

  setFullName(name) {
    [this.first, this.last] = name.split(" ");
  },

  getFullName() {
    console.log(`${this.first} ${this.last}`);
  },
};

let admin = {
  // __proto__: User,
  isAdmin: true,
};
Object.setPrototypeOf(admin, user);
admin.setFullName("John Deer");
console.log(admin.getFullName());

// for in loop
let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

// Object.keys only returns own keys
// alert(Object.keys(rabbit)); // jumps

// for..in loops over both own and inherited keys
// for (let prop in rabbit) alert(prop); // jumps, then eats

// Question
let animal2 = {
  jumps: null,
};
let rabbit2 = {
  __proto__: animal2,
  jumps: true,
};

// alert(rabbit2.jumps); // ? (1) // true

delete rabbit2.jumps;

// alert(rabbit2.jumps); // ? (2) // null

delete animal2.jumps;

// alert(rabbit2.jumps); // ? (3) // undefined, there’s no such property any more.

// https://javascript.info/prototype-inheritance#tasks
// Every object with its methods and properties contains an internal and hidden property known as [[Prototype]].
// The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects.
// It is a method by which an object can inherit the properties and methods of another object.
// Traditionally, in order to get and set the[[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf.
// Nowadays, in modern language, it is being set using __proto__.

Array.prototype.myFlat = function (depth) {
  if (depth === undefined) {
    depth = 1;
  }
  const flatten = function (arr, depth) {
    if (depth < 1) {
      return arr.slice();
    }
    // otherwise concat to the parent
    return arr.reduce(
      (acc, curr) =>
        acc.concat(Array.isArray(curr) ? flatten(curr, depth - 1) : curr),
      []
    );
  };
  return flatten(this, depth);
};

console.log([1, 2, 3, [4, 5, 6, [7, 8, 9]]].myFlat(Infinity));

// https://levelup.gitconnected.com/typescript-must-know-fundamentals-for-your-next-tech-interview-or-project-255ae70df0a3
