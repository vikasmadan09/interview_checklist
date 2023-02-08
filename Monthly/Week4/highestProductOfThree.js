// Highest product of three numbers
// [1, 10, 2, 6, 5, 3] the highest product would be 10 * 6 * 5 = 300

// Naive solution
function hightestProduct(arr) {
  let max = Number.MIN_VALUE;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        max = Math.max(max, arr[i] * arr[j] * arr[k]);
      }
    }
  }
  return max;
}
console.log(hightestProduct([1, 10, 2, 6, 5, 3]));

// Optimzed O(n)

function hightestProductOptimzed(arr) {
  // calculate maximum , second maximum and third maximum
  // calculate min and second min
  // return max of product of max, second max , third max and product of min,second min and max

  if (arr.length < 3) return -1;
  // Initiailze max, second max and third max
  let maxA = Number.MIN_VALUE;
  let maxB = Number.MIN_VALUE;
  let maxC = Number.MIN_VALUE;
  // Initialize min and second min
  let minA = Number.MAX_VALUE;
  let minB = Number.MAX_VALUE;
  for (let i = 0; i < arr.length; i++) {
    // Find min , second min and third min
    if (arr[i] > maxA) {
      maxC = maxB;
      maxB = maxA;
      maxA = arr[i];
    } else if (arr[i] > maxB) {
      maxC = maxB;
      maxB = arr[i];
    } else if (arr[i] > maxC) {
      maxC = arr[i];
    }
    // find min and second min
    if (arr[i] < minA) {
      minB = minA;
      minA = arr[i];
    } else if (arr[i] < minB) {
      minB = arr[i];
    }
  }
  return Math.max(maxA * maxB * maxC, minA * minB * maxA);
}
console.log(hightestProductOptimzed([1, 10, 2, 6, 5, 3]));
