/* -------------------------------------------------------------------------- */
/*                      Stack Linked List Implementation                      */
/* -------------------------------------------------------------------------- */

/**
 * Node definition
 *
 * @class Node
 * @typedef {Node}
 */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * Stack Linked List Implementation
 *
 * @class Stack
 * @typedef {Stack}
 */
class Stack {
  constructor() {
    this.head = null;
  }

  /**
   * push data into stack linked list
   *
   * @param {*} data
   */
  push(data) {
    let node = new Node(data);
    node.next = this.head;
    this.head = node;
  }

  /**
   * remove top of stack linked list
   *
   * @returns {*}
   */
  pop() {
    if (this.head === null) {
      return null;
    }
    let currNode = this.head;
    this.head = this.head.next;
    return currNode.data;
  }

  /**
   * remove top of stack linked list and print to log
   *
   * @returns {*}
   */
  popAndPrintFullStack() {
    if (this.head === null) {
      return null;
    }
    while (this.head !== null) {
      console.log(this.head.data);
      this.head = this.head.next;
    }
  }

  /** remove all elements from stack */
  popFullStack() {
    this.head = null;
  }

  /**
   * print stack but do not remove any elements
   *
   * @returns {*}
   */
  printStack() {
    let currNode = this.head;
    let nodeArray = [];
    if (this.head === null) {
      console.log("stack is empty!");
    }

    while (currNode !== null) {
      nodeArray.push(currNode.data);
      currNode = currNode.next;
    }
    console.log(nodeArray.reverse());
  }
}

/* -------------------------------- Stack Use ------------------------------- */

let stack = new Stack();
stack.push(10);
stack.push(15);
stack.push(20);
stack.push(25);
stack.printStack();

console.log("---pop---");
stack.pop();
stack.printStack();

console.log("---printStack---");
stack.pop();
stack.printStack();

console.log("---popAndPrint---");
stack.popAndPrintFullStack();

console.log("---printStack---");
stack.printStack();

console.log("---pushing more data---");
stack.push(10);
stack.push(15);
stack.push(20);
stack.push(25);

console.log("---printStack---");
stack.printStack();

console.log("---popFullStack---");
stack.popFullStack();

console.log("---printStack---");
stack.printStack();
