// Given an integer n, find each x such that:
// 0 <= x <= n
// n + x = n ⨁ x

// where ⨁ denotes the bitwise XOR operator. Return the number of x's satisfying the criteria.

// Example
// n = 4

// There are four values that meet the criteria:
// 4 + 0 = 4 ⨁ 0 = 4
// 4 + 1 = 4 ⨁ 1 = 5
// 4 + 2 = 4 ⨁ 2 = 6
// 4 + 3 = 4 ⨁ 3 = 7

// Return 4.

// Function Description
// Complete the sumXor function in the editor below.
// sumXor has the following parameter(s):
// - int n: an integer

// Returns
// - int: the number of values found

// Input Format

// A single integer, n.

// Constraints
// 0 <= n <= 10 ^ 15

// Subtasks
// 0 <= n <= 100 for 60% of the maximum score.

// Output Format

// Sample Input 0
// 5

// Sample Output 0
// 2

// Explanation 0

// For n = 5, the x values 0 and 2 satisfy the conditions:
// 5 + 0 = 5, 5 ⨁ 0 = 5
// 5 + 2 = 7, 5 ⨁ 2 = 7

// Sample Input 1
// 10

// Sample Output 1
// 4

// Explanation 1

// For n = 10, the x values 0, 1, 4, and 5 satisfy the conditions:
// 10 + 0 = 10, 10 ⨁ 0 = 10
// 10 + 1 = 11, 10 ⨁ 1 = 11
// 10 + 4 = 14, 10 ⨁ 4 = 14
// 10 + 5 = 15, 10 ⨁ 5 = 15

function sumXor(n) {
  // Count the number of zeros in the binary string and
  // that number will be the power applied to a base of 2.
  let zeroCount = 0;
  let bitStr = n.toString(2);
  // loop through length of bitstr i.e if n = 10, binary of 10 is 1010
  for (let i = 0; i < bitStr.length; i++) {
    if (bitStr[i] === "0") {
      zeroCount++;
    }
  }
  if (n === 0) zeroCount++;
  return Math.pow(2, zeroCount);
}

console.log(sumXor(5)); // 2
console.log(sumXor(10)); // 4
