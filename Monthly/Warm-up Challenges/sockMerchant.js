// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example
// n = 7
// arr = [1,2,1,2,1,3,2]
// There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

// Function Description
// Complete the sockMerchant function in the editor below.
// sockMerchant has the following parameter(s):
// int n: the number of socks in the pile
// int ar[n]: the colors of each sock

// Returns
// int: the number of pairs

// Input Format
// The first line contains an integer n, the number of socks represented in arr.
// The second line contains n space-separated integers, arr[i], the colors of the socks in the pile.

// Constraints
// 1 <= n <= 100
// 1 <= arr[i] <= 100 where 0 <= i < n

// Sample Input
// STDIN                       Function
// -----                       --------
// 9                           n = 9
// 10 20 20 10 10 30 50 10 20  arr = [10, 20, 20, 10, 10, 30, 50, 10, 20]

// Sample Output
// 3

function sockMerchant(n, arr) {
  let pair = {};
  let pairCount = 0;
  for (let sock of arr) {
    pair[sock] = (pair[sock] || 0) + 1;
  }
  for (let count in pair) {
    let isPair = Math.floor(pair[count] / 2);
    if (isPair > 0) {
      pairCount += isPair;
    }
  }
  return pairCount;
}
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]));
