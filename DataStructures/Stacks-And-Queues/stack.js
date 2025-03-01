// node class
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// stack class
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // push method
  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }
}
