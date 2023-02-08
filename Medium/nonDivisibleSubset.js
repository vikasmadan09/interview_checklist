// Given a set of distinct integers, print the size of a maximal subset of s where the sum of any 2 numbers in S` is not evenly divisible by k.

// Example
// S = [19, 10, 12, 10, 24, 25, 22] k = 4;

// One of the arrays that can be created is S`[0]=[10,12,25]. Another is S`[1] = [19,22,24]. After testing all permutations, the maximum length solution array has 3 elements.

// Function Description
// Complete the nonDivisibleSubset function in the editor below.
// nonDivisibleSubset has the following parameter(s):
// int S[n]: an array of integers
// int k: the divisor

// Returns
// int: the length of the longest subset of S meeting the criteria

// Input Format

// The first line contains 2 space-separated integers, n and k, the number of values in S and the non factor.
// The second line contains n space-separated integers, each an S[i], the unique values of the set.

// Constraints
// (1 <= n < 10) ^ 5;
// 1 <= k <= 100;
// (1 <= S[i] <= 10) ^ 9;
// All of the given numbers are distinct.

// Sample Input
// STDIN    Function
// -----    --------
// 4 3      S[] size n = 4, k = 3
// 1 7 2 4  S = [1, 7, 2, 4]

// Sample Output
// 3

// Explanation
// The sums of all permutations of two elements from S = {1, 7, 2, 4} are:
// 1 + 7 = 8
// 1 + 2 = 3
// 1 + 4 = 5
// 7 + 2 = 9
// 7 + 4 = 11
// 2 + 4 = 6

// Only S` = {1, 7, 4} will not ever sum to a multiple of k = 3.

function nonDivisibleSubset(k, s) {
  // Creating an array with the size of the possible remainders:
  const counter = Array.from({ length: k }).fill(0);
  // Calculating the count of all the remainders:
  for (let i of s) {
    counter[i % k]++;
  }
  // One multiple of k can fit in the subset but not more, because if (a % k = 0) and (b % k = 0) then (a + b) % k = 0
  counter[0] > 1 ? (counter[0] = 1) : counter[0];

  // Since (a + b) % k = 0 then (a % k) + (b % k) = k; therefore if k is an even number, then we can't have two of counter[k/2] in a subset.
  k % 2 == 0 && counter[k / 2] > 1 ? (counter[k / 2] = 1) : counter[k / 2];

  /* Picking the greater numbers and removing the less ones of the remainder pairs that sum of them is equal to k. Because we want the biggest subset. 
  For instance if k = 5 and remainder pair is 1 and 4 then sum of them is equal to 5, therefore they can't be together in a subset, so we will choose the biggest amount of them. Only one or four.
  In the method below, all the remainder pairs that sum of them is equal to k are compared agianst each other. i + (k - i) = k */

  for (let i = 1; i < k; i++) {
    counter[i] > counter[k - i]
      ? (counter[k - i] = 0)
      : counter[i] < counter[k - i]
      ? (counter[i] = 0)
      : counter;
  }
  return counter.reduce((a, b) => a + b);
}

console.log(nonDivisibleSubset(4, [19, 10, 12, 10, 24, 25, 22]));
console.log(nonDivisibleSubset(3, [1, 7, 2, 4]));
console.log(
  nonDivisibleSubset(
    7,
    [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436]
  )
);
