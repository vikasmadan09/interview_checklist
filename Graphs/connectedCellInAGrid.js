// Consider a matrix where each cell contains either a 0 or a 1 and any cell containing a 1 is called a filled cell. Two cells are said to be connected if they are adjacent to each other horizontally, vertically, or diagonally.
// In the diagram below, the two colored regions show cells connected to the filled cells.Black on white are not connected.

// Cells adjacent to filled cells:
// |0 0 0| 0 |0 1|
// |0 1 0| 0 |0 0|
// |0 0 0| 0 0 0

// If one or more filled cells are also connected, they form a region. Note that each cell in a region is connected to at least one other cell in the region but is not necessarily directly connected to all the other cells in the region.

// Regions:
// |1 1| 0 0 0 1
// 0 |1 1| 0 0 0
// 0 0 0|1| 0 0

// Given an n x m matrix, find and print the number of cells in the largest region in the matrix.

// Function Description
// Complete the function maxRegion in the editor below. It must return an integer value, the size of the largest region.
// maxRegion has the following parameter(s):
// grid: a two dimensional array of integers

// Input Format

// The first line contains an integer, n, the number of rows in the matrix, grid.
// The second line contains an integer, m, the number of columns in the matrix.

// Each of the following n lines contains a row of m space-separated integers, grid[i][j].

// Constraints
// 0 < n, m < 10
// grid[i][j] ϵ {0, 1}

// Output Format

// Print the number of cells in the largest region in the given matrix.

// Sample Input

// 4
// 4
// 1 1 0 0
// 0 1 1 0
// 0 0 1 0
// 1 0 0 0

// Sample Output
// 5

// Explanation

// The diagram below depicts two regions of the matrix:
// 1 1 0 0
// 0 1 1 0
// 0 0 1 0
// 1 0 0 0

// The first region has five cells and the second region has one cell. We choose the larger region.

function maxRegion(grid) {
  let maxConnectedCells = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] == 1) {
        dfs(grid, i, j, 0);
      }
    }
  }
  function dfs(grid, i, j, currentCell) {
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[i].length ||
      grid[i][j] == 0
    )
      return;
    currentCell++;
    maxConnectedCells = Math.max(maxConnectedCells, currentCell);
    grid[i][j] = 0;
    // TOP
    dfs(grid, i - 1, j, currentCell);
    // BOTTOM
    dfs(grid, i + 1, j, currentCell);
    // LEFT
    dfs(grid, i, j - 1, currentCell);
    // RIGHT
    dfs(grid, i, j + 1, currentCell);
    // TOP LEFT
    dfs(grid, i - 1, j - 1, currentCell);
    // TOP RIGHT
    dfs(grid, i - 1, j + 1, currentCell);
    // BOTTOM LEFT
    dfs(grid, i + 1, j - 1, currentCell);
    // BOTTOM RIGHT
    dfs(grid, i + 1, j + 1, currentCell);

    grid[i][j] = 1;
  }
  return maxConnectedCells;
}

console.log(
  maxRegion([
    [1, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [1, 0, 0, 0],
  ])
); // 5
console.log(
  maxRegion([
    [0, 0, 1, 1],
    [0, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
); // 8
console.log(
  maxRegion([
    [1, 0, 1, 1, 0],
    [1, 1, 0, 0, 1],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 1],
    [1, 1, 1, 0, 0],
  ])
); // 10
