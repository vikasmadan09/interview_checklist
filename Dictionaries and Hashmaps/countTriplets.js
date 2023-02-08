// You are given an array and you need to find number of tripets of indices (i, j, k) such that the elements at those indices are in geometric progression for a given common ratio r and i < j < k.

// Example
// arr = [1,4,16,64] r = 4
// There are [1,4,16] and [4,16,64] at indices (0,1,2) and (1,2,3). Return 2.

// Function Description
// Complete the countTriplets function in the editor below.
// countTriplets has the following parameter(s):
// int arr[n]: an array of integers
// int r: the common ratio

// Returns
// int: the number of triplets

// Input Format

// The first line contains two space-separated integers "n" and "r", the size of "arr" and the common ratio.
// The next line contains n space-seperated integers arr[i].

// Constraints
// 1 <= n <= 10 ^ 5
// 1 <= r <= 10 ^ 9
// 1 <= arr[i] <= 10 ^ 9

// Sample Input 0
// 4 2
// 1 2 2 4

// Sample Output 0
// 2

// Explanation 0
// There are  triplets in satisfying our criteria, whose indices are  and

// Sample Input 1
// 6 3
// 1 3 9 9 27 81

// Sample Output 1
// 6

// Explanation 1
// The triplets satisfying are index (0,1,2), (0,1,3), (1,2,4), (1,3,4), (2,4,5) and (3,4,5).

// Sample Input 2
// 5 5
// 1 5 5 25 125

// Sample Output 2
// 4

// Explanation 2

// The triplets satisfying are index (0,1,3), (0,2,3), (1,3,4), (2,3,4).

function countTriplets(arr, r) {
  // Use 2 dictionaries. One dictionary keeps a count of numbers encountered so far and the other keeps a count of pairs that have been made with any given number.
  // Every iteration, check if the current number could make a triplet out of existing pairs (this would be the smallest part of the triplet, so it’s a simple check if number * ratio is in the pairCounts dictionary).
  // After that, check if the current number could make a pair out of existing numbers, this is the same check as the previous step but using numCounts instead of pairCounts
  // Then just add to the count
  let numCounts = {},
    pairCounts = {},
    count = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    const [val, nextVal] = [arr[i], arr[i] * r];
    if (nextVal in pairCounts) {
      count += pairCounts[nextVal];
    }
    if (nextVal in numCounts) {
      pairCounts[val] = (pairCounts[val] || 0) + numCounts[nextVal];
    }
    numCounts[val] = (numCounts[val] || 0) + 1;
  }
  return count;
}

console.log(countTriplets([1, 2, 2, 4], 2)); // 2
console.log(countTriplets([1, 3, 9, 9, 27, 81], 3)); // 6
console.log(countTriplets([1, 5, 5, 25, 125], 5)); // 4
