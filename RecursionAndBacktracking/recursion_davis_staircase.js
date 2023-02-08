// Davis has a number of staircases in his house and he likes to climb each staircase 1, 2, or 3 steps at a time.
// Being a very precocious child, he wonders how many ways there are to reach the top of the staircase.

// Given the respective heights for each of the "s" staircases in his house, find and print the number of ways he can climb each staircase, module 10^10 + 7 on a new line.

// Example
// n = 5
// The staircase has 5 steps. Davis can step on the following sequences of steps:
// 1 1 1 1 1
// 1 1 1 2
// 1 1 2 1
// 1 2 1 1
// 2 1 1 1
// 1 2 2
// 2 2 1
// 2 1 2
// 1 1 3
// 1 3 1
// 3 1 1
// 2 3
// 3 2

// There are 14 possible ways he can take these  steps and 13 modulo 10000000007 = 13

// Function Description

// Complete the stepPerms function using recursion in the editor below.

// stepPerms has the following parameter(s):

// int n: the number of stairs in the staircase

// Returns
// int: the number of ways Davis can climb the staircase, modulo 10000000007

// Input Format

// The first line contains a single integer, "s", the number of staircases in his house.
// Each of the following "s" lines contains a single integer, "n", the height of staircase i.

// Constraints
// 1 <= s <= 5
// 1 <= n <= 36

// Subtasks
// 1 <=n <= 20 for 50% of the maximum score.

// Sample Input

// STDIN   Function
// -----   --------
// 3       s = 3 (number of staircases)
// 1       first staircase n = 1
// 3       second n = 3
// 7       third n = 7

// Sample Output
// 1
// 4
// 44

// Explanation

// Let's calculate the number of ways of climbing the first two of the Davis' s = 3 staircases:

// 1. The first staircase only has n = 1 step, so there is only one way for him to climb it (i.e., by jumping 1 step). Thus, we print 1 on a new line.
// 2. The second staircase has n = 3 steps and he can climb it in any of the four following ways:
// 1. 1 --> 1 --> 1
// 2. 1 --> 2
// 3. 2 --> 1
// 4. 3

// Thus, we print 4 on a new line.

// "0": 0, // 0 ways, starting base case

// "1": 1, // 1 way: 0 -> 1

// "2": 2, //2 ways: 0 -> 1 -> 2,
//         //        0 -> 2

// "3": 4  //4 ways: 0 -> 1 -> 2 -> 3 -> 4,
//         //        0 -> 2 -> 4,
//         //        0 -> 1 -> 3 -> 4,
//         //        0 -> 2 -> 3 -> 4

function stepPerms(n, memo = [0, 1, 2, 4]) {
  // Write your code here
  if (memo[n]) return memo[n];
  memo[n] =
    stepPerms(n - 1, memo) + stepPerms(n - 2, memo) + stepPerms(n - 3, memo);
  return memo[n];
}

console.log(stepPerms(1)); //1
console.log(stepPerms(3)); //4
console.log(stepPerms(7)); //44
console.log(stepPerms(5)); //13
console.log(stepPerms(8)); //81
console.log(stepPerms(15)); //5768
console.log(stepPerms(20)); //121415
console.log(stepPerms(27)); //8646064
