// Given a sequence of n integers, p(1),p(2),...p(n) where each element is distinct and satisfies 1<=p(x)<=n. For each x where 1<=x<=n, that is x increments from 1 to n, find any integer y such that p(p(y)) = x and keep a history of the values of y in a return array.

// Example
// p = [5,2,1,3,4]

// Each value of x between 1 and 5, the length of the sequence, is analyzed as follows:

// x = 1 == p[3],p[4] = 3, so p[p[4]] = 1
// x = 2 == p[2],p[2] = 3, so p[p[2]] = 2
// x = 3 == p[4],p[5] = 4, so p[p[5]] = 3
// x = 4 == p[5],p[1] = 5, so p[p[1]] = 4
// x = 5 == p[1],p[3] = 1, so p[p[3]] = 5
// The values for y are [4,2,5,1,3].

// Sample Input 0
// 3
// 2 3 1

// Sample Output 0
// 2
// 3
// 1

// Explanation 0
// Given the values of package(1) =2,p(2) = 3, and p(3) = 1, we calculate and print the following values for each x from 1 to n:
// x = 1 == p(3) = p(p(2)) = p(p(y)), so we print the value of y = 2 on a new line.
// x = 2 == p(1) = p(p(3)) = p(p(y)), so we print the value of y = 3 on a new line.
// x = 3 == p(2) = p(p(1)) = p(p(y)), so we print the value of y = 1 on a new line.

function permutationEquation(p) {
  let res = [];
  for (let i = 1; i <= p.length; i++) {
    res.push(p.indexOf(p.indexOf(i) + 1) + 1);
  }
  return res;
}
console.log(permutationEquation([2, 3, 1]));
console.log(permutationEquation([4, 3, 5, 1, 2]));
