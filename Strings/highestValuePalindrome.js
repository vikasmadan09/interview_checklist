// WEEK 4

// Palindromes are strings that read the same from the left or right, for example madam or 0110.

// You will be given a string representation of a number and a maximum number of changes you can make.
// Alter the string, one digit at a time, to create the string representation of the largest number possible given the limit to the number of changes.
// The length of the string may not be altered, so you must consider 0's left of all higher digits in your tests. For example 0110 is valid, 0011 is not.

// Given a string representing the starting number, and a maximum number of changes allowed, create the largest palindromic string of digits possible or the string '-1' if it is not possible to create a palindrome under the contstraints.

// Example
// s = "1231";
// k = 3;

// Make 3 replacements to get '9339'.
// s = "12321";
// k = 1;

// Make 1 replacement to get '12921'.

// Function Description

// Complete the highestValuePalindrome function in the editor below.

// highestValuePalindrome has the following parameter(s):
// string s: a string representation of an integer
// int n: the length of the integer string
// int k: the maximum number of changes allowed

// Returns
// string: a string representation of the highest value achievable or -1

// Input Format

// The first line contains two space-separated integers, n and k, the number of digits in the number and the maximum number of changes allowed.
// The second line contains an n-digit string of numbers.

// Constraints
// 0 < n <= 10 ^ 5
// 0 <= k <= 10 ^ 5
// Each character  in the number is an integer where 0 <= i <= 9.

// Output Format

// Sample Input 0
// STDIN   Function
// -----   --------
// 4 1     n = 4, k = 1
// 3943    s = '3943'

// Sample Output 0
// 3993

// Sample Input 1
// 6 3
// 092282

// Sample Output 1
// 992299

// Sample Input 2
// 4 1
// 0011

// Sample Output 2
// -1

// Explanation

// Sample 0
// There are two ways to make 3943 a palindrome by changing no more than k = 1 digits:
// 1. 3943 -> 3443
// 2. 3943 -> 3993
// 3993 > 3443

function highestValuePalindrome(s, n, k) {
  // Write your code here
  let arr = Array.from(s);
  for (let i = 0, j = n - 1; i < j; i++, j--) {
    if (arr[i] !== arr[j]) {
      if (k < 1) return "-1";
      let currMax = arr[i] > arr[j] ? arr[i] : arr[j];
      arr[arr[i] === currMax ? j : i] = currMax;
      k--;
    }
  }
  for (let i = 0, j = n - 1; i <= j && k > 0; i++, j--) {
    if (arr[i] !== "9") {
      if (s[i] !== s[j]) (arr[i] = "9"), (arr[j] = "9"), k--;
      else if (i === j) arr[i] = "9";
      else if (k > 1) (arr[i] = "9"), (arr[j] = "9"), (k -= 2);
    }
  }
  return arr.join("");
}

console.log(highestValuePalindrome("3943", 4, 1)); // 3993
console.log(highestValuePalindrome("092282", 6, 3)); // 992299
console.log(highestValuePalindrome("0011", 4, 1)); // -1
console.log(highestValuePalindrome("12321", 5, 1)); // 12921
