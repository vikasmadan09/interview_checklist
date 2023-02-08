// WEEK 4
// You are given a square grid with some cells open (.) and some blocked (X). Your playing piece can move along any row or column until it reaches the edge of the grid or a blocked cell. Given a grid, a start and a goal, determine the minmum number of moves to get to the goal.

// Example.

// The grid is shown below:

// ...
// .X.
// ...
// The starting position  so start in the top left corner. The goal is . The path is . It takes  moves to reach the goal.

// Function Description
// Complete the minimumMoves function in the editor.

// minimumMoves has the following parameter(s):

// string grid[n]: an array of strings that represent the rows of the grid
// int startX: starting X coordinate
// int startY: starting Y coordinate
// int goalX: ending X coordinate
// int goalY: ending Y coordinate
// Returns

// int: the minimum moves to reach the goal
// Input Format

// The first line contains an integer , the size of the array grid.
// Each of the next  lines contains a string of length .
// The last line contains four space-separated integers,

// Constraints

// Sample Input

// STDIN       FUNCTION
// -----       --------
// 3           grid[] size n = 3
// .X.         grid = ['.X.','.X.', '...']
// .X.
// ...
// 0 0 0 2     startX = 0, startY = 0, goalX = 0, goalY = 2
// Sample Output

// 3
// Explanation

// Here is a path that one could follow in order to reach the destination in  steps:

// .

function minimumMoves(grid, startX, startY, goalX, goalY) {
  // Write your code here
  if (grid[startX][startY] === "X" || grid[goalX][goalY] === "X") return 0;
  const queue = [];
  const visited = {};

  const startCell = {
    position: { x: startX, y: startY },
    moves: 0,
  };
  queue.push(startCell);

  visited[`${startX}_${startY}`] = true;

  const markCellAsVisited = (x, y, moves, parent) => {
    const cellKey = `${x}_${y}`;
    if (grid[x][y] === "X" || visited[cellKey]) return null;
    visited[cellKey] = true;
    const newCell = {
      position: { x, y },
      moves,
      parent,
    };
    queue.push(newCell);
    return newCell;
  };

  while (queue.length > 0) {
    const currentCell = queue.shift();
    if (currentCell.position.x === goalX && currentCell.position.y === goalY) {
      return currentCell.moves;
    }
    const { position } = currentCell;
    const moves = currentCell.moves + 1;

    // Left
    for (let y = position.y - 1; y >= 0; y--) {
      if (!markCellAsVisited(position.x, y, moves, currentCell)) break;
    }
    // Top
    for (let x = position.x - 1; x >= 0; x--) {
      if (!markCellAsVisited(x, position.y, moves, currentCell)) break;
    }
    // RIGHT
    for (let y = position.y + 1; y < grid.length; y++) {
      if (!markCellAsVisited(position.x, y, moves, currentCell)) break;
    }
    // Bottom
    for (let x = position.x + 1; x < grid.length; x++) {
      if (!markCellAsVisited(x, position.y, moves, currentCell)) break;
    }
  }
  return 0;
}
console.log(minimumMoves([".X.", ".X.", "..."], 0, 0, 0, 2)); // 3
console.log(minimumMoves(["...", ".X.", ".X."], 2, 0, 0, 2)); // 2
console.log(minimumMoves(["...", ".X.", ".X."], 2, 0, 2, 2)); // 3
