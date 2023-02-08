// Two words are anagrams of one another if their letters can be rearranged to form the other word.

// Given a string, split it into two contiguous substrings of equal length. Determine the minimum number of characters to change to make the two substrings into anagrams of one another.

// Example
// s = abccde

// Break s into two parts: 'abc' and 'cde'.
// Note that all letters have been used, the substrings are contiguous and their lengths are equal.
// Now you can change 'a' and 'b' in the first substring to 'd' and 'e' to have 'dec' and 'cde' which are anagrams. Two changes were necessary.

// Function Description
// Complete the anagram function in the editor below.
// anagram has the following parameter(s):
// string s: a string

// Returns
// int: the minimum number of characters to change or -1.

// Input Format

// The first line will contain an integer, q, the number of test cases.
// Each test case will contain a string s.

// Constraints
// 1 <= q <= 100
// 1 <= |s| <= 10 ^ 4
// s consists only of characters in the range ascii[a-z].

// Sample Input
// 6
// aaabbb
// ab
// abc
// mnop
// xyyx
// xaxbbbxx

// Sample Output
// 3
// 1
// -1
// 2
// 0
// 1

// Explanation

// Test Case #01: We split s into two strings S1='aaa' and S2='bbb'. We have to replace all three characters from the first string with 'b' to make the strings anagrams.

// Test Case #02: You have to replace 'a' with 'b', which will generate "bb".

// Test Case #03: It is not possible for two strings of unequal length to be anagrams of one another.

// Test Case #04: We have to replace both the characters of first string ("mn") to make it an anagram of the other one.

// Test Case #05: S1 and S2 are already anagrams of one another.

// Test Case #06: Here S1 = "xaxb" and S2 = "bbxx". You must replace 'a' from S1 with 'b' so that S1 = "xbxb".

function anagram(s) {
  // Write your code here
  // if the length is not divisible by 2, return -1
  if (s.length % 2 !== 0) return -1;
  // divide the string into two strA and strB
  let strA = s.slice(0, Math.floor(s.length / 2));
  let strB = s.slice(Math.floor(s.length / 2));

  // loop through strA to check for the occurence of same char in strB
  for (let char of strA) {
    // remove any match
    strB = strB.replace(char, "");
  }
  // the remain character(s) are to be replaced in strA
  // return the length of strB
  return strB.length;
}
console.log(anagram("aaabbb")); //3
console.log(anagram("ab")); //1
console.log(anagram("abc")); //-1
console.log(anagram("mnop")); //2
console.log(anagram("xyyx")); //0
console.log(anagram("xaxbbbxx")); //1
console.log(anagram("asdfjoieufoa")); //3
console.log(anagram("fdhlvosfpafhalll")); //5
console.log(anagram("mvdalvkiopaufl")); //5
