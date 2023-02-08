// You are given an array arr of n elements.
// A list of integers, queries is given as an input, find the maximum value of queries[j] ⨁ each arr[i] for all 0 <= i < n, where ⨁ represents xor of two elements.

// Note that there are multiple test cases in one input file.

// For example:
// arr = [3, 7, 15, 10]
// queries[j] = 3
// 3 ⨁ 3 = 0, max = 0
// 3 ⨁ 7 = 4, max = 4
// 3 ⨁ 15 = 12, max = 12
// 3 ⨁ 10 = 9, max = 12

// Function Description

// Complete the maxXor function in the editor below.
// It must return an array of integers, each representing the maximum xor value for each element queries[j] against all elements of arr.

// maxXor has the following paameter(s):
// arr: an array of integers
// queries: an array of integers to query

// Input Format

// The first line contains an integer n, the size of the array arr.
// The second line contains n space-separated integers, arr[i] from 0 <= i < n.
// The third line contain m, the size of the array queries.
// Each of the next m lines contains an integer queries[j] where 0 <= j < m.

// Constraints
// 1 <= navigator, m <= 10 ^ 5
// 0 <= arr[i], queries[j] <= 10 ^ 9

// Output Format

// The output should contain m lines with each line representing output for the corresponding input of the testcase.

// Sample Input 0
// 3
// 0 1 2
// 3
// 3
// 7
// 2

// Sample Output 0
// 3
// 7
// 3

// Explanation 0
// arr = [0, 1, 2]
// queries[0] = 3
// 3 ⨁ 0 = 3, max = 3
// 3 ⨁ 1 = 2, max = 3
// 3 ⨁ 2 = 1, max = 3

// queries[1] = 7
// 7 ⨁ 0 = 7, max = 7
// 7 ⨁ 1 = 6, max = 7
// 7 ⨁ 2 = 5, max = 7

// queries[2] = 2
// 2 ⨁ 0 = 2, max = 2
// 2 ⨁ 1 = 3, max = 3
// 2 ⨁ 2 = 0, max = 3

// Sample Input 1
// 5
// 5 1 7 4 3
// 2
// 2
// 0

// Sample Output 1
// 7
// 7

// Explanation 1
// arr = [5, 1, 7, 4, 3]
// queries[0] = 2
// 2 ⨁ 5 = 7, max = 7
// 2 ⨁ 1 = 3, max = 7
// 2 ⨁ 7 = 5, max = 7
// 2 ⨁ 4 = 6, max = 7
// 2 ⨁ 3 = 1, max = 7

// queries[1] = 0
// 0 ⨁ 5 = 5, max = 5
// 0 ⨁ 1 = 1, max = 5
// 0 ⨁ 7 = 7, max = 7
// 0 ⨁ 4 = 4, max = 7
// 0 ⨁ 3 = 3, max = 7

// Sample Input 2
// 4
// 1 3 5 7
// 2
// 17
// 6

// Sample Output 2
// 22
// 7

// Explanation 2
// arr = [1, 3, 5, 7]
// queries[0] = 17
// 17 ⨁ 1 = 16, max = 16
// 17 ⨁ 3 = 18, max = 18
// 17 ⨁ 5 = 20, max = 20
// 17 ⨁ 7 = 22, max = 22

// queries[1] = 6
// 6 ⨁ 1 = 7, max = 7
// 6 ⨁ 3 = 5, max = 7
// 6 ⨁ 5 = 3, max = 7
// 6 ⨁ 7 = 1, max = 7

function maxXor(arr, queries) {
  let max = 0;
  let res = [];
  for (let i = 0; i < queries.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let xor = queries[i] ^ arr[j];
      if (xor > max) {
        max = xor;
      }
    }
    res.push(max);
    max = 0;
  }
  return res;
}

console.log(maxXor([0, 1, 2], [3, 7, 2])); // 3 7 3
console.log(maxXor([5, 1, 7, 4, 3], [2, 0])); // 7 7
console.log(maxXor([1, 3, 5, 7], [17, 6])); // 22 7
