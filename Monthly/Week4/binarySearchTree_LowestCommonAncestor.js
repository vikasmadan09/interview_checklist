// You are given pointer to the root of the binary search tree and two values v1 and v2.
// You need to return the lowest common ancestor(LCA) of v1 and v2in the binary search tree.

//    2
//   / \
//   1  3
//     / \
//     4  5
//        |
//        6
//
// In the diagram above, the lowest common ancestor of the nodes 4 and 6 is the node 3.
// Node 3 is the lowest node which has nodes 4 and 6 as descendants.

// Function Description

// Complete the function lca in the editor below. It should return a pointer to the lowest common ancestor node of the two values given.
// lca has the following parameters:
// - root: a pointer to the root node of a binary search tree
// - v1: a node.data value
// - v2: a node.data value

// Input Format

// The first line contains an integer, n, the number of nodes in the tree.
// The second line contains n space-separated integers representing node.data values.
// The third line contains two space-separated integers, v1 and v2.

// To use the test data, you will have to create the binary search tree yourself.
// Here on the platform, the tree will be created for you.

// Constraints
// 1 <= n, node.data <= 25
// 1 <= v1, v2 <= 25
// v1 =/= v2

// The tree will contain nodes with data equal to v1 and v2.

// Output Format

// Return the a pointer to the node that is the lowest common ancestor of v1 and v2.

// Sample Input

// 6
// 4 2 3 1 7 6
// 1 7

//    4
//   /  \
//  2    7
//  /\   /
//  1 3 6

// v1 = 1 and v2 = 7.

// Sample Output

// [reference to node 4]

// Explanation

// LCA of 1 and 7 is 4, the root in this case.
// Return a pointer to the node.

function processData(input) {
  //Enter your code here
  input = input.match(/.+/g);

  let arr = input[1].split(" ");
  const [v1, v2] = input[2].split(" ");
  let tree = new BinarySearchTree();

  for (let i = 0; i < arr.length; i++) {
    tree.insert(arr[i]);
  }

  function lca(root, node1, node2) {
    // If both n1 and n2 are smaller than root,
    // then LCA lies in left
    if (root.value > node1 && root.value > node2) {
      return lca(root.left, node1, node2);
    }
    // If both n1 and n2 are greater than root,
    // then LCA lies in right
    if (root.value < node1 && root.value < node2) {
      return lca(root.right, node1, node2);
    }
    return root.value;
  }
  let res = lca(tree.root, v1, v2);
  console.log(res);
}

class Node {
  constructor(item) {
    this.value = item;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    var newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (val === current.value) return undefined;
        if (val < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
}

console.log(
  processData(`11
3 5 1 6 2 0 8 null null 7 4
5 4`)
); // 5
console.log(
  processData(`11
3 5 1 6 2 0 8 null null 7 4
5 1`)
); // 3
console.log(
  processData(`6
4 2 3 1 7 6
1 7`)
); // 4
console.log(
  processData(`2
1 2
1 2`)
); // 1
console.log(
  processData(`7
5 3 8 2 4 6 7
7 3
`)
); // 5
