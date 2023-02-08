// Given two strings, determine if they share a common substring. A substring may be as small as one character.

// Example
// s1 = 'and'
// s2 = 'art'
// These share the common substring a.

// s1 = 'be'
// s2 = 'cat'
// These do not share a substring.

// Function Description
// Complete the function twoStrings in the editor below.
// twoStrings has the following parameter(s):

// string s1: a string
// string s2: another string

// Returns
// string: either YES or NO

// Input Format
// The first line contains a single integer p, the number of test cases.

// The following p pairs of lines are as follows:
// The first line contains string s1.
// The second line contains string s2.

// Constraints
// s1 and s2 consist of characters in the range ascii[a-z]
// 1 <= p <= 10
// 1 <= |s1|,|s2| <= 10^5

// Output Format

// For each pair of strings, return YES or NO.

// Sample Input
// 2
// hello
// world
// hi
// world

// Sample Output
// YES
// NO

// Explanation

// We have p = 2 pairs to check:

// s1 = "hello", s2 = "world". The substrings "o" and "l" are common to both strings.
// a = "hi", b = "world". s1 and s2 share no common substrings.

function twoStrings(s1, s2) {
  let str1 = s1.split("");
  let str2 = s2.split("");
  let lookup = {};
  for (let char of s1) {
    lookup[char] = (lookup[char] || 0) + 1;
  }
  for (let char of s2) {
    if (lookup[char]) return "YES";
  }
  return "NO";
}

console.log(twoStrings("hello", "world")); // YES
console.log(twoStrings("hi", "world")); //NO
console.log(twoStrings("wouldyoulikefries", "abcabcabcabcabcabc")); //NO
console.log(twoStrings("hackerrankcommunity", "cdecdecdecde")); //YES
console.log(twoStrings("jackandjill", "wentupthehill")); //YES
console.log(twoStrings("writetoyourparents", "fghmqzldbc")); //NO
console.log(twoStrings("aardvark", "apple")); //YES
console.log(twoStrings("beetroot", "sandals")); //NO
