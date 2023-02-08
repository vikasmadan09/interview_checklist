// There are a number of plants in a garden. Each of the plants has been treated with some amount of pesticide.
// After each day, if any plant has more pesticide than the plant on its left, being weaker than the left one, it dies.

// You are given the initial values of the pesticide in each of the plants.
// Determine the number of days after which no plant dies, i.e.the time after which there is no plant with more pesticide content than the plant to its left.

// Example
// p = [3, 6, 2, 7, 5] // pesticide levels

// Use a 1-indexed array. On day 1, plants 2 and 4 die leaving p`=[3, 2, 5]. On day 2, plant 3 in p` dies leaving p" = [3,2].
// There is no plant with a higher concentration of pesticide than the one to its left, so plants stop dying after day 2.

// Function Description
// Complete the function poisonousPlants in the editor below.
// poisonousPlants has the following parameter(s):
// int p[n]: the pesticide levels in each plant

// Returns
// - int: the number of days until plants no longer die from pesticide

// Input Format
// The first line contains an integer n, the size of the array p.
// The next line contains n space-separated integers p[i].

// Constraints
// 1 <= n < 10 ^ 5
// 0 <= p[i] <= 10 ^ 9

// Sample Input
// 7
// 6 5 8 4 7 10 9

// Sample Output
// 2

// Explanation
// Initially all plants are alive.
// Plants = {(6,1), (5,2), (8,3), (4,4), (7,5), (10,6), (9,7)}
// Plants[k] = (i,j) => jth plant has pesticide amount = i.
// After the 1st day, 4 plants remain as plants 3, 5, and 6 die.
// Plants = {(6,1), (5,2), (4,4), (9,7)}
// After the 2nd day, 3 plants survive as plant 7 dies.
// Plants = {(6,1), (5,2), (4,4)}
// Plants stop dying after the 2nd day.

function poisonousPlants(p) {
  const stack = [];
  let maxDaysAlive = 0;
  for (let i = 0; i < p.length; i++) {
    let daysAlive = 0;
    while (stack.length > 0 && p[i] <= stack[stack.length - 1].plants) {
      daysAlive = Math.max(daysAlive, stack.pop().days);
    }
    if (stack.length === 0) {
      daysAlive = 0;
    } else {
      daysAlive++;
    }
    maxDaysAlive = Math.max(maxDaysAlive, daysAlive);
    stack.push({
      plants: p[i],
      days: daysAlive,
    });
  }
  return maxDaysAlive;
}

console.log(poisonousPlants([6, 5, 8, 4, 7, 10, 9])); // 2
console.log(poisonousPlants([3, 2, 5, 4])); // 2
console.log(poisonousPlants([4, 3, 7, 5, 6, 4, 2])); // 3
