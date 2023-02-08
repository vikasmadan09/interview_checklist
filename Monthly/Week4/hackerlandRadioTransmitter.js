// Hackerland is a one-dimensional city with houses aligned at integral locations along a road.
// The Mayor wants to install radio transmitters on the roofs of the city's houses. Each transmitter has a fixed range meaning it can transmit a signal to all houses within that number of units distance away.

// Given a map of Hackerland and the transmission range, determine the minimum number of transmitters so that every house is within range of at least one transmitter.
// Each transmitter must be installed on top of an existing house.

// Example
// x = [1, 2, 3, 5, 9]
// k = 1

// 3 antennae at houses 2 and 5 and 9 provide complete coverage.
// There is no house at location 7 to cover both 5 and 9.
// Ranges of coverage, are, [1,2,3], [5] and [9].

// Function Description

// Complete the hackerlandRadioTransmitters function in the editor below.
// hackerlandRadioTransmitters has the following parameter(s):
// int x[n]: the locations of houses
// int k: the effective range of a transmitter

// Returns
// int: the minimum number of transmitters to install

// Input Format

// The first line contains two space-separated integers n and k, the number of houses in Hackerland and the range of each transmitter.
// The second line contains n space-separated integers describing the respective locations of each house x[i].

// Constraints
// 1 <= n, k <= 10 ^ 5
// 1<=x[i]<=10^5
// There may be more than one house at the same location.

// Subtasks
// 1 <= n <= 1000 for 50% of the maximum score.

// Output Format

// Print a single integer denoting the minimum number of transmitters needed to cover all of the houses.

// Sample Input 0

// STDIN       Function
// -----       --------
// 5 1         x[] size n = 5, k = 1
// 1 2 3 4 5   x = [1, 2, 3, 4, 5]

// Sample Output 0
// 2

// Explanation 0

// The diagram below depicts our map of Hackerland:

//  0 1 2 3 4 5 6 7
//    __|__ |__

// We can cover the entire city by installing 2 transmitters on houses at locations 2 and 4.

// Sample Input 1

// 8 2
// 7 2 4 6 5 9 12 11

// Sample Output 1
// 3

// Explanation 1

// The diagram below depicts our map of Hackerland:

// 1 2 3 4 5 6 7 8 9 10 11 12 13 14
//   ____|____ ____|______  |

// We can cover the entire city by installing 3 transmitters on houses at locations 4, 9, and 12.

function hackerlandRadioTransmitters(h, k) {
  // sort
  h.sort((a, b) => a - b);
  let count = 0,
    i = 0;
  while (i < h.length) {
    let location = h[i] + k;
    while (i < h.length && h[i] <= location) i++;
    let last_location = h[i - 1] + k;
    while (i < h.length && h[i] <= last_location) i++;
    count++;
  }
  return count;
}
console.log(hackerlandRadioTransmitters([1, 2, 3, 4, 5], 1)); // 2
console.log(hackerlandRadioTransmitters([7, 2, 4, 6, 5, 9, 12, 11], 2)); // 3
