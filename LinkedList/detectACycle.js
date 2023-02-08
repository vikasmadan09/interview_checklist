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

// Returns true if there is a loop in linked
// list else returns false.
function detectLoop(h) {
  var s = new Set();
  let current = h;
  while (current) {
    // If we have already has this node
    // in hashmap it means their is a cycle
    // (Because you we encountering the
    // node second time).
    if (s.has(h)) return true;

    // If we are seeing the node for
    // the first time, insert it in hash
    s.add(h);

    current = current.next;
  }
  return false;
}
// Time complexity: O(n). Only one traversal of the linked list is needed.

// Space complexity: O(n). n is the space required to store nodes in the Set().

// Tortoise and Hare Algorithm
const hasCycle = (head) => {
  // initial with fast and slow pointers with head
  let slow = head;
  let fast = head;
  //traverse linked list
  while (fast && fast.next) {
    // fast moves by two
    fast = fast.next.next;
    // slow moves by one
    slow = slow.next;
    // two pointers meet, cycle
    if (fast === slow) {
      return true;
    }
  }
  return false;
};
// Time complexity: O(n). Only one traversal of the linked list is needed.
// Space complexity: O(1). No space is needed, it’s constant.
