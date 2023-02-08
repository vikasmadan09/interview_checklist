// WEEK 3

// Given the pointer to the head node of a doubly linked list, reverse the order of the nodes in place. That is, change the next and prev pointers of the nodes so that the direction of the list is reversed. Return a reference to the head node of the reversed list.

// Note: The head node might be NULL to indicate that the list is empty.

// Function Description

// Complete the reverse function in the editor below.
// reverse has the following parameter(s):
// DoublyLinkedListNode head: a reference to the head of a DoublyLinkedList

// Returns
// - DoublyLinkedListNode: a reference to the head of the reversed list

// Input Format
// The first line contains an integer t, the number of test cases.

// Each test case is of the following format:

// The first line contains an integer n, the number of elements in the linked list.
// The next n lines contain an integer each denoting an element of the linked list.

// Constraints
// 1 <= t <= 10;
// 0 <= n <= 1000;
// 0 <= DoublyLinkedListNode.data <= 1000;

// Output Format

// Return a reference to the head of your reversed list. The provided code will print the reverse array as a one line of space-separated integers for each test case.

// Sample Input
// 1
// 4
// 1
// 2
// 3
// 4

// Sample Output
// 4 3 2 1

// Explanation

// The initial doubly linked list is: 1 <-> 2 <-> 3 <-> 4 -> NULL

// The reversed doubly linked list is: 4 <-> 3 <-> 2 <-> 1 -> NULL

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
 * Complete the 'reverse' function below.
 *
 * The function is expected to return an INTEGER_DOUBLY_LINKED_LIST.
 * The function accepts INTEGER_DOUBLY_LINKED_LIST llist as parameter.
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
function reverse(llist) {
  let temp = null;
  let curr = llist; // head;

  while (curr) {
    temp = curr.prev;
    curr.prev = curr.next;
    curr.next = temp;
    curr = curr.prev;
  }
  if (temp !== null) {
    llist = temp.prev;
  }
  return llist;
}

const d = new DoublyLinkedList();
d.insertNode(1);
d.insertNode(2);
d.insertNode(3);
d.insertNode(4);

console.log(reverse(d.head)); // 4 3 2 1

const d1 = new DoublyLinkedList();
d1.insertNode(2);
d1.insertNode(3);
d1.insertNode(4);

console.log(reverse(d1.head)); // 4 3 2

const d2 = new DoublyLinkedList();
d2.insertNode(17);
d2.insertNode(20);
d2.insertNode(23);
d2.insertNode(35);
d2.insertNode(47);

console.log(reverse(d2.head)); // 47 35 23 20 17
