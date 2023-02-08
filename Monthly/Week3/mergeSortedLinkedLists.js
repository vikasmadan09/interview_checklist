// Given pointers to the heads of two sorted linked lists, merge them into a single, sorted linked list. Either head pointer may be null meaning that the corresponding list is empty.

// Example
// headA refers to 1 -> 3 -> 7 -> NULL
// headB refers to 1 -> 2 -> NULL
// The new list is 1 -> 1 -> 2 -> 3 -> 7 -> NULL

// Function Description

// Complete the mergeLists function in the editor below.

// mergeLists has the following parameters:

// * SinglyLinkedListNode pointer headA: a reference to the head of a list
// * SinglyLinkedListNode pointer headB: a reference to the head of a list

// Returns
// SinglyLinkedListNode pointer: a reference to the head of the merged list

// Input Format

// The first line contains an integer t, the number of test cases.

// The format for each test case is as follows:

// The first line contains an integer n, the length of the first linked list.
// The next n lines contain an integer each, the elements of the linked list.
// The next line contains an integer m, the length of the second linked list.
// The next m lines contain an integer each, the elements of the second linked list.

// Constraints
// 1 <= t <= 10
// 1 <= navigator, m <= 1000
// 1 <= list[i] <= 1000, where list[i] is the ith element of the list.

// Sample Input
// 1
// 3
// 1
// 2
// 3
// 2
// 3
// 4

// Sample Output
// 1 2 3 3 4

// Explanation

// The first linked list is: 1 -> 3 -> 7 -> NULL

// The second linked list is: 2 -> 3 -> 4 -> NULL

// Hence, the merged linked list is: 1 -> 2 -> 3 -> 3 -> 4 -> NULL

class SinglyLinkedListNode {
  constructor(node) {
    this.data = node;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(data) {
    let node = new SinglyLinkedListNode(data);
    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }
}

function mergeLists(head1, head2) {
  if (head1 === null) return head2;
  if (head2 === null) return head1;
  if (head1.data < head2.data) {
    head1.next = mergeLists(head1.next, head2);
    return head1;
  } else {
    head2.next = mergeLists(head1, head2.next);
    return head2;
  }
}

const s = new SinglyLinkedList();
s.insertNode(1);
s.insertNode(2);
s.insertNode(3);
const s2 = new SinglyLinkedList();
s2.insertNode(3);
s2.insertNode(4);

console.log(JSON.stringify(mergeLists(s.head, s2.head))); // 1 2 3 3 4

const l1 = new SinglyLinkedList();
l1.insertNode(4);
l1.insertNode(5);
l1.insertNode(6);
const l2 = new SinglyLinkedList();
l2.insertNode(1);
l2.insertNode(2);
l2.insertNode(10);

console.log(JSON.stringify(mergeLists(l1.head, l2.head))); // 1 2 4 5 6 10
