// A string is said to be a child of a another string if it can be formed by deleting 0 or more characters from the other string. Letters cannot be rearranged.
// Given two strings of equal length, what's the longest string that can be constructed such that it is a child of both?

// Example
// s1 = "ABCD";
// s2 = "ABDC";

// These strings have two children with maximum length 3, ABC and ABD. They can be formed by eliminating either the D or C from both strings. Return 3.

// Function Description

// Complete the commonChild function in the editor below.

// commonChild has the following parameter(s):

// string s1: a string
// string s2: another string

// Returns
// int: the length of the longest string which is a common child of the input strings

// Input Format

// There are two lines, each with a string, s1 and s2.

// Constraints

// 1 <= |s1|, |s2| <= 5000 where |s| means "the length of s"
// All characters are upper case in the range ascii[A-Z].

// Sample Input
// HARRY
// SALLY

// Sample Output
//  2

// Explanation

// The longest string that can be formed by deleting zero or more characters from HARRY and SALLY is AY, whose length is 2.

// Sample Input 1
// AA
// BB

// Sample Output 1
// 0

// Explanation 1

// AA and BB have no characters in common and hence the output is 0.

// Sample Input 2
// SHINCHAN
// NOHARAAA

// Sample Output 2
// 3

// Explanation 2

// The longest string that can be formed between SHINCHAN and NOHARAAA while maintaining the order is NHA.

// Sample Input 3
// ABCDEF
// FBDAMN

// Sample Output 3
// 2

// Explanation 3
// BD is the longest child of the given strings.

/*
 * Complete the 'commonChild' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function commonChild(s1, s2) {
  // Write your code here
  let matrix = [];
  for (let i = 0; i < s2.length + 1; i++) {
    matrix.push(Array(s1.length + 1).fill(0));
  }
  console.log(matrix);
  for (let i = 1; i < s1.length + 1; i++) {
    for (let j = 1; j < s2.length + 1; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
      } else {
        matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
      }
    }
  }
  return matrix[s1.length][s2.length];
}
console.log(commonChild("ABCD", "ABDC")); // 3
console.log(commonChild("HARRY", "SALLY")); // 2
console.log(commonChild("AA", "BB")); // 0
console.log(commonChild("SHINCHAN", "NOHARAAA")); // 3
console.log(commonChild("ABCDEF", "FBDAMN")); // 3
