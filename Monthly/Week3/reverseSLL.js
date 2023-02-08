// Given the pointer to the head node of a linked list, change the next pointers of the nodes so that their order is reversed.
// The head pointer given may be null meaning that the initial list is empty.

// Example
// head references the list 1 -> 2 -> 3 -> null

// Manipulate the next pointers of each node in place and return head, now referencing the head of the list 3 -> 2 -> 1 -> NULL.

// Function Description
// Complete the reverse function in the editor below.
// reverse has the following parameter:
// SinglyLinkedListNode pointer head: a reference to the head of a list

// Returns
// SinglyLinkedListNode pointer: a reference to the head of the reversed list

// Input Format

// The first line contains an integer t, the number of test cases.

// Each test case has the following format:

// The first line contains an integer n, the number of elements in the linked list.
// Each of the next n lines contains an integer, the data values of the elements in the linked list.

// Constraints
// 1 <= t <= 10
// 1 <= n <= 1000
// 1<=list[i] <= 1000, where list[i] is the ith element in the list.

// Sample Input

// 1
// 5
// 1
// 2
// 3
// 4
// 5

// Sample Output
// 5 4 3 2 1

// Explanation

// The initial linked list is: 1 -> 2 -> 3 -> 4 -> 5 -> NULL.

// The reversed linked list is: 5 -> 4 -> 3 -> 2 -> 1 -> NULL.

const SinglyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

const SinglyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData) {
    const node = new SinglyLinkedListNode(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }
};

function reverse(llist) {
  let prev_node = null;
  let current = llist;
  while (current) {
    let next_node = current.next;
    current.next = prev_node;
    prev_node = current;
    current = next_node;
  }
  llist = prev_node;
  return llist;
}

const s = new SinglyLinkedList();
s.insertNode(1);
s.insertNode(2);
s.insertNode(3);
s.insertNode(4);
s.insertNode(5);
console.log(reverse(s.head)); // 5 4 3 2 1

const s1 = new SinglyLinkedList();
s1.insertNode(3);
s1.insertNode(4);
s1.insertNode(2);
s1.insertNode(5);

console.log(reverse(s1.head)); // 5 2 4 3
