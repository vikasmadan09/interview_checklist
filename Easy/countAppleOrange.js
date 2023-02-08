// For example,
// Sam's house is between s=7 and t=10. The apple tree is located at a=4 and the orange at b=12. There are m=3 apples and n=3 oranges.
// Apples are thrown apples=[2,3,-4] units distance from a, and oranges=[3,-2,-4] units distance. Adding each apple distance to the position of the tree, they land at [4 + 2,4 + 3,4+ -4] = [6,7,0].
// Oranges land at [12 + 3,12 + -2,12 + -4]=[15,10,8]. One apple and two oranges land in the inclusive range 7 - 10 so we print
// 1
// 2

// Sample Input
// 7 11
// 5 15
// 3 2
// -2 2 1
// 5 -6

// Sample Output
// 1
// 1

// Explanation
// The first apple falls at position 5 - 2 = 3.
// The second apple falls at position 5 = 2 = 7.
// The third apple falls at position 5 + 1 = 6.
// The first orange falls at position 15 + 5 = 20.
// The second orange falls at position 15 - 6 = 9.
// Only one fruit (the second apple) falls within the region between 7 and 11, so we print 1 as our first line of output.
// Only the second orange falls within the region between 7 and 11, so we print 1 as our second line of output.

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCount = 0,
    orangeCount = 0;
  for (let apple of apples) {
    if (a + apple >= s && a + apple <= t) appleCount++;
  }
  for (let orange of oranges) {
    if (b + orange >= s && b + orange <= t) orangeCount++;
  }
  console.log(appleCount);
  console.log(orangeCount);
}
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
