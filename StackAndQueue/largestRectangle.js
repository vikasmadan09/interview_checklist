// Skyline Real Estate Developers is planning to demolish a number of old, unoccupied buildings and construct a shopping mall in their place.
// Your task is to find the largest solid area in which the mall can be constructed.

// There are a number of buildings in a certain two-dimensional landscape.
// Each building has a height, given by h[i] where i ε [1, n].
// If you join k adjacent buildings, they will form a solid rectangle of area k x min(h[i],h[i+1],...,h[i+k-1]).

// Example
// h = [3, 2, 3];

// A rectangle of height h = 2 and length k = 3 can be constructed within the boundaries. The area formed is h * k = 2 * 3 = 6.

// Function Description

// Complete the function largestRectangle int the editor below.
// It should return an integer representing the largest rectangle that can be formed within the bounds of consecutive buildings.

// largestRectangle has the following parameter(s):
// int h[n]: the building heights

// Returns
// - long: the area of the largest rectangle that can be formed within the bounds of consecutive buildings

// Input Format

// The first line contains n, the number of buildings.
// The second line contains n space-separated integers, each the height of a building.

// Constraints
// 1 <= n <= 10 ^ 5
// 1 <= h[i] <= 10 ^ 6

// Sample Input

// STDIN       Function
// -----       --------
// 5           h[] size n = 5
// 1 2 3 4 5   h = [1, 2, 3, 4, 5]

// Sample Output
// 9

function largestRectangle(histogram) {
  // This function calculates maximum
  // rectangular area under given
  // histogram with n bars

  // Create an empty stack. The stack
  // holds indexes of histogram[] list.
  // The bars stored in the stack are
  // always in increasing order of
  // their heights.
  let stack = [];

  let max_area = 0; // Initialize max area

  // Run through all bars of
  // given histogram
  let index = 0;
  while (index < histogram.length) {
    // If this bar is higher
    // than the bar on top
    // stack, push it to stack

    if (
      stack.length == 0 ||
      histogram[stack[stack.length - 1]] <= histogram[index]
    ) {
      stack.push(index);
      index += 1;
    }

    // If this bar is lower than top of stack,
    // then calculate area of rectangle with
    // stack top as the smallest (or minimum
    // height) bar.'i' is 'right index' for
    // the top and element before top in stack
    // is 'left index'
    else {
      // pop the top
      let top_of_stack = stack.pop();

      // Calculate the area with
      // histogram[top_of_stack] stack
      // as smallest bar
      let area =
        histogram[top_of_stack] *
        (stack.length > 0 ? index - stack[stack.length - 1] - 1 : index);

      // update max area, if needed
      max_area = Math.max(max_area, area);
    }
  }
  // Now pop the remaining bars from
  // stack and calculate area with
  // every popped bar as the smallest bar
  while (stack.length > 0) {
    // pop the top
    let top_of_stack = stack.pop();

    // Calculate the area with
    // histogram[top_of_stack]
    // stack as smallest bar
    let area =
      histogram[top_of_stack] *
      (stack.length > 0 ? index - stack[stack.length - 1] - 1 : index);

    // update max area, if needed
    max_area = Math.max(max_area, area);
  }

  // Return maximum area under
  // the given histogram
  return max_area;
}
console.log(largestRectangle([11, 11, 10, 10, 10])); // 50
console.log(largestRectangle([1, 3, 5, 9, 11])); // 18
console.log(largestRectangle([1, 2, 3, 4, 5])); // 9
