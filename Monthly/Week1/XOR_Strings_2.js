// Given two strings consisting of digits 0 and 1 only, find the XOR of the two strings.
// Sample Input
// 10101
// 00101

// Sample Output
// 10000

// Explanation
// The XOR of the two strings 10101 and 00101 is 1⊕0, 0⊕0,1⊕1, 0⊕0, 1⊕1 = 10000.

function strings_xor(s, t) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == t[i]) res += "0";
    else res += "1";
  }
  return res;
}

console.log(strings_xor("10101", "00101"));
