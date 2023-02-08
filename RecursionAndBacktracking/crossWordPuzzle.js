// A 10 x 10 Crossword grid is provided to you, along with a set of words (or names of places) which need to be filled into the grid.
// Cells are marked either + or -. Cells marked with a - are to be filled with the word list.

// The following shows an example crossword from the input crossword grid and the list of words to fit, words = [POLAND, LHASA, SPAIN, INDIA]:

// Input 	   		Output

// ++++++++++ 		++++++++++
// +------+++ 		+POLAND+++
// +++-++++++ 		+++H++++++
// +++-++++++ 		+++A++++++
// +++-----++ 		+++SPAIN++
// +++-++-+++ 		+++A++N+++
// ++++++-+++ 		++++++D+++
// ++++++-+++ 		++++++I+++
// ++++++-+++ 		++++++A+++
// ++++++++++ 		++++++++++
// POLAND;LHASA;SPAIN;INDIA

// Function Description

// Complete the crosswordPuzzle function in the editor below. It should return an array of strings, each representing a row of the finished puzzle.

// crosswordPuzzle has the following parameter(s):

// crossword: an array of 10 strings of length 10 representing the empty grid
// words: a string consisting of semicolon delimited strings to fit into crossword

// Input Format

// Each of the first 10 lines represents crossword[i], each of which has 10 characters, crossword[i][j].
// The last line contains a string consisting of semicolon delimited words[i] to fit.

// Constraints
// 1 <= | words | <= 10
// crossword[i][j] ϵ {+, -}
// words[i][j] ϵ ascii[A-Z]

// Output Format

// Position the words appropriately in the 10 x 10 grid, then return your array of strings for printing.

// Sample Input 0

// +-++++++++
// +-++++++++
// +-++++++++
// +-----++++
// +-+++-++++
// +-+++-++++
// +++++-++++
// ++------++
// +++++-++++
// +++++-++++
// LONDON;DELHI;ICELAND;ANKARA

// Sample Output 0

// +L++++++++
// +O++++++++
// +N++++++++
// +DELHI++++
// +O+++C++++
// +N+++E++++
// +++++L++++
// ++ANKARA++
// +++++N++++
// +++++D++++
// Sample Input 1

// +-++++++++
// +-++++++++
// +-------++
// +-++++++++
// +-++++++++
// +------+++
// +-+++-++++
// +++++-++++
// +++++-++++
// ++++++++++
// AGRA;NORWAY;ENGLAND;GWALIOR
// Sample Output 1

// +E++++++++
// +N++++++++
// +GWALIOR++
// +L++++++++
// +A++++++++
// +NORWAY+++
// +D+++G++++
// +++++R++++
// +++++A++++
// ++++++++++
// Sample Input 2

// ++++++-+++
// ++------++
// ++++++-+++
// ++++++-+++
// +++------+
// ++++++-+-+
// ++++++-+-+
// ++++++++-+
// ++++++++-+
// ++++++++-+
// ICELAND;MEXICO;PANAMA;ALMATY
// Sample Output 2

// ++++++I+++
// ++MEXICO++
// ++++++E+++
// ++++++L+++
// +++PANAMA+
// ++++++N+L+
// ++++++D+M+
// ++++++++A+
// ++++++++T+
// ++++++++Y+

class Spaces {
  constructor(r, c) {
    this.r = r;
    this.c = c;
    this.length = 1;
    this.direction = "right";
    this.used = false;
  }
}

function findSpaces(grid, minLength) {
  let spaceList = [];
  let gLen = 10;
  // Horizonal scan
  for (let i = 0; i < gLen; i++) {
    for (let j = 0; j < gLen; j++) {
      if (grid[i][j] === "-") {
        let s = new Spaces(i, j);
        while (grid[i][++j] === "-") s.length++;
        if (s.length >= minLength) {
          spaceList.push(s);
        }
      }
    }
  }

  // Vertical scan
  for (let i = 0; i < gLen; i++) {
    for (let j = 0; j < gLen; j++) {
      if (grid[j][i] === "-") {
        let s = new Spaces(j, i);
        s.direction = "down";
        while (++j < gLen && grid[j][i] === "-") s.length++;
        if (s.length >= minLength) {
          spaceList.push(s);
        }
      }
    }
  }
  return spaceList;
}

