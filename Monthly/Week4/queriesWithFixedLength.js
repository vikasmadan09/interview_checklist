// Consider an n-integer sequence, A = {a0,a1,...an-1}. We perform a query on A by using an integer, d, to calculate the result of the following expression:
//     min(max aj)
// 0<=i<=n-d i<=j<i+d
// In other words, if we let mi = max(ai,ai+1,ai+2,...,ai+d+1), then you need to calculate min(m0,m1,...,mn-d).

// Given arr and q queries, return a list of answers to each query.

// Example
// arr = [2, 3, 4, 5, 6]
// queries = [2, 3]

// The first query uses all of the subarrays of length 2: [2,3], [3,4], [4,5], [5,6] . The maxima of the subarrays are [3,4,5,6]. The minimum of these is 3.

// The second query uses all of the subarrays of length 3: [2,3,4], [3,4,5], [4,5,6]. The maxima of the subarrays are [4,5,6]. The minimum of these is 4.

// Return [3,4].

// Function Description

// Complete the solve function below.

// solve has the following parameter(s):

// int arr[n]: an array of integers
// int queries[q]: the lengths of subarrays to query

// Returns
// int[q]: the answers to each query

// Input Format

// The first line consists of two space-separated integers, n and q.
// The second line consists of n space-separated integers, the elements of arr.
// Each of the q subsequent lines contains a single integer denoting the value of d for that query.

// Constraints
// 1 <= n <= 10 ^ 5
// 0 <= arr[i] < 10 ^ 6
// 1 <= q <= 100
// 1 <= d <= n

// Sample Input

// 5 5
// 1 2 3 4 5
// 1
// 2
// 3
// 4
// 5

// Sample Output
// 1
// 2
// 3
// 4
// 5

// Explanation

// Each prefix has the least maximum value among the consecutive subsequences of the same size.

function arrMax(arr, start, end) {
  let max = 0;
  while (start < end) {
    max = Math.max(max, arr[start++]);
  }
  return max;
}

function solve(arr, queries) {
  return queries.map((q) => {
    let max = arrMax(arr, 0, q);
    let min = max;
    let start = 0;
    for (let end = q + 1; end <= arr.length; end++) {
      if (arr[start++] === max) {
        max = arrMax(arr, start, end);
        if (max < min) min = max;
      }
    }
    return min;
  });
}

console.log(solve([33, 11, 44, 11, 55], [1, 2, 3, 4, 5])); // 11 33 44 44 55
console.log(solve([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])); // 1 2 3 4 5
