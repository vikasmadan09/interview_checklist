// You can perform the following operations on the string, a:

// 1. Capitalize zero or more of a's lowercase letters.
// 2. Delete all of the remaining lowercase letters in a.
// Given two strings, a and b, determine if it's possible to make a equal to b as described. If so, print YES on a new line. Otherwise, print NO.

// For example, given a = "AbcDE" and b = "ABDE", in a we can convert b and delete c to match b. If a = "AbcDE" and b = "AFDE", matching is not possible because letters may only be capitalized or discarded, not changed.

// Function Description
// Complete the function abbreviation in the editor below. It must return either YES or NO.

// abbreviation has the following parameter(s):
// a: the string to modify
// b: the string to match

// Input Format
// The first line contains a single integer q, the number of queries.
// Each of the next q pairs of lines is as follows:
// - The first line of each query contains a single string, a.
// - The second line of each query contains a single string, b.

// Constraints
// 1 <= q <= 10
// 1 <=| a |,| b |<= 1000
// String a consists only of uppercase and lowercase English letters, ascii[A-Za-z].
// String b consists only of uppercase English letters, ascii[A-Z].

// Output Format
// For each query, print YES on a new line if it's possible to make string a equal to string b. Otherwise, print NO.

// Sample Input
// 1
// daBcd
// ABC

// Sample Output
// YES

// Explanation

// daBcd --> dABCd --> ABC

// We have a = daBcd and b = ABC. We perform the following operation:
// 1. Capitalize the letters a and c in a so that a = dABCd.
// 2. Delete all the remaining lowercase letters in a so that a = ABC.
// Because we were able to successfully convert a to b, we print YES on a new line.

function abbreviation(a, b) {
  let matrix = Array(a.length + 1).fill(0);
  for (let i = 0; i <= a.length; i++) {
    matrix[i] = Array(b.length + 1).fill(0);
  }
  matrix[0][0] = 1;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j <= b.length; j++) {
      if (matrix[i][j] === 0) continue;
      if (j < b.length && a[i].toUpperCase() === b[j]) {
        matrix[i + 1][j + 1] = 1;
      }
      if (a[i] !== a[i].toUpperCase()) {
        matrix[i + 1][j] = 1;
      }
    }
  }
  return matrix[a.length][b.length] ? "YES" : "NO";
}
console.log(abbreviation("daBcd", "ABC")); // YES
console.log(abbreviation("Pi", "P")); // YES
console.log(abbreviation("AfPZN", "APZNC")); // NO
console.log(abbreviation("LDJAN", "LJJM")); //NO
console.log(abbreviation("UMKFW", "UMKFW")); //YES
console.log(abbreviation("KXzQ", "K")); //NO
console.log(abbreviation("LIT", "LIT")); //YES
console.log(abbreviation("QYCH", "QYCH")); //YES
console.log(abbreviation("DFIQG", "DFIQG")); //YES
console.log(abbreviation("sYOCa", "YOCN")); //NO
console.log(abbreviation("JHMWY", "HUVPW")); //NO
console.log(abbreviation("AbCdE", "AFE")); //NO
console.log(abbreviation("beFgH", "EFG")); //NO
console.log(abbreviation("beFgH", "EFH")); //YES
