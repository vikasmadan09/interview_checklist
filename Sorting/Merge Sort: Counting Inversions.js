// In an array, arr, the elements at indices i and j (where i < j) form an inversion if arr[i]> arr[j].
// In other words, inverted elements arr[i] and arr[j] are considered to be "out of order".To correct an inversion, we can swap adjacent elements.

// Example
// arr = [2, 4, 1];
// To sort the array, we must perform the following two swaps to correct the inversions:
// arr = [2, 4, 1] -> swap(arr[1],arr[2]) => swap(arr[0],arr[1])
// The sort has two inversions: (4, 1) and (2, 1).
// Given an array arr, return the number of inversions to sort the array.

// Function Description

// Complete the function countInversions in the editor below.

// countInversions has the following parameter(s):
// int arr[n]: an array of integers to sort

// Returns
// int: the number of inversions

// Input Format

// The first line contains an integer, d, the number of datasets.

// Each of the next d pairs of lines is as follows:

// The first line contains an integer, n, the number of elements in arr.
// The second line contains n space-separated integers, arr[i].

// Constraints
// 1 <= d <= 15
// 1 <= n <= 10 ^ 5
// 1 <= arr[i] <= 10 ^ 7

// Sample Input

// STDIN       Function
// -----       --------
// 2           d = 2
// 5           arr[] size n = 5 for the first dataset
// 1 1 1 2 2   arr = [1, 1, 1, 2, 2]
// 5           arr[] size n = 5 for the second dataset
// 2 1 3 1 2   arr = [2, 1, 3, 1, 2]

// Sample Output
// 0
// 4

// Explanation

// We sort the following d = 2 datasets:

// 1. arr = [1,1,1,2,2] is already sorted, so there are no inversions for us to correct.
// 2. arr = [2,1,3,1,2] --1 swap-->  [1,2,3,1,2] --2swap--> [1,1,2,2,3] --1 swap--> [1,1,2,2,3] We performed a total of 1 + 2 + 1 = 4 swaps to correct inversions.

function countInversions(arr) {
  let count = 0;
  mergeSort(arr);

  function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }

  function merge(arr1, arr2) {
    let results = [];
    let i = 0,
      j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] > arr2[j]) {
        count++; // related to problem statement
        count += arr1.length - (i + 1); // related to problem statement

        results.push(arr2[j]);
        j++;
      } else {
        results.push(arr1[i]);
        i++;
      }
    }
    while (i < arr1.length) {
      results.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      results.push(arr2[j]);
      j++;
    }
    return results;
  }
  return count;
}
console.log(countInversions([1, 1, 1, 2, 2])); // 0
console.log(countInversions([2, 1, 3, 1, 2])); // 4
console.log(countInversions([1, 5, 3, 7])); // 1
console.log(countInversions([7, 5, 3, 1])); // 6
console.log(countInversions([1, 3, 5, 7])); // 0
console.log(countInversions([3, 2, 1])); // 3
