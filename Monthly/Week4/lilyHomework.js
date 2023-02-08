// Whenever George asks Lily to hang out, she's busy doing homework.
// George wants to help her finish it faster, but he's in over his head! Can you help George understand Lily's homework so she can hang out with him ?

// Consider an array of n distinct integers, arr = [a[0], a[1], ..., a[n-1]]. George can swap any two elements of the array any number of times.
// An array is beautiful if the sum of |arr[i] -arr[i-1]| among 0 < i < n is minimal.

// Given the array arr, determine and return the minimum number of swaps that should be performed in order to make the array beautiful.

// Example
// arr = [7, 15, 12, 3]

// One minimal array is [3, 7, 12, 15]. To get there, George performed the following swaps:

//     Swap      Result
//           [7, 15, 12, 3]
//     3 7   [3, 15, 12, 7]
//     7 15  [3, 7, 12, 15]

// It took 2 swaps to make the array beautiful.
// This is minimal among the choices of beautiful arrays possible.

// Function Description

// Complete the lilysHomework function in the editor below.

// lilysHomework has the following parameter(s):

// int arr[n]: an integer array

// Returns
// int: the minimum number of swaps required

// Input Format

// The first line contains a single integer, n, the number of elements in arr.
// The second line contains  space - separated integers, arr[i].

// Constraints
// 1 <= n <= 10 ^ 5
// 1 <= arr[i] <= 2x10 ^ 9

// Sample Input

// STDIN       Function
// -----       --------
// 4           arr[]size n = 4
// 2 5 3 1     arr = [2, 5, 3, 1]

// Sample Output
// 2

// Explanation

// Define arr`=[1,2,3,5] to be the beautiful reordering of arr.
// The sum of the absolute values of differences between its adjacent elements is minimal among all permutations and only two swaps(1 with 2 and then 2 with 5) were performed.

function lilysHomework(arr) {
  let x = [...arr].sort((a, b) => a - b);

  const getSwaps = (arr) => {
    let map = new Map();
    arr.forEach((v, ind) => map.set(v, ind));
    let swap = 0;
    for (let [key, value] of arr.entries()) {
      if (value !== x[key]) {
        swap++;
        const j = map.get(x[key]);
        map.set(value, j);
        arr[j] = value;
      }
    }
    return swap;
  };
  return Math.min(getSwaps([...arr]), getSwaps(arr.reverse()));
}

console.log(lilysHomework([2, 5, 3, 1])); //2
console.log(lilysHomework([3, 4, 2, 5, 1])); //2