function isValidSpace(grid, spaces, word) {
  if (spaces.used === true) return false;
  for (let i = 0; i < spaces.length; i++) {
    if (spaces.direction === "right") {
      if (
        grid[spaces.r][spaces.c + i] !== word[i] &&
        grid[spaces.r][spaces.c + i] !== "-"
      ) {
        return false;
      }
    } else {
      if (
        grid[spaces.r + i][spaces.c] !== word[i] &&
        grid[spaces.r + i][spaces.c] !== "-"
      ) {
        return false;
      }
    }
  }
  return true;
}

function forward(grid, space, word) {
  let added_spaces = [];
  for (let i = 0; i < space.length; i++) {
    if (space.direction === "right") {
      if (grid[space.r][space.c + i] === "-")
        added_spaces.push([space.r, space.c + i]);
      grid[space.r][space.c + i] = word[i];
    } else {
      if (grid[space.r + i][space.c] === "-")
        added_spaces.push([space.r + i, space.c]);
      grid[space.r + i][space.c] = word[i];
    }
  }
  return added_spaces;
}

function backward(grid, addedSpaces) {
  for (let i = 0; i < addedSpaces.length; i++) {
    let addedSpace = addedSpaces[i];
    grid[addedSpace[0]][addedSpace[1]] = "-";
  }
}

function solve(grid, spaces, words) {
  if (words.length === 0) {
    return true;
  }
  let w = words.shift();
  let possibleLocations = [];
  for (let i = 0; i < spaces.length; i++) {
    if (spaces[i].length === w.length) {
      possibleLocations.push(spaces[i]);
    }
  }

  for (let i = 0; i < possibleLocations.length; i++) {
    let sp = possibleLocations[i];
    if (isValidSpace(grid, sp, w)) {
      sp.used = true;
      let added_spaces = forward(grid, sp, w);
      if (solve(grid, spaces, words)) return true;
      backward(grid, added_spaces);
      sp.used = false;
    }
  }
  words.push(w);
  return false;
}

function crosswordPuzzle(crossword, words) {
  // Write your code here
  let grid = [];
  for (let i = 0; i < crossword.length; i++) {
    grid.push(crossword[i].split(""));
  }
  let w = words.split(";");
  w.sort((a, b) => b.length - a.length);
  let spaces = findSpaces(grid, w[w.length - 1].length);

  solve(grid, spaces, w);

  let res = [];
  for (let i = 0; i < grid.length; i++) {
    res[i] = grid[i].join("");
  }
  console.log(res);
  return res;
}

console.log(
  crosswordPuzzle(
    [
      "+-++++++++",
      "+-++++++++",
      "+-++++++++",
      "+-----++++",
      "+-+++-++++",
      "+-+++-++++",
      "+++++-++++",
      "++------++",
      "+++++-++++",
      "+++++-++++",
    ],
    "LONDON;DELHI;ICELAND;ANKARA"
  )
);
console.log(
  crosswordPuzzle(
    [
      "+-++++++++",
      "+-++++++++",
      "+-------++",
      "+-++++++++",
      "+-++++++++",
      "+------+++",
      "+-+++-++++",
      "+++++-++++",
      "+++++-++++",
      "++++++++++",
    ],
    "AGRA;NORWAY;ENGLAND;GWALIOR"
  )
);
console.log(
  crosswordPuzzle(
    [
      "++++++-+++",
      "++------++",
      "++++++-+++",
      "++++++-+++",
      "+++------+",
      "++++++-+-+",
      "++++++-+-+",
      "++++++++-+",
      "++++++++-+",
      "++++++++-+",
    ],
    "ICELAND;MEXICO;PANAMA;ALMATY"
  )
);
