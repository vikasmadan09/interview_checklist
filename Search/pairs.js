// WEEK 3

// Given an array of integers and a target value, determine the number of pairs of array elements that have a difference equal to the target value.

// Example
// k = 1;
// arr = [1, 2, 3, 4];

// There are three values that differ by k = 1: 2 - 1 = 1, 3 - 2 = 1, and 4 - 3 = 1. Return 3.

// Function Description
// Complete the pairs function below.
// pairs has the following parameter(s):
// int k: an integer, the target difference
// int arr[n]: an array of integers

// Returns
// int: the number of pairs that satisfy the criterion

// Input Format
// The first line contains two space-separated integers n and k, the size of arr and the target value.
// The second line contains n space-separated integers of the array arr.

// Constraints
// 2 <= n <= 10 ^ 5
// 0 < k < 10 ^ 9
// 0 < arr[i] < 2 ^ 31 - 1
// each integer arr[i] will be unique

// Sample Input

// STDIN       Function
// -----       --------
// 5 2         arr[] size n = 5, k =2
// 1 5 3 4 2   arr = [1, 5, 3, 4, 2]

// Sample Output
// 3

// Explanation

// There are 3 pairs of integers in the set with a difference of 2: [5,3], [4,2] and [3,1].

function pairs(k, arr) {
  arr.sort((a, b) => a - b);
  let i = 0,
    j = 1,
    count = 0;
  while (j < arr.length) {
    const diff = arr[j] - arr[i];
    if (diff == k) {
      count++;
      i++;
    } else if (diff > k) {
      i++;
    } else {
      j++;
    }
  }
  return count;
}

console.log(pairs(2, [1, 5, 3, 4, 2])); // 3
console.log(
  pairs(
    1,
    [
      363374326, 364147530, 61825163, 1073065718, 1281246024, 1399469912,
      428047635, 491595254, 879792181, 1069262793,
    ]
  )
); // 0

console.log(pairs(2, [1, 3, 5, 8, 6, 4, 2])); // 5
