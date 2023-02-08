// Given a reference to the head of a doubly-linked list and an integer, data, create a new DoublyLinkedListNode object having data value data and insert it at the proper location to maintain the sort.

// Example

// head refers to the list 1 <-> 2 <-> 4 -> NULL
// data = 3
// Return a reference to the new list: 1 <-> 2 <-> 3 <-> 4 -> NULL.

// Function Description
// Complete the sortedInsert function in the editor below.
// sortedInsert has two parameters:
// * DoublyLinkedListNode pointer head: a reference to the head of a doubly-linked list
// * int data: An integer denoting the value of the data field for the DoublyLinkedListNode you must insert into the list.

// Returns
// DoublyLinkedListNode pointer: a reference to the head of the list

// Note: Recall that an empty list (i.e., where head = NULL ) and a list with one element are sorted lists.

// Input Format
// The first line contains an integer t, the number of test cases.
// Each of the test case is in the following format:
// * The first line contains an integer n, the number of elements in the linked list.
// * Each of the next n lines contains an integer, the data for each node of the linked list.
// * The last line contains an integer, data, which needs to be inserted into the sorted doubly-linked list.

// Constraints
// 1 <= t <= 10
// 1 <= n <= 1000
// 1 <= DoublyLinkedListNode.data <= 1000

// Sample Input

// STDIN   Function
// -----   --------
// 1       t = 1
// 4       n = 4
// 1       node data values = 1, 3, 4, 10
// 3
// 4
// 10
// 5       data = 5

// Sample Output
// 1 3 4 5 10

// Explanation

// The initial doubly linked list is:  1 <-> 3 <-> 4 <-> 10 -> NULL.

// The doubly linked list after insertion is: 1 <-> 3 <-> 4 <-> 5 <-> 10 -> NULL

const DoublyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
    this.prev = null;
  }
};

const DoublyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData) {
    let node = new DoublyLinkedListNode(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }

    this.tail = node;
  }
};
/*
 * Complete the 'sortedInsert' function below.
 *
 * The function is expected to return an INTEGER_DOUBLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_DOUBLY_LINKED_LIST llist
 *  2. INTEGER data
 */

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */
function sortedInsert(llist, data) {
  // Write your code here
  const newNode = new DoublyLinkedListNode(data);
  let curr = llist; // head

  if (data < curr.data) {
    curr.prev = newNode;
    newNode.next = curr;
    curr = newNode;
    return curr;
  }

  while (curr.next !== null && curr.data < data) {
    curr = curr.next;
  }

  if (curr.next === null && data > curr.data) {
    // TAIL
    curr.next = newNode;
    newNode.next = null;
    newNode.prev = curr;
  } else {
    newNode.next = curr;
    newNode.prev = curr.prev;

    curr.prev.next = newNode;
    curr.prev = newNode;
  }
  return llist;
}

let d = new DoublyLinkedList();
d.insertNode(1);
d.insertNode(3);
d.insertNode(4);
d.insertNode(10);
console.log(sortedInsert(d.head, 5)); // 1 3 4 5 10

let d1 = new DoublyLinkedList();
d1.insertNode(2);
d.insertNode(3);
d.insertNode(4);
console.log(sortedInsert(d1.head, 1)); // 1 2 3 4

let d2 = new DoublyLinkedList();
d2.insertNode(1);
d2.insertNode(2);
d2.insertNode(3);
console.log(sortedInsert(d2.head, 4)); // 1 2 3 4
