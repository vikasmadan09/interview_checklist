// Given an integer array of size n, find the maximum of the minimum(s) of every window size in the array. The window size varies from 1 to n.

// For example, given arr = [6,3,5,1,12], consider window sizes of 1 through 5.
// Windows of size 1 are (6),(3),(5),(1),(12).The maximum value of the minimum values of these windows is 12.
// Windows of size 2 are (6,3), (3,5), (5,1), (1,12) and their minima are (3, 3, 1, 1).The maximum of these values is 3.
// Continue this process through window size 5 to finally consider the entire array.All of the answers are 12, 3, 3, 1, 1.

// Function Description

// Complete the riddle function in the editor below.
// It must return an array of integers representing the maximum minimum value for each window size from 1 to n.

// riddle has the following parameter(s):

// arr: an array of integers

// Input Format

// The first line contains a single integer, n, the size of arr.
// The second line contains n space-separated integers, each an arr[i].

// Constraints
// 1 <= n <= 10 ^ 6
// 0 <= arr[i] <= 10 ^ 9

// Output Format

// Single line containing n space-separated integers denoting the output for each window size from 1 to n.

// Sample Input 0
// 4
// 2 6 1 12

// Sample Output 0
// 12 2 1 1

// Explanation 0

// Here n = 4 and arr = [2,6,1,12]

// window size	window1	window2	window3	window4	maximum of all windows
// 1	            2	    6	    1	    12	12
// 2	            2	    1	    1		    2
// 3	            1	    1			        1
// 4	            1				            1

// Sample Input 1
// 7
// 1 2 3 5 1 13 3

// Sample Output 1
// 13 3 2 1 1 1 1

// Explanation 1

// Here n = 7 and arr = [1,2,3,5,1,13,3]

// win size	w_1	w_2	w_3	w_4	w_5	w_6	w_7	maximum of all windows
// 1	    1	2	3	5	1	13	3	13
// 2	    1	2	3	1	1	3		3
// 3	    1	2	1	1	1			2
// 4	    1	1	1	1				1
// 5	    1	1	1					1
// 6	    1	1						1
// 7	    1							1

// Sample Input 2
// 6
// 3 5 4 7 6 2

// Sample Output 2
// 7 6 4 4 3 2

// Explanation 2

// Here n = 6 and arr = [3,5,4,7,6,2]

// win size	w_1	w_2	w_3	w_4	w_5	w_6	maximum of all windows
// 1	     3	5	4	7	6	2	7
// 2	     3	4	4	6	2		6
// 3	     3	4	4	2			4
// 4	     3	4	2				4
// 5	     3	2					3
// 6	     2						2

function riddle(arr) {
  let stack = [];
  const left = Array(arr.length + 1).fill(0);
  const right = Array(arr.length + 1).fill(0);
  // initiailze elements of left[] and right[]
  for (let i = 0; i < arr.length; i++) {
    left[i] = -1;
    right[i] = n;
  }
  // Fill elements of left[]
  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }
    if (stack.length > 0) {
      left[i] = stack[stack.length - 1];
    }
    stack.push(i);
  }
  // empty the stack as stack is going to be used for right[]
  while (stack.length > 0) {
    stack.pop();
  }
  // Fill elements of right[] using same logic
  for (let i = arr.length - 1; i >= 0; i--) {
    while (s.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      s.pop();
    }
    if (stack.length > 0) {
      right[i] = stack[stack.length - 1];
    }
    stack.push(i);
  }
  // create and initialize answer array
  let ans = Array(arr.length + 1).fill(0);
  // fill answer array by comparing minimums of all lengths computed
  // using left[] and right[]
  for (let i = 0; i < n; i++) {
    //   length of the interval
    let len = right[i] - left[i] - 1;
    // arr[i] is a possible answer for
    // this length 'len' interval, check x
    // if arr[i] is more than max for 'len'
    ans[len] = Math.max(ans[len], arr[i]);
  }
  // Some entries in ans[] may not be
  // filled yet. Fill them by taking
  // values from right side of ans[]
  for (let i = arr.length - 1; i >= 1; i--) {
    ans[i] = Math.max(ans[i], ans[i + 1]);
  }
  ans.shift();
  return ans;
}

console.log(riddle([2, 6, 1, 12])); // 12 2 1 1
console.log(riddle([1, 2, 3, 5, 1, 13, 3])); // 13 3 2 1 1 1 1
console.log(riddle([3, 5, 4, 7, 6, 2])); // 7 6 4 4 3 2
