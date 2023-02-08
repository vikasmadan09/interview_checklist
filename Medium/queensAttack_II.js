// You will be given a square chess board with one queen and a number of obstacles placed on it. Determine how many squares the queen can attack.

// A queen is standing on an n x n chessboard. The chess board's rows are numbered from 1 to n, going from bottom to top. Its columns are numbered from 1 to n, going from left to right. Each square is referenced by a tuple, (r,c), describing the row, r, and column, c, where the square is located.

// The queen is standing at position (r_q,c_q). In a single move, she can attack any square in any of the eight directions (left, right, up, down, and the four diagonals). In the diagram below, the green circles denote all the cells the queen can attack from (4, 4):

// There are obstacles on the chessboard, each preventing the queen from attacking any square beyond it on that path. For example, an obstacle at location (3, 5) in the diagram above prevents the queen from attacking cells (3, 5), (2, 6), and (1, 7):

// Given the queen's position and the locations of all the obstacles, find and print the number of squares the queen can attack from her position at (r_q, c_q). In the board above, there are 24 such squares.

// Function Description

// Complete the queensAttack function in the editor below.
// queensAttack has the following parameters:
// - int n: the number of rows and columns in the board
// - nt k: the number of obstacles on the board
// - int r_q: the row number of the queen's position
// - int c_q: the column number of the queen's position
// - int obstacles[k][2]: each element is an array of 2 integers, the row and column of an obstacle

// Returns
// - int: the number of squares the queen can attack

// Input Format

// The first line contains two space-separated integers n and k, the length of the board's sides and the number of obstacles.
// The next line contains two space-separated integers r_q and c_q, the queen's row and column position.
// Each of the next k lines contains two space-separated integers r[i] and c[i], the row and column position of obstacle[i].

// Constraints
// 0 < n <= 10^5
// 0 <= k <= 10^5;
// A single cell may contain more than one obstacle.
// There will never be an obstacle at the position where the queen is located.

// Subtasks
// For 30% of the maximum score:
// 0 < n <= 100;
// 0 <= k <= 100;

// For 50% of the maximum score:
// 0 < n <= 1000;
// 0 <= k <= 10^5;

// Sample Input 0
// 4 0
// 4 4

// Sample Output 0
// 9

// Explanation 0
// The queen is standing at position (4, 4) on a 4 x 4 chessboard with no obstacles:

// Sample Input 1
// 5 3
// 4 3
// 5 5
// 4 2
// 2 3

// Sample Output 1
// 10

// Explanation 1
// The queen is standing at position (4, 3) on a 5 x 5 chessboard with k = 3 obstacles:

// 5       O   O   O   X
// 4       X  "Q"  O   O
// 3       O   O   O
// 2   O       X       0
// 1
//     1   2   3   4   5

// The number of squares she can attack from that position is 10.

// Sample Input 2
// 1 0
// 1 1

// Sample Output 2
// 0

// Explanation 2
// Since there is only one square, and the queen is on it, the queen can move 0 squares.

/*
 * Complete the 'queensAttack' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER r_q
 *  4. INTEGER c_q
 *  5. 2D_INTEGER_ARRAY obstacles
 */

function queensAttack(n, k, r_q, c_q, obstacles) {
  // Write your code here
  let up = n - r_q;
  let down = r_q - 1;
  let left = c_q - 1;
  let right = n - c_q;

  let upleft = Math.min(up, left);
  let upright = Math.min(up, right);
  let downleft = Math.min(down, left);
  let downright = Math.min(down, right);

  for (let [ro, co] of obstacles) {
    if (ro === r_q) {
      if (co === c_q) continue;
      if (co < c_q) left = Math.min(c_q - co - 1, left);
      else right = Math.min(co - c_q - 1, right);
    } else if (co === c_q) {
      if (ro === r_q) continue;
      if (ro < r_q) down = Math.min(r_q - ro - 1, down);
      else up = Math.min(ro - r_q - 1, up);
    } else if (Math.abs(co - c_q) === Math.abs(ro - r_q)) {
      if (co < c_q && ro < r_q) {
        downleft = Math.min(c_q - co - 1, downleft);
      }
      if (co < c_q && ro > r_q) {
        upleft = Math.min(c_q - co - 1, upleft);
      }
      if (co > c_q && ro < r_q) {
        downright = Math.min(co - c_q - 1, downright);
      }
      if (co > c_q && ro > r_q) {
        upright = Math.min(co - c_q - 1, upright);
      }
    }
  }
  return up + down + left + right + upleft + upright + downleft + downright;
}

// console.log(queensAttack(4, 0, 4, 4, []));
console.log(
  queensAttack(5, 3, 4, 3, [
    [5, 5],
    [4, 2],
    [2, 3],
  ])
);
// console.log(queensAttack(1, 0, 1, 1, []));
