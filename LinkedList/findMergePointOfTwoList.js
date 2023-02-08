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

/*
    Find merge point of two linked lists
    Note that the head may be 'null' for the empty list.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function findMergeNode(headA, headB) {
  var a = headA;
  var b = headB;
  while (a != b) {
    a = a.next ? a.next : headB;
    b = b.next ? b.next : headA;
  }
  return a.data;
}
let a1 = new SinglyLinkedList();
a1.insertNode(1);
a1.insertNode(2);
a1.insertNode(3);

let a2 = new SinglyLinkedList();
a2.insertNode(1);
a2.insertNode(2);
a2.insertNode(3);

console.log(findMergeNode(a1.head, a2.head));
