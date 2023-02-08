// Intro:
// John has bought a new house and found a diary of the previous house owner, describing a single trip. Also there were tickets inside with source and destination points, but without dates.Help John find the original route of the trip.

// Task:
// Write a function that accepts array of tickets, where ticket has format [source: string, destination: string] and returns comma separated countries in order of visiting.

// Example:
// tickets: [["JPN", "PHL"], ["BRA", "UAE"], ["USA", "BRA"], ["UAE", "JPN"]]
// result: "USA, BRA, UAE, JPN, PHL"

const tickets = [
  ["JPN", "PHL"],
  ["BRA", "UAE"],
  ["USA", "BRA"],
  ["UAE", "JPN"],
];
const ticket2 = [["JPN", "PHL"]];
const ticket3 = [
  ["JPN", "PHL"],
  ["BRA", "UAE"],
  ["UAE", "JPN"],
];

// build the list
function buildList(tickets) {
  return tickets.reduce(
    (acc, currVal) => {
      const curr = { to: currVal[1], from: currVal[0] };
      acc.from[currVal[0]] = curr;
      acc.to[currVal[1]] = curr;
      // to find start and end
      if (!acc.from[currVal[1]]) acc.from[currVal[1]] = false;
      if (!acc.to[currVal[0]]) acc.to[currVal[0]] = false;
      return acc;
    },
    { to: {}, from: {} }
  );
}

function getStart(nodes) {
  for (let i in nodes) {
    if (!nodes[i]) return i;
  }
}

function getRoute(start, nodes) {
  let stack = [];
  let result = []; // to be returned
  while (start) {
    result.push(start);
    let node = nodes[start];
    stack.push(node);
    start = node["to"];
  }
  return result.toString();
}

const list = buildList(tickets);
console.log(list);
console.log(getRoute(getStart(list.to), list.from));
