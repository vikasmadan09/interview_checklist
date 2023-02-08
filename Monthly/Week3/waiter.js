// You are a waiter at a party. There is a pile of numbered plates. Create an empty answers array.
// At each iteration, i, remove each plate from the top of the stack in order.Determine if the number on the plate is evenly divisible by the ith prime number.
// If it is, stack it in pile B. Otherwise, stack it in stack Ai.Store the values in Bi from top to bottom in answers. In the next iteration, do the same with the values in stack Ai.
// Once the required number of iterations is complete, store the remaining values in Ai in answers, again from top to bottom.Return the answers array.

// Example
// A = [2, 3, 4, 5, 6, 7];
// q = 3;

// An abbreviated list of primes is [2,3,5,7,11,13]. Stack the plates in reverse order.
// A0 = [2, 3, 4, 5, 6, 7]
// answers = []

// Begin iterations. On the first iteration, check if items are divisible by 2.
// A1 = [7, 5, 3];
// B1 = [6, 4, 2];
// Move B1 elements to answers.
// answers = [2, 4, 6];
// On the second iteration, test if A1 elements are divisible by 3.
// A2 = [7, 5];
// B2 = [3];
// Move B2 elmements to answers.
// answers = [2,4,6,3]
// And on the third iteration, test if A2 elements are divisible by 5.
// A3 = [7]
// B3 = [5]
// Move B2 elmements to answers.
// answers = [2,4,6,3,5]
// All iterations are complete, so move the remaining elements in A3, from top to bottom, to answers.

// answers = [2,4,6,3,5,7]. Return this list.

// Function Description
// Complete the waiter function in the editor below.
// waiter has the following parameters:
// int number[n]: the numbers on the plates
// int q: the number of iterations

// Returns
// int[n]: the numbers on the plates after processing

// Input Format
// The first line contains two space separated integers, n and q.
// The next line contains n space separated integers representing the initial pile of plates, i.e., A.

// Constraints
// 1 <= n <= 5x10 ^ 4
// 2 <= number[i] <= 10 ^ 4
// 1 <= q <= 1200

// Sample Input
// 5 1
// 3 4 7 6 5

// Sample Output
// 4
// 6
// 3
// 7
// 5

// Explanation

// Initially:
// A0 = [3, 4, 7, 6, 5]<-TOP

// After 1 iteration:
// A0 = []<-TOP
// B1 = [6, 4]<-TOP
// A1 = [5, 7, 3]<-TOP

// We should output numbers in B1 first from top to bottom, and then output numbers in A1 from top to bottom.

function waiter(numbers, q) {
  const isPrime = (n) => {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  };
  const getPrimes = (n) => {
    let p = [];
    let i = 2;
    while (p.length < n) {
      if (isPrime(n)) p.push(i);
      i++;
    }
    return p;
  };
  let curr_a = numbers;
  let next_a = [];
  let prime = getPrimes(q);
  let answers = [];
  for (let i = 1; i <= q; i++) {
    let temp = [];
    while (curr_a.length) {
      const num = curr_a.pop();
      if (num % prime[i - 1] === 0) {
        temp.push(num);
      } else {
        next_a.push(num);
      }
    }
    curr_a = next_a;
    next_a = [];
    answers = [...answers, ...temp.reverse()];
  }
  answers = [...answers, ...curr_a.reverse()];
  return answers;
}

console.log(waiter([3, 4, 7, 6, 5], 1)); // [4,6,3,7,5]
console.log(waiter([3, 3, 4, 4, 9], 2)); // [4,4,9,3,3]
