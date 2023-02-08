// Week 4

// Determine the minimum cost to provide library access to all citizens of HackerLand.
// There are  cities numbered from 1 to n. Currently there are no libraries and the cities are not connected.
// Bidirectional roads may be built between any city pair listed in cities.A citizen has access to a library if:
// Their city contains a library.
// They can travel by road from their city to a city containing a library.

// Example
// The following figure is a sample map of HackerLand where the dotted lines denote possible roads:

// c_road = 2
// c_lib = 3
// cities = [[1, 7], [1, 3], [1, 2], [2, 3], [5, 6], [6, 8]]

// The cost of building any road is cc_road = 2, and the cost to build a library in any city is c_lib = 3.
// Build 5 roads at a cost of 5 x 2 = 10 and 2 libraries for a cost of 6. One of the available roads in the cycle 1 -> 2 -> 3 -> 1 is not necessary.

// There are q queries, where each query consists of a map of HackerLand and value of c_lib and c_road.
// For each query, find the minimum cost to make libraries accessible to all the citizens.

// Function Description
// Complete the function roadsAndLibraries in the editor below.
// roadsAndLibraries has the following parameters:
// int n: integer, the number of cities
// int c_lib: integer, the cost to build a library
// int c_road: integer, the cost to repair a road
// int cities[m][2]: each  contains two integers that represent cities that can be connected by a new road

// Returns
// - int: the minimal cost

// Input Format

// The first line contains a single integer q, that denotes the number of queries.

// The subsequent lines describe each query in the following format:
// - The first line contains four space-separated integers that describe the respective values of n, m, c_lib and c_road, the number of cities, number of roads, cost of a library and cost of a road.
// - Each of the next m lines contains two space-separated integers, u[i] and v[i], that describe a bidirectional road that can be built to connect cities u[i] and v[i].

// Constraints
// 1 <= q <= 10
// 1 <= n <= 10 ^ 5
// 0 <= m <= min(10 ^ 5, n * (n - 1) / 2)
// 1 <= c_road, c_lib <= 10 ^ 5
// 1 <= u[i], v[i] <= n
// Each road connects two distinct cities.

// Sample Input

// STDIN       Function
// -----       --------
// 2           q = 2
// 3 3 2 1     n = 3, cities[] size m = 3, c_lib = 2, c_road = 1
// 1 2         cities = [[1, 2], [3, 1], [2, 3]]
// 3 1
// 2 3
// 6 6 2 5     n = 6, cities[] size m = 6, c_lib = 2, c_road = 5
// 1 3         cities = [[1, 3], [3, 4],...]
// 3 4
// 2 4
// 1 2
// 2 3
// 5 6

// Sample Output
// 4
// 12

// Explanation
// Perform the following q = 2 queries:

// 1. HackerLand contains n = 3 cities and can be connected by m = 3 bidirectional roads.
// The price of building a library is c(lib) = 2 and the price for repairing a road is c(road) = 1.

// The cheapest way to make libraries accessible to all is to:
// Build a library in city 1 at a cost of x = 2.
// Build the road between cities 1 and 2 at a cost of y = 1.
// Build the road between cities 2 and 3 at a cost of y = 1.

// This gives a total cost of 2 + 1 + 1 = 4.
// Note that the road between cities 3 and 1 does not need to be built because each is connected to city 2.

// 2. In this scenario it is optimal to build a library in each city because the cost to build a library is less than the cost to build a road.
// There are 6 cities, so the total cost is 6 x 2 = 12.

/*
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER c_lib
 *  3. INTEGER c_road
 *  4. 2D_INTEGER_ARRAY cities
 */

function roadsAndLibraries(n, c_lib, c_road, cities) {
  if (c_lib <= c_road) return n * c_lib;
  const map = adjacencyList(cities);
  let roads = 0;
  let libs = 0;
  for (let vals of map.values()) {
    if (vals.visited) continue;
    roads += dfs(vals, map) - 1;
    libs++;
  }
  libs += n - map.size;
  return c_lib * libs + c_road * roads;
}

function dfs(vals, map, road = 0) {
  if (vals.visited) return road;
  vals.visited = true;
  vals.cities.forEach((v) => {
    road += dfs(map.get(v), map);
  });
  return road + 1;
}
function adjacencyList(cities) {
  const map = new Map();
  cities.forEach((c) => {
    const [c1, c2] = c;
    if (map.has(c1)) map.get(c1).cities.push(c2);
    else map.set(c1, { cities: [c2], visited: false });
    if (map.has(c2)) map.get(c2).cities.push(c1);
    else map.set(c2, { cities: [c1], visited: false });
  });
  return map;
}

console.log(
  roadsAndLibraries(3, 2, 1, [
    [1, 2],
    [3, 1],
    [2, 3],
  ])
); // 4
console.log(
  roadsAndLibraries(6, 2, 5, [
    [1, 3],
    [3, 4],
    [2, 4],
    [1, 2],
    [2, 3],
    [5, 6],
  ])
); // 12
console.log(
  roadsAndLibraries(6, 2, 3, [
    [1, 2],
    [1, 3],
    [4, 5],
    [4, 6],
  ])
); // 12
console.log(
  roadsAndLibraries(5, 6, 1, [
    [1, 2],
    [1, 3],
    [1, 4],
  ])
); // 15
