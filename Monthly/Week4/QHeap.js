// This question is designed to help you get a better understanding of basic heap operations.

// There are 3 types of query:

// "1 v" - Add an element v to the heap.
// "2 v" - Delete the element v from the heap.
// "3" - Print the minimum of all the elements in the heap.

// NOTE: It is guaranteed that the element to be deleted will be there in the heap.
// Also, at any instant, only distinct elements will be in the heap.

// Input Format

// The first line contains the number of queries, Q.
// Each of the next Q lines contains one of the 3 types of query.

// Constraints
// 1 <= Q <= 10 ^ 5
// - 10 ^ 9 <= v <= 10 ^ 9

// Output Format

// For each query of type 3, print the minimum value on a single line.

// Sample Input

// STDIN       Function
// -----       --------
// 5           Q = 5
// 1 4         insert 4
// 1 9         insert 9
// 3           print minimum
// 2 4         delete 4
// 3           print minimum

// Sample Output
// 4
// 9

// Explanation

// After the first 2 queries, the heap contains {4, 9}. Printing the minimum gives 4 as the output.
// Then, the 4th query deletes 4 from the heap, and the 5th query gives 9 as the output.

function processData(input) {
  input = input.match(/.+/g);
  const heap = new createHeap();

  for (let i = 1; i < input.length; i++) {
    const [type, data] = input[i].split(" ");
    if (type === "1") {
      heap.push(Number(data));
    } else if (type === "2") {
      heap.remove(Number(data));
    } else if (type === "3") {
      console.log(heap.front());
    }
  }
}

class createHeap {
  constructor() {
    this.values = [];
  }
  push(elem) {
    this.values.push(elem);
    this.bubbleUp(this.values.length - 1);
  }
  bubbleUp(idx) {
    let element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element >= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    let min = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown(0);
    }
    return min;
  }
  sinkDown(idx = 0) {
    const length = this.values.length;
    const element = this.values[idx];
    while (true) {
      let leftChildIdx = idx * 2 + 1;
      let rightChildIdx = idx * 2 + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild < element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap == null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
  remove(elem) {
    let idx = this.values.indexOf(elem);
    let temp = this.values[this.values.length - 1];
    this.values[this.values.length - 1] = this.values[idx];
    this.values[idx] = temp;
    this.values.length--;
    this.sinkDown(idx);
  }
  front() {
    return this.values[0];
  }
}

console.log(
  processData(`12
1 10
1 9
3
1 3
3
2 9
3
2 3
3
1 5
1 2
3`)
); // 9 3 3 10 2
console.log(
  processData(`5
1 4
1 9
3
2 4
3`)
); // 4 9
