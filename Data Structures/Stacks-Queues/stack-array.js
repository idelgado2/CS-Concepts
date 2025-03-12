/* -------------------------------------------------------------------------- */
/*                         Stack Array Implementation                         */
/* -------------------------------------------------------------------------- */

/**
 * Stack Array Implementation
 * Fist In First Out (FIFO)
 * @class Stack
 * @typedef {Stack}
 */
class Stack {
  constructor() {
    this.stack = [];
  }

  /**
   * push element into stack
   *
   * @param {*} data
   */
  push(data) {
    this.stack.push(data);
  }

  /** remove top element of stack */
  pop() {
    this.stack.pop();
  }

  /** print out stack */
  printStack() {
    console.log(this.stack);
  }

  /** remove every element from stack in FIFO format */
  popFullStack() {
    this.stack = [];
  }
}

/* -------------------------------- Stack Use ------------------------------- */

let stack = new Stack();

stack.push(10);
stack.push(15);
stack.push(20);
stack.push(25);
stack.printStack();
console.log("---printStack---");

console.log("---pop---");
stack.pop();
console.log("---printStack---");
stack.printStack();

console.log("---popFullStack---");
stack.popFullStack();

console.log("---printStack---");
stack.printStack();
