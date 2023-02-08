// Character Sets

// matching each character within
// [ng]inja
// [abc]000

// no longer match chars within
// [^pe2]000

// Ranges
// [a-z]
// [a-h]
// [l-n]
// [A-Z]
// [0-9]inja

// Repeating Characters
// [0-9]+ // unlimited times but atleast one
// [0-9]{11} // 11 times
// [a-z]{5} // 5 times
// [1-z]{5,8} // between 5 to 8
// [a-z]{5} // atleast 5 times, from 5 to infinity

// Metacharacters

// \d match any digit character (same as [0-9])
// \w match any word character (a-z,A-Z,0-9 and _'s)
// \s match a whitespace characters (spaces,tabs etc)
// \t match a tab character only

// /\d\s\w/
// \d{3}\s\w{5} // 123 ninja

// Special Characters
// '+' The one or more quantified
// '\' The escape character
// '[]' The character set
// '[^]' The negate symbol in character set
// '?' the zero or one quantifier(makes a preceding char optional)
// '.' Any character whatsoever(except the newline character)
// '*' the 0-or-more quantified (a bit like +)

// http(s)?
// car. // car alone wont match need to add one more 'cars'
// .+
// a[a-z]* // acac (matches) // aca12 (won't match)
// abc\* // abc* (match)
// abc\. // abc. (match)

// Starting and Ending Patterns

// ^[a-z]{5}$

// Alternate
// p|t
// (p|t)yre
// (pet|toy|crazy) rabbit
// (pet|toy|crazy)? rabbit
