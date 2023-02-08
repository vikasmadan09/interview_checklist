// There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

// 1. The elements of the first array are all factors of the integer being considered
// 2. The integer being considered is a factor of all elements of the second array

// First - Multiple of array
// Second - Factor of array

// These numbers are referred to as being between the two arrays. Determine how many such numbers exist.
// Example
// a = [2, 6]
// b = [24,36]

// There are two numbers between the arrays: 6 and 12.
// 6%2 = 0, 6%6 = 0, 24%6 = 0 and 36%6 = 0 for the first value.
// 12%2 = 0, 12%6 = 0 and 24%12 = 0, 36%12 = 0 for the second value. Return 2.

// Sample Input
// 2 4
// 16 32 96

// Sample Output
// 3

// Explanation
// 2 and 4 divide evenly into 4, 8, 12 and 16.
// 4, 8 and 16 divide evenly into 16, 32, 96.
// 4, 8 and 16 are the only three numbers for which each element of a is a factor and each is a factor of all elements of b.

function betweenTwoSets(a, b) {
  let result = 0;
  let max = Math.max(...a);
  let min = Math.min(...b);
  for (let i = max; i <= min; i += max) {
    if (a.every((e) => i % e == 0) && b.every((e) => e % i == 0)) result++;
  }
  return result;
}
console.log(betweenTwoSets([2, 4], [16, 32, 96])); // 3
console.log(betweenTwoSets([2, 6], [24, 36])); // 2
console.log(betweenTwoSets([3, 4], [24, 48])); // 2
