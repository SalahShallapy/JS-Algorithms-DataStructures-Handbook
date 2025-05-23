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

  // pop method
  pop() {
    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }

  peek() {
    return this.first ? this.first.val : null;
  }

  isEmpty() {
    return this.size === 0;
  }
}
