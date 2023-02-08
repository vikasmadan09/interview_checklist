// A string is said to be a special string if either of two conditions is met:

// All of the characters are the same, e.g. aaa.
// All characters except the middle one are the same, e.g. aadaa.

// A special substring is any substring of a string which meets one of those criteria. Given a string, determine how many special substrings can be formed from it.

// Example
// s = mnonopoo;
// s contains the following 12 special substrings: {m, n, o, n, o, p, o, o, non, ono, opo, oo}.

// Function Description
// Complete the substrCount function in the editor below.
// substrCount has the following parameter(s):
// int n: the length of string s
// string s: a string

// Returns
// - int: the number of special substrings

// Input Format
// The first line contains an integer, n, the length of s.
// The second line contains the string s.

// Constraints
// 1 <= n <= 10 ^ 6
// Each character of the string is a lowercase English letter, ascii[a-z].

// Sample Input 0
// 5
// asasd

// Sample Output 0
// 7

// Explanation 0

// The special palindromic substrings of s = asasd are {a, s, a, s, d, asa, sas}

// Sample Input 1
// 7
// abcbaba

// Sample Output 1
// 10

// Explanation 1
// The special palindromic substrings of s = abcbaba are {a, b, c, b, a, b, a, bcb, bab, aba}

// Sample Input 2
// 4
// aaaa

// Sample Output 2
// 10

// Explanation 2

// The special palindromic substrings of s = aaaa are {a, a, a, a, aa, aa, aa, aaa, aaa, aaaa}

function substrCount(n, s) {
  let res = s.length;
  for (let i = 0; i < s.length; i++) {
    let repeat = 0;
    while (i + 1 < s.length && s.charAt(i) === s.charAt(i + 1)) {
      repeat++;
      i++;
    }
    res += (repeat * (repeat + 1)) / 2;
    let pointer = 1;
    while (
      i - 1 >= 0 &&
      i + 1 < s.length &&
      s.charAt(i + pointer) === s.charAt(i - 1) &&
      s.charAt(i - pointer) === s.charAt(i - 1)
    ) {
      res++;
      pointer++;
    }
  }
  return res;
}
console.log(substrCount(5, "asasd")); // 7
console.log(substrCount(7, "abcbaba")); // 10
console.log(substrCount(4, "aaaa")); // 10
