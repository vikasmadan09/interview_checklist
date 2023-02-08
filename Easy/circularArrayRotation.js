// John Watson knows of an operation called a right circular rotation on an array of integers.
// One rotation operation moves the last array element to the first position and shifts all remaining elements right one.
// To test Sherlock's abilities, Watson provides Sherlock with an array of integers.
// Sherlock is to perform the rotation operation a number of times then determine the value of the element at a given position.
// For each array, perform a number of right circular rotations and return the values of the elements at the given indices.

// Example
// a = [3, 4, 5]
// k = 2
// queries = [1,2]
// Here k is the number of rotations on a, and queries holds the list of indices to report. First we perform the two rotations:
// [3,4,5] => [5,3,4] => [4,5,3]
// Now return the values from the zero-based indices 1 and 2 as indicated in the queries array.
// a[1] = 5
// a[2] = 3

// Input Format

// The first line contains 3 space-separated integers, n, k, and q, the number of elements in the integer array, the rotation count and the number of queries.
// The second line contains n space-separated integers, where each integer i describes array element a[i] (where 0 <= i < n).
// Each of the q subsequent lines contains a single integer, queries[i], an index of an element in a to return.

// Sample Input 0
// 3 2 3
// 1 2 3
// 0
// 1
// 2

// Sample Output 0
// 2
// 3
// 1

// Explanation 0
// After the first rotation, the array is [3,1,2].
// After the second (and final) rotation, the array is [2,3,1].

// We will call this final state array b=[2,3,1]. For each query, we just have to get the value of b[queries[i]].

// queries[0] = 0, b[0] = 2.
// queries[1] = 1, b[1] = 3.
// queries[2] = 2, b[2] = 1.

function circularArrayRotation(arr, k, queries) {
  let rotated = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    rotated[(i + k) % arr.length] = arr[i];
  }
  let result = [];
  for (let j of queries) {
    result.push(rotated[j]);
  }
  return result;
}

console.log(circularArrayRotation([1, 2, 3], 2, [0, 1, 2]));
