const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");
const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

// THE GRAPH
const adjacencyList = new Map();

// Add node
function addNode(airport) {
  adjacencyList.set(airport, []);
}

// Add edge, undirected
function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}

// Create the Graph
airports.forEach(addNode);
routes.forEach((route) => addEdge(...route));

console.log(adjacencyList);

// Both BFS and DFS are O(n) i.e O(v+e)
// BFS Breadth First Search
function bfs(start) {
  const visited = new Set();
  const queue = [start];
  while (queue.length > 0) {
    const airport = queue.shift();
    const destinations = adjacencyList.get(airport);

    for (const destination of destinations) {
      if (destination === "BKK") {
        console.log("found Bangkok!");
      }
      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
        console.log(destination);
      }
    }
  }
}
bfs("PHX");

// DFS Depth First Search

function dfs(start, visited = new Set()) {
  console.log(start);
  visited.add(start);
  const destinations = adjacencyList.get(start);
  for (const destionation of destinations) {
    if (destionation === "BKK") {
      console.log("DFS found Bangkok in steps");
      return;
    }
    if (!visited.has(destionation)) {
      dfs(destionation, visited);
    }
  }
}

dfs("PHX");
