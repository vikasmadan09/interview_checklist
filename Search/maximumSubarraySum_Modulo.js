// We define the following:
// A subarray of array a of length n is a contiguous segment from a[i] through a[j] where 0 <= i <= j < n.
// The sum of an array is the sum of its elements.

// Given an n element array of integers, a, and an integer, m, determine the maximum value of the sum of any of its subarrays modulo m.

// Example
a = [1, 2, 3];
m = 2;

// The following table lists all subarrays and their moduli:

// 		   sum	%2
// [1]		1	1
// [2]		2	0
// [3]		3	1
// [1,2]	3	1
// [2,3]	5	1
// [1,2,3]	6	0
// The maximum modulus is 1.

// Function Description
// Complete the maximumSum function in the editor below.
// maximumSum has the following parameter(s):
// long a[n]: the array to analyze
// long m: the modulo divisor

// Returns
// - long: the maximum (subarray sum modulo m)

// Input Format
// The first line contains an integer q, the number of queries to perform.
// The next q pairs of lines are as follows:
// The first line contains two space-separated integers n and (long)m, the length of a and the modulo divisor.
// The second line contains n space-separated long integers a[i].

// Constraints
// 1 <= n < 10 ^ 5
// 1 <= m <= 10 ^ 14
// 1 <= a[i] <= 10 ^ 18
// 2 <= the sum of  over all test cases <= 5 x 10 ^ 5

// Sample Input

// STDIN       Function
// -----       --------
// 1           q = 1
// 5 7         a[] size n = 5, m = 7
// 3 3 9 9 5

// Sample Output
// 6

// Explanation
// The subarrays of array a = [3, 3, 9, 9, 5] and their respective sums modulo m = 7 are ranked in order of length and sum in the following list:
// 1. [9] => 9 % 7 = 2 and [9] -> 9%7 = 2
//    [3] => 3 % 7 = 3 and [3] -> 3 % 7 = 3
//    [5] => 5 % 7 = 5

// 2. [9,5] => 14 % 7 = 0
//    [9,9] => 18 % 7 = 4
//    [3,9] => 12 % 7 = 5
//    [3,3] => 6 % 7 = 6

// 3. [3,9,9] => 21 % 7 = 0
//    [3,3,9] => 15 % 7 = 1
//    [9,95] => 23 % 7 = 2

// 4. [3,3,9,9] => 24 % 7 = 3
//    [3,9,9,5] => 26 % 7 = 5

// 5. [3,3,9,9,5] => 29 % 7 = 1

// The maximum value for subarray sum % 7 for any subarray is 6.

function maximumSum(data, modulo) {
  // Write your code here
  const prefix = [[-1, 0]];
  let maxSum = 0;

  for (let i = 0; i < data.length; i++) {
    prefix.push([i, (prefix[i][1] + data[i]) % modulo]);
    maxSum = Math.max(prefix[prefix.length - 1][1], maxSum);
  }

  prefix.sort((a, b) => a[1] - b[1]);

  const { length } = prefix;
  for (let i = 1; i < length; i++) {
    const [origIndex, curSum] = prefix[i];

    let j = i + 1;
    while (j < length && (prefix[j][0] >= origIndex || prefix[j][1] == curSum))
      j++;

    if (j < length) maxSum = Math.max(curSum - prefix[j][1] + modulo, maxSum);
  }

  return maxSum;
}

console.log(maximumSum([3, 3, 9, 9, 5], 7)); //6
console.log(maximumSum([1, 2, 3], 2)); //1
console.log(maximumSum([1, 5, 9], 5)); //4
