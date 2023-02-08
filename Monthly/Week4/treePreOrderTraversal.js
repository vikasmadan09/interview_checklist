// Complete the preOrder function in the editor below, which has 1 parameter: a pointer to the root of a binary tree.
// It must print the values in the tree's preorder traversal as a single line of space-separated values.

// Input Format

// Our test code passes the root node of a binary tree to the preOrder function.

// Constraints
// 1 <= Nodes in the tree <= 500

// Output Format

// Print the tree's preorder traversal as a single line of space-separated values.

// Sample Input

//      1
//       \
//        2
//         \
//          5
//         /  \
//        3    6
//         \
//          4
// Sample Output

// 1 2 5 3 4 6
// Explanation

// The preorder traversal of the binary tree is printed.

var Tree = function () {
  this.root = null;
};

Tree.prototype.insert = function (node, data) {
  if (node == null) {
    node = new Node(data);
  } else if (data < node.data) {
    node.left = this.insert(node.left, data);
  } else {
    node.right = this.insert(node.right, data);
  }

  return node;
};

var Node = function (data) {
  this.data = data;
  this.left = null;
  this.right = null;
};

/*
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function preOrder(root) {
  let data = [];
  function traverseNode(node) {
    data.push(node.data);
    if (node.left) traverseNode(node.left);
    if (node.right) traverseNode(node.right);
  }
  traverseNode(root);
  return data;
}

const tree = new Tree();
const arr1 = [1, 2, 5, 3, 6, 4];
for (let i = 0; i < arr1.length; i++) {
  tree.root = tree.insert(tree.root, arr1[i]);
}

console.log(preOrder(tree.root)); // 1 2 5 3 4 6

const tree1 = new Tree();
const arr2 = [1, 14, 3, 7, 4, 5, 15, 6, 13, 10, 11, 2, 12, 8, 9];
for (let i = 0; i < arr2.length; i++) {
  tree1.root = tree1.insert(tree1.root, arr2[i]);
}

console.log(preOrder(tree1.root)); // 1 14 3 2 7 4 5 6 13 10 8 9 11 12 15
