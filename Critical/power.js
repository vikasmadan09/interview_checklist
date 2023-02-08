// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent.

// power(2,0) // 1
// power(2, 2); // 4
// power(2, 4); //16

function power(base, expo) {
  if (expo == 0) return 1;
  return base * power(base, expo - 1);
}

function areThereDuplicates(...arr) {
  let lookUp = {};
  for (let val of arr) {
    if (lookUp[val]) return true;
    lookUp[val] = (lookUp[val] || 0) + 1;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  let lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

validAnagram("anagram", "nagaram");

function timeConversion(s) {
  // Write your code here
  let hour = s.slice(0, 2);
  let isAM = s.slice(-2) === "AM";
  if (isAM) {
    if (hour === "12") {
      hour = "00";
    }
    return (hour += s.slice(2, -2));
  } else {
    if (hour !== "12") {
      hour = Number(hour) + 12;
    }
    return (hour += s.slice(2, -2));
  }
}
console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("12:05:45AM"));

// Binary Search Tree - Find
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = new Node(value);
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = new Node(value);
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(value) {}
}

// Closures
var a = 10;
function foo() {
  console.log(a);
}

function bar() {
  var a = 20;
  foo();
}

bar(); // 10

// Closure -fix
var a = 10;

function bar() {
  var a = 20;

  function foo() {
    console.log(a);
  }

  foo();
}

bar(); // 20

// Closure example
function outerFunc() {
  let a = 10;

  function innerFunc() {
    console.log(a);
  }
  return innerFunc;
}

let innerFunc = outerFunc();
innerFunc();

// IIFE
(function (a) {
  return (function (b) {
    console.log(a);
  })(1);
})(0); // 0

// Above IIFE can be converted like below
function foo(a) {
  function bar(b) {
    console.log(a);
  }
  return bar(1);
}

foo(0);

// Invoking Multiple Closures
function createCounter() {
  let i = 0;
  return function () {
    i++;
    return i;
  };
}

let increase1 = createCounter();
let increase2 = createCounter();

console.log(increase1()); // 1
console.log(increase1()); // 2

console.log(increase2()); // 1
console.log(increase2()); // 2

function createCounter() {
  let count = 0;
  function increase() {
    count++;
  }
  let message = `Count is ${count}`;

  function log() {
    console.log(message);
  }

  return [increase, log];
}
const [increase, log] = createCounter();
increase();
increase();
increase();
log(); // Count is 0

// Fix above issue
// move message var inside log function

// function createCounter() {
//   let count = 0;
//   function increase() {
//     count++;
//   }

//   function log() {
//     let message = `Count is ${count}`;
//     console.log(message);
//   }

//   return [increase, log];
// }
// const [increase, log] = createCounter();
// increase();
// increase();
// increase();
// log();

for (var i = 0; i < 5; ++i) {
  (function (cacheI) {
    setTimeout(function () {
      console.log(cacheI);
    }, 0);
  })(i);
}
// function scope by JavaScript Immediately-invoked Function Expressions. And the value of i is saved through the closure.

console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
});

console.log("end");
// start 1 end
// When we call new Promise(callback), the callback function will be executed immediately.

// SetTimeout vs Promise
console.log("start");

setTimeout(() => {
  console.log("setTimeout");
});

Promise.resolve().then(() => {
  console.log("resolve");
});

console.log("end");
// output
// start end resolve setTimeout

// Although setTimeout and Promise.resolve() are completed at the same time, and even the code of setTimeout is still ahead, but because of its low priority, the callback function belonging to it is executed later.

// In JavaScript EventLoop, there is also the concept of priority.

// Tasks with higher priority are called microtasks. Includes: Promise, ObjectObserver, MutationObserver, process.nextTick, async/await .
// Tasks with lower priority are called macrotasks.Includes: setTimeout, setInterval and XHR.

const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("timerStart");
    resolve("success");
    console.log("timerEnd");
  }, 0);
  console.log(2);
});
promise.then((res) => {
  console.log(res);
});
console.log(4);
// output
// 1 2 4 timerStart timerEnd sucess

const timer1 = setTimeout(() => {
  console.log("timer1");

  const promise1 = Promise.resolve().then(() => {
    console.log("promise1");
  });
}, 0);

const timer2 = setTimeout(() => {
  console.log("timer2");
}, 0);
// timer1 promise1 timer2

console.log("start");

const promise1 = Promise.resolve().then(() => {
  console.log("promise1");
  const timer2 = setTimeout(() => {
    console.log("timer2");
  }, 0);
});

const timer1 = setTimeout(() => {
  console.log("timer1");
  const promise2 = Promise.resolve().then(() => {
    console.log("promise2");
  });
}, 0);

console.log("end");
// output
// 1. Execute all sync code:
// start
// end
// 2. Execute all microtasks
// promise1
// 3. Execute the first macro task
// timer1
// Note: In this step, the macrotask adds a new microtask to the task queue.

// 4. Execute all newly added microtasks
// promise2
// 5. Execute the next macro task
// timer2
