// In this challenge, there is a connected undirected graph where each of the nodes is a color.
// Given a color, find the shortest path connecting any two nodes of that color.
// Each edge has a weight of 1.If there is not a pair or if the color is not found, print -1.

// For example, given graph_nodes = 5, and 4 edges g_from = [1,2,2,3] and g_to = [2,3,4,5] and colors for each node are arr=[1,2,3,1,3] we can draw the following graph:

// 1/1 (G) -- 2/2(R) -- 3/3 (B) -- 5/3 (b)
//         |
//        4/1 (G)

// Each of the nodes is labeled [node]/[color] and is colored appropriately.
// If we want the shortest path between color 3, blue, we see there is a direct path between nodes 3 and 5.
// For green, color 1, we see the path length 2 from 1-> 2-> 4.There is no pair for node 4 having color 2, red.

// Function Description

// Complete the findShortest function in the editor below.
// It should return an integer representing the length of the shortest path between two nodes of the same color, or - 1 if it is not possible.

// findShortest has the following parameter(s):

// g_nodes: an integer, the number of nodes
// g_from: an array of integers, the start nodes for each edge
// g_to: an array of integers, the end nodes for each edge
// ids: an array of integers, the color id per node
// val: an integer, the id of the color to match

// Input Format

// The first line contains two space-separated integers n and m, the number of nodes and edges in the graph.
// Each of the next m lines contains two space-separated integers g_from[i] and g_to[i], the nodes connected by an edge.
// The next line contains n space-seperated integers, ids[i], representing the color id of each node from 1 to n.
// The last line contains the id of the color to analyze.

// Note: The nodes are indexed from 1 to n.

// Constraints
// 1 <= n <= 10 ^ 6
// 1 <= m <= 10^ 6;
// 1 <= ids[i] <= 10 ^ 8

// Output Format
// Print the single integer representing the smallest path length or -1.

// Sample Input 0
// 4 3
// 1 2
// 1 3
// 4 2
// 1 2 1 1
// 1

// Sample Output 0
// 1

// Explanation 0
// 1/1(G) -- 2/2 (R) -- 4/1 (G)
//   |
//  3/1(G)

// In the above image the distance between the closest nodes having color label 1 is 1.

// Sample Input 1

// 4 3
// 1 2
// 1 3
// 4 2
// 1 2 3 4
// 2

// Sample Output 1
// -1

// Explanation 1

// 1/1(G) -- 2/2 (R) -- 4/4 (Y)
//  |
// 3/3 (B)

// Sample Input 2
// 5 4
// 1 2
// 1 3
// 2 4
// 3 5
// 1 2 3 3 2
// 2

// Sample Output 2
// 3

// Explanation 2
//          1/1 (G)
//          /  \
//        2/2  3/3
//         |    |
//       4/3(B) 5/2(R)

/*
 * For the unweighted graph, <name>:
 *
 * 1. The number of nodes is <name>Nodes.
 * 2. The number of edges is <name>Edges.
 * 3. An edge exists between <name>From[i] to <name>To[i].
 *
 */
function findShortest(graphNodes, graphFrom, graphTo, ids, val) {
  // solve here
  //   console.log(graphNodes);
  //   console.log(graphFrom);
  //   console.log(graphTo);
  //   console.log(ids);
  //   console.log(val);
  const map = Array(graphNodes);
  const distance = new Map();

  for (let i = 0; i < graphNodes; i++) {
    map[i] = [];
  }
  for (let i = 0; i < graphFrom.length; i++) {
    map[graphFrom[i] - 1].push(graphTo[i]);
    map[graphTo[i] - 1].push(graphFrom[i]);
  }

  const queue = [];
  for (let i = 0; i < ids.length; i++) {
    if (ids[i] === val) {
      queue.push(i + 1);
      distance.set(i + 1, 0);
    }
  }
  if (queue.length < 2) return -1;
  console.log(queue);
  let visited = new Set();
  while (queue.length > 0) {
    let current = queue.shift();
    visited.add(current);
    for (let a of map[current - 1]) {
      // shortest distance
      if (distance.has(a) && !visited.has(a)) {
        return distance.get(a) + distance.get(current) + 1;
      } else {
        queue.push(a);
        distance.set(a, distance.get(current) + 1);
      }
    }
  }
  return -1;
}
console.log(findShortest(4, [1, 1, 4], [2, 3, 2], [1, 2, 1, 1], 1)); // 1
console.log(findShortest(4, [1, 1, 4], [2, 3, 2], [1, 2, 3, 4], 2)); // -1
console.log(findShortest(5, [1, 1, 2, 3], [2, 3, 4, 5], [1, 2, 3, 3, 2], 2)); // 3
