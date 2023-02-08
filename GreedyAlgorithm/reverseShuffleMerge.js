// Given a string, A, we define some operations on the string as follows:

// a. reverse(A) denotes the string obtained by reversing string A. Example:
// reverse("abc") = "cba"

// b. shuffle(A) denotes any string that's a permutation of string A. Example:
// shuffle("god") ϵ ['god','gdo','ogd','odg','dgo','dog']

// c. merge(A1,A2) denotes any string that's obtained by interspersing the two strings A1 & A2, maintaining the order of characters in both. For example, A1 = "abc" & A2 = "def", one possible result of merge(A1, A2) could be "abcdef", another could be "abdecf", another could be "adbecf" and so on.

// Given a string s such that s ϵ merge(reverse(A), shuffle(A)) for some string A, find the lexicographically smallest A.

// For example, s = abab. We can split it into two strings of ab. The reverse is ba and we need to find a string to shuffle in to get abab. The middle two characters match our reverse string, leaving the a and b at the ends. Our shuffle string needs to be ab. Lexicographically ab < ba, so our answer is ab.

// Function Description

// Complete the reverseShuffleMerge function in the editor below. It must return the lexicographically smallest string fitting the criteria.

// reverseShuffleMerge has the following parameter(s):

// s: a string

// Input Format
// A single line containing the string s.

// Constraints
// s contains only lower-case English letters, ascii[a-z]
// 1 <= |s| <= 10000

// Output Format

// Find and return the string which is the lexicographically smallest valid A.

// Sample Input 0
// eggegg

// Sample Output 0
// egg

// Explanation 0
// Split "eggegg" into strings of like character counts: "egg", "egg"
// reverse("egg") = "gge"
// shuffle("egg") can be "egg"
// "eggegg" belongs to the merge of ("gge", "egg")
// The merge is: eggegg.
// 'egg' < 'gge'

// Sample Input 1
// abcdefgabcdefg

// Sample Output 1
// agfedcb

// Explanation 1

// Split the string into two strings with like characters: abcdefg and abcdefg.
// Reverse abcdefg = gfedcba
// Shuffle gfedcba can be bcdefga
// Merge to abcdefgabcdefg

// Sample Input 2
// aeiouuoiea

// Sample Output 2
// aeiou

// Explanation 2

// Split the string into groups of like characters: aeiou
// Reverse aeiou = uoiea
// These merge to aeiouuoiea

function reverseShuffleMerge(s) {
  let map = {};
  let req = {};
  s.split("").reverse().join("");
  for (let item of s.split("")) {
    map[item] = (map[item] || 0) + 1;
  }
  for (let char in map) {
    req[char] = map[char] / 2;
  }
  let result = [],
    i = 0;
  while (result.length < s.length / 2) {
    let min_char_pos = -1;
    while (true) {
      let char = s[i];
      if (req[char] > 0 && (min_char_pos < 0 || char < s[min_char_pos])) {
        min_char_pos = i;
      }
      map[char]--;
      if (map[char] < req[char]) {
        break;
      }
      i++;
    }
    for (let j = min_char_pos + 1; j < i + 1; j++) {
      map[s[j]]++;
    }
    req[s[min_char_pos]]--;
    result.push(s[min_char_pos]);
    i = min_char_pos + 1;
  }
  return result.join("");
}
console.log(reverseShuffleMerge("eggegg")); // egg
console.log(reverseShuffleMerge("abcdefgabcdefg")); // agfedcb
console.log(reverseShuffleMerge("aeiouuoiea")); // aeiou
