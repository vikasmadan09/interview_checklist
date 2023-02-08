// A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.
// Given p integers, determine the primality of each integer and return "Prime" or "Not prime" on a new line.

// Note: If possible, try to come up with an O(sqrt(n)) primality algorithm, or see what sort of optimizations you can come up with for an O(n) algorithm. Be sure to check out the Editorial after submitting your code.

// Function Description
// Complete the primality function in the editor below.
// primality has the following parameter(s):
// int n: an integer to test for primality

// Returns
// string: Prime if n is prime, or "Not prime"

// Input Format
// The first line contains an integer, p, the number of integers to check for primality.
// Each of the p subsequent lines contains an integer, n, the number to test.

// Constraints
// 1 <= p <= 30
// 1 <= n <= 2x10^9

// Sample Input

// STDIN   Function
// -----   --------
// 3       p = 3 (number of values to follow)
// 12      n = 12 (first number to check)
// 5       n = 5
// 7       n = 7

// Sample Output
// Not prime
// Prime
// Prime

// Explanation
// We check the following p = 3 integers for primality:
// 1. n = 12 is divisible by numbers other than 1 and itself (i.e.: 2, 3, 4, 6).
// 2. n = 5 is only divisible 1 and itself.
// 3. n = 7 is only divisible 1 and itself.

function primality(n) {
  if (n <= 1) {
    return "Not Prime";
  } else if (n === 2 || n === 3) {
    return "Prime";
  } else if (n % 2 === 0 || n % 3 == 0) {
    return "Not prime";
  }
  for (let i = 5; i < Math.sqrt(n); i += 2) {
    if (n % i == 0) return "Not prime";
  }
  return "Prime";
}

console.log(primality(12)); // Not prime
console.log(primality(5)); // Prime
console.log(primality(7)); // Prime
console.log(primality(31)); // Prime
console.log(primality(33)); // Not prime
console.log(primality(2)); // Prime
console.log(primality(7)); // Prime
console.log(primality(1982)); // Not prime
console.log(primality(14582734)); // Not prime
console.log(primality(9891)); // Not prime
