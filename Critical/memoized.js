// https://www.geeksforgeeks.org/why-is-immutability-so-important-in-javascript/

// a simple function to add something
const add = (n) => n + 10;
add(9);
// a simple memoized function to add something
const memoizedAdd = () => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log("Fetching from cache");
      return cache[n];
    } else {
      console.log("Calculating result");
      let result = n + 10;
      cache[n] = result;
      return result;
    }
  };
};
// returned function from memoizedAdd
const newAdd = memoizedAdd();
console.log(newAdd(9)); // calculated
console.log(newAdd(9)); // cached

// a simple pure function to get a value adding 10
const addNum = (n) => n + 10;
console.log("Simple call", add(3));
// a simple memoize function that takes in a function
// and returns a memoized function
const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let n = args[0]; // just taking one argument here
    if (n in cache) {
      console.log("Fetching from cache");
      return cache[n];
    } else {
      console.log("Calculating result");
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  };
};
// creating a memoized function for the 'add' pure function
const memoizedAddNum = memoize(add);
console.log(memoizedAddNum(3)); // calculated
console.log(memoizedAddNum(3)); // cached
console.log(memoizedAddNum(4)); // calculated
console.log(memoizedAddNum(4)); // cached
