// Given a string of lowercase letters in the range ascii[a-z], determine the index of a character that can be removed to make the string a palindrome.
// There may be more than one solution, but any will do.If the word is already a palindrome or there is no solution, return -1. Otherwise, return the index of a character to remove.

// Example
// s = "bcbc"

// Either remove 'b' at index 0 or 'c' at index 3.

// Function Description
// Complete the palindromeIndex function in the editor below.
// palindromeIndex has the following parameter(s):
// string s: a string to analyze

// Returns
// int: the index of the character to remove or -1

// Input Format
// The first line contains an integer q, the number of queries.
// Each of the next q lines contains a query string s.

// Constraints
// 1 <= q <= 20
// 1 <= length of s <= 10 ^ 5 + 5
// All characters are in the range ascii[a-z].

// Sample Input

// STDIN   Function
// -----   --------
// 3       q = 3
// aaab    s = 'aaab' (first query)
// baa     s = 'baa'  (second query)
// aaa     s = 'aaa'  (third query)

// Sample Output
// 3
// 0
// -1

// Explanation

// Query 1: "aaab"
// Removing 'b' at index 3 results in a palindrome, so return 3.

// Query 2: "baa"
// Removing 'b' at index 0 results in a palindrome, so return 0.

// Query 3: "aaa"
// This string is already a palindrome, so return -1. Removing any one of the characters would result in a palindrome, but this test comes first.

// Note: The custom checker logic for this challenge is available here.

// Algorithm
// For example we test string: abcdedcxba
// Left cursor from start at index 0
// Right cursor from end at index 9
// We find a nearest breakpoint pair by moving cursor left forward and cursor right backward at the same time.
// First pair a === a, so it s good
// Second pair b === b, so it s good
// Third pair 'c' !== 'x', so it break here,
// Now we try to remove 'c' and test the substring "dedcx" -> Not good (We dont have to test from the beginning since we do know the passed pairs (aa, bb) are all good.)
// Now we try to remove 'x' and test the substring "cdedc" -> Good -> Return the index of 'x'

function palindromeIndex(s) {
  const breakpoints = findBreakpoints(s);
  if (breakpoints.length) {
    const [bl, br] = breakpoints;
    const bbl = findBreakpoints(s.slice(bl + 1, br + 1));
    if (!bbl.length) {
      return bl;
    }
    const bbr = findBreakpoints(s.slice(bl, br));
    if (!bbr.length) return br;
  }
  return -1;
}

function findBreakpoints(s) {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    let cl = s.charAt(l);
    let cr = s.charAt(r);
    if (cl !== cr) {
      return [l, r];
    }
    l++;
    r--;
  }
  return [];
}
console.log(palindromeIndex("aaba")); // 3
console.log(palindromeIndex("baa")); // 0
console.log(palindromeIndex("aaa")); // -1
