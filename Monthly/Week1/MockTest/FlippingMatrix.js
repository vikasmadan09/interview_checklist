// Sean invented a game involving a 2n X 2n matrix where each cell of the matrix contains an
// integer.He can reverse any of its rows or columns any number of times.The goal of the game
// is to maximize the sum of the lements in the n x n submatrix located in the upper - left quadrant
// of the matrix.
// Given the initial configurations for q matrices, help Sean reverse the rows and columns of each
// matrix in the best possible way so that the sum of the elements in the matrix's upper-left
// quadrant is maximal

// Example
// matrix = [[1, 2], [3, 4]]
// 1 2
// 3 4
// It is 2 x 2 and we want to maximize the top left quadrant, a 1 x 1 matrix. Reverse row 1:
// 1 2
// 4 3

// And now reverse column():

// 4 2
// 1 3

// The maximal sum is 4.

// Sample Input

// STDIN       Function
// ----------  ----------
// 1              q = 1
// 2              n = 2
// 112 42 83 119  matrix = [[112,42,83,119],[56,125,56,49],[15,78,101,43],[62,98,114,108]]
// 56 125 56 49
// 15 78 101 43
// 62 98 114 108

// Sample Output
// 414

// The sum of values in n x n submatrix in the upper left quadrant is 119 + 114 + 56 + 125 = 414.

function flippingMatrix(matrix) {
  let n = matrix.length / 2;
  let total = 0;

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      let max = 0;
      // upper left
      max = Math.max(matrix[row][col], max);
      // upper right
      max = Math.max(matrix[row][2 * n - col - 1], max);
      // lower left
      max = Math.max(matrix[2 * n - row - 1][col], max);
      // lower right
      max = Math.max(matrix[2 * n - row - 1][2 * n - col - 1], max);
      total += max;
    }
  }
  return total;
}

console.log(
  flippingMatrix([
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108],
  ])
);
