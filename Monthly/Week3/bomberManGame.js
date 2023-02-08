// Bomberman lives in a rectangular grid. Each cell in the grid either contains a bomb or nothing at all.

// Each bomb can be planted in any cell of the grid but once planted, it will detonate after exactly 3 seconds.
// Once a bomb detonates, it's destroyed — along with anything in its four neighboring cells. This means that if a bomb detonates in cell i,j, any valid cells (i+-1,j) and (i,j+-1) are cleared.
// If there is a bomb in a neighboring cell, the neighboring bomb is destroyed without detonating, so there's no chain reaction.

// Bomberman is immune to bombs, so he can move freely throughout the grid. Here's what he does:

// 1. Initially, Bomberman arbitrarily plants bombs in some of the cells, the initial state.
// 2. After one second, Bomberman does nothing.
// 3. After one more second, Bomberman plants bombs in all cells without bombs, thus filling the whole grid with bombs. No bombs detonate at this point.
// 4. After one more second, any bombs planted exactly three seconds ago will detonate. Here, Bomberman stands back and observes.
// 5. Bomberman then repeats steps 3 and 4 indefinitely.
// Note that during every second Bomberman plants bombs, the bombs are planted simultaneously (i.e., at the exact same moment), and any bombs planted at the same time will detonate at the same time.

// Given the initial configuration of the grid with the locations of Bomberman's first batch of planted bombs, determine the state of the grid after N seconds.

// For example, if the initial grid looks like:

// ...
// .O.
// ...

// it looks the same after the first second. After the second second, Bomberman has placed all his charges:

// OOO
// OOO
// OOO

// At the third second, the bomb in the middle blows up, emptying all surrounding cells:

// O.O
// ...
// O.O

// Function Description

// Complete the bomberMan function in the editory below.
// bomberMan has the following parameter(s):
// int n: the number of seconds to simulate
// string grid[r]: an array of strings that represents the grid

// Returns
// string[r]: n array of strings that represent the grid in its final state

// Input Format

// The first line contains three space-separated integers r, c, and n, The number of rows, columns and seconds to simulate.
// Each of the next r lines contains a row of the matrix as a single string of c characters.
// The . character denotes an empty cell, and the O character(ascii 79) denotes a bomb.

// Constraints
// 1 <= r, c <= 200
// 1 <= n <= 10 ^ 9

// Subtask
// 1 <= n <= 200 for  of the maximum score.

// Sample Input

// STDIN           Function
// -----           --------
// 6 7 3           r = 6, c = 7, n = 3
// .......         grid =['.......', '...O...', '....O..',\
// ...O...                '.......', 'OO.....', 'OO.....']
// ....O..
// .......
// OO.....
// OO.....

// Sample Output

// OOO.OOO
// OO...OO
// OOO...O
// ..OO.OO
// ...OOOO
// ...OOOO

// Explanation

// The initial state of the grid is:

// .......
// ...O...
// ....O..
// .......
// OO.....
// OO.....

// Bomberman spends the first second doing nothing, so this is the state after 1 second:

// .......
// ...O...
// ....O..
// .......
// OO.....
// OO.....

// Bomberman plants bombs in all the empty cells during his second second, so this is the state after 2 seconds:

// OOOOOOO
// OOOOOOO
// OOOOOOO
// OOOOOOO
// OOOOOOO
// OOOOOOO

// In his third second, Bomberman sits back and watches all the bombs he planted 3 seconds ago detonate. This is the final state after 3 seconds:

// OOO.OOO
// OO...OO
// OOO...O
// ..OO.OO
// ...OOOO
// ...OOOO

function bomberMan(n, grid) {
  // in the first second nothing happen
  if (n < 2) return grid;
  if (!(n % 2)) {
    // In every even N, the grid is full of bombs
    return new Array(grid.length).fill("O".repeat(grid[0].length));
  }
  // On the 3rd second, and every 4 second after that, the state is the first explosion
  // On the 5th second, and every 4 second after that, the state is the second explosion
  const firstExposion = explodeGrid(grid);
  return n % 4 === 3 ? firstExposion : explodeGrid(firstExposion);

  // function take a grid and return a grid after explosion
  function explodeGrid(grid) {
    // Max row/column indexes
    const y = grid[0].length - 1;
    const x = grid.length - 1;
    // create array of original grid
    const gridArr = grid.map((r) => r.split(""));
    const exploded = gridArr.reduce((acc, row, r) => {
      const line = row.reduce((l, el, c) => {
        // find the elements in the array that are 'O' or near 'O'
        if (
          grid[r][c] === "O" ||
          grid[Math.min(r + 1, x)][c] === "O" ||
          grid[Math.max(r - 1, 0)][c] === "O" ||
          grid[r][Math.min(c + 1, y)] === "O" ||
          grid[r][Math.max(c - 1, 0)] === "O"
        )
          return l + ".";
        else return l + "O";
      }, "");
      // add the line to the new grid
      acc.push(line);
      return acc;
    }, []);
    return exploded;
  }
}

console.log(
  bomberMan(3, [
    ".......",
    "...O...",
    "....O..",
    ".......",
    "OO.....",
    "OO.....",
  ])
);
// [[OOO.OOO],
// [OO...OO],
// [OOO...O],
// [..OO.OO]
// [...OOOO],
// [...OOOO]]

console.log(
  bomberMan(5, [
    ".......",
    "...O.O.",
    "....O..",
    "..O....",
    "OO...OO",
    "OO.O...",
  ])
);
// [[.......],
// [...O.O.],
// [...OO..],
// [..OOOO.],
// [OOOOOOO],
// [OOOOOOO]]
