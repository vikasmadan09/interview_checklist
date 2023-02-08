// Julius Caesar protected his confidential information by encrypting it using a cipher.
// Caesar's cipher shifts each letter by a number of letters.
// If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet.In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

// Original alphabet:      abcdefghijklmnopqrstuvwxyz
// Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc

// Example
// s = There's-a-starman-waiting-in-the-sky
// k = 3

// The alphabet is rotated by 3, matching the mapping above. The encrypted string is Wkhuh'v-d-vwdupdq-zdlwlqj-lq-wkh-vnb.

// Note: The cipher only encrypts letters; symbols, such as -, remain unencrypted.

// Function Description

// Complete the caesarCipher function in the editor below.
// caesarCipher has the following parameter(s):
// string s: cleartext
// int k: the alphabet rotation factor

// Returns
// string: the encrypted string

// Input Format
// The first line contains the integer, n, the length of the unencrypted string.
// The second line contains the unencrypted string, s.
// The third line contains k, the number of letters to rotate the alphabet by.

// Constraints
// 1 <= n <= 100
// 0 <= k <= 100

// s is a valid ASCII string without any spaces.

// Sample Input
// 11
// middle-Outz
// 2

// Sample Output
// okffng-Qwvb

// Explanation

// Original alphabet:      abcdefghijklmnopqrstuvwxyz
// Alphabet rotated +2:    cdefghijklmnopqrstuvwxyzab

// m -> o
// i -> k
// d -> f
// d -> f
// l -> n
// e -> g
// -    -
// O -> Q
// u -> w
// t -> v
// z -> b

/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */
function caesarCipher(s, k) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let upperAplh = alphabet.toUpperCase();
  let res = "";
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (alphabet.includes(char)) {
      res += alphabet[(alphabet.indexOf(char) + k) % 26];
    } else if (upperAplh.includes(char)) {
      res += upperAplh[(upperAplh.indexOf(char) + k) % 26];
    } else {
      res += s[i];
    }
  }
  return res;
}

console.log(caesarCipher("middle-Outz", 2)); // okffng-Qwvb
console.log(caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5)); // Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj
