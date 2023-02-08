// Watson likes to challenge Sherlock's math ability. He will provide a starting and ending value that describe a range of integers, inclusive of the endpoints. Sherlock must determine the number of square integers within that range.

// Note: A square integer is an integer which is the square of an integer, e.g. 1,4,9,16,25.

// Example
// a = 24;
// b = 49;

// There are three square integers in the range: 25, 36 and 49. Return 3.

// Function Description
// Complete the squares function in the editor below. It should return an integer representing the number of square integers in the inclusive range from a to b.
// squares has the following parameter(s):
// int a: the lower range boundary
// int b: the upper range boundary
// Returns
// int: the number of square integers in the range

// Input Format
// The first line contains q, the number of test cases.
// Each of the next q lines contains two space-separated integers, a and b, the starting and ending integers in the ranges.

// Constraints
// 1 <= q <= 100
// a <= a <= b <= 10 ^ 9

// Sample Input
// 2
// 3 9
// 17 24

// Sample Output
// 2
// 0

// Explanation
// Test Case #00: In range [3,9], 4 and 9 are the two square integers.
// Test Case #01: In range [17,24], there are no square integers.

function squares(a, b) {
  return Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a)) + 1;
}

function squares(a, b) {
  let count = 0;
  for (let i = 0; i <= Math.sqrt(b); i++) {
    if (i * i >= a) count++;
  }
  return count;
}

console.log(squares(3, 9)); // 2
console.log(squares(17, 24)); // 0
