// A left rotation operation on an array shifts each of the array's elements 1 unit to the left. For example, if 2 left rotations are performed on array [1, 2, 3, 4, 5], then the array would become [3, 4, 5, 1, 2]. Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.

// Given an array a of n integers and a number, d, perform d left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

// Function Description

// Complete the function rotLeft in the editor below.
// rotLeft has the following parameter(s):
// int a[n]: the array to rotate
// int d: the number of rotations

// Returns
// int a'[n]: the rotated array

// Input Format
// The first line contains two space-separated integers n and d, the size of a and the number of left rotations.
// The second line contains n space-separated integers, each an a[i].

// Constraints
// 1 <= n <= 10^5
// 1 <= d <= n
// 1 <= a[i] <= 10^6

// Sample Input
// 5 4
// 1 2 3 4 5

// Sample Output
// 5 1 2 3 4

// Explanation

// When we perform d = 4 left rotations, the array undergoes the following sequence of changes:
// [1, 2, 3, 4, 5] -> [2, 3, 4, 5, 1] -> [3, 4, 5, 1, 2] -> [4, 5, 1, 2, 3] -> [5, 1, 2, 3, 4]

function rotate(a, d) {
  let arrayRotated = a;
  for (let i = 0; i < d; i++) {
    arrayRotated.push(a[i]);
  }
  return arrayRotated.splice(0, d);
}
console.log(rotate([1, 2, 3, 4, 5], 4)); // 5 1 2 3 4
console.log(
  rotate(
    [
      41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86,
      51,
    ],
    10
  )
); // 77 97 58 1 86 58 26 10 86 51 41 73 89 7 10 1 59 58 84 77
console.log(
  rotate([33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97], 13)
); // 87 97 33 47 70 37 8 53 13 93 71 72 51 100 60
