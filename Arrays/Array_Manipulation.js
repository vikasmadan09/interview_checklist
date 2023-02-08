// WEEK 4

// Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each the array element between two given indices, inclusive. Once all operations have been performed, return the maximum value in the array.

// Example
// n = 10;
// queries = [
//   [1, 5, 3],
//   [4, 8, 7],
//   [6, 9, 1],
// ];

// Queries are interpreted as follows:

//     a b k
//     1 5 3
//     4 8 7
//     6 9 1

// Add the values of k between the indices a and b inclusive:

// index->	 1 2 3  4  5 6 7 8 9 10
// 	        [0,0,0, 0, 0,0,0,0,0, 0]
// 	        [3,3,3, 3, 3,0,0,0,0, 0]
// 	        [3,3,3,10,10,7,7,7,0, 0]
// 	        [3,3,3,10,10,8,8,8,1, 0]

// The largest value is 10 after all operations are performed.

// Function Description
// Complete the function arrayManipulation in the editor below.
// arrayManipulation has the following parameters:
// int n - the number of elements in the array
// int queries[q][3] - a two dimensional array of queries where each queries[i] contains three integers, a, b, and k.

// Returns
// int - the maximum value in the resultant array

// Input Format
// The first line contains two space-separated integers n and m, the size of the array and the number of operations.
// Each of the next m lines contains three space-separated integers a, b and k, the left index, right index and summand.

// Constraints
// 3 <= n <= 10 ^ 7
// 1 <= m <= 2 * 10 ^ 5
// 1 <= a <= b <= n
// 0 <= k <= 10^9

// Sample Input

// 5 3
// 1 2 100
// 2 5 100
// 3 4 100

// Sample Output
// 200

// Explanation
// After the first update the list is 100 100 0 0 0.
// After the second update list is 100 200 100 100 100.
// After the third update list is 100 200 200 200 100.

// The maximum value is 200.

function arrayManipulation(n, queries) {
  let newArray = Array(n + 1).fill(0);
  for (let i = 0; i < queries.length; i++) {
    // we're changing the value at arr[a - 1] is because
    // the problem statement indicated that the arrays are 1 - indexed,
    // so the array indices given are going to be off by 1 since arrays in JavaScript are 0 - indexed.
    // The reason we change arr[b] and not arr[b - 1] is that the operations are meant
    // to be from a to b inclusive and so we want to add the end point as being after
    // the last index operated on.
    let a = queries[i][0];
    let b = queries[i][1];
    let k = queries[i][k];
    newArray[a - 1] += k;
    newArray[b] -= k;
  }
  let max = 0;
  let sum = 0;
  for (let i = 0; i < newArray.length; i++) {
    sum += newArray[i];
    max = Math.max(max, sum);
  }
  return max;
}

console.log(
  arrayManipulation(5, [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100],
  ])
); // 200
console.log(
  arrayManipulation(10, [
    [1, 5, 3],
    [4, 8, 7],
    [6, 9, 1],
  ])
); // 10

console.log(
  arrayManipulation(10, [
    [2, 6, 8],
    [3, 5, 7],
    [1, 8, 1],
    [5, 9, 15],
  ])
); // 31
