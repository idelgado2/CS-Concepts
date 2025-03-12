/* -------------------------------------------------------------------------- */
/*                     Queue LinkedList JS Implementation                     */
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
 * Queue Linked Lis Implementation
 * Last In First Out (LIFO)
 * @class Queue
 * @typedef {Queue}
 */
class Queue {
  constructor() {
    this.head = null;
  }

  /**
   * Add data to queue
   *
   * @param {*} data
   */
  enqueue(data) {
    let node = new Node(data);
    if (this.head === null) {
      this.head = node;
    } else {
      let currNode = this.head;
      while (currNode.next !== null) {
        currNode = currNode.next;
      }
      currNode.next = node;
    }
  }

  /**
   * Remove element from front of queue
   *
   * @returns {*}
   */
  dequeue() {
    if (this.head !== null) {
      let currNode = this.head.data;
      this.head = this.head.next;
      return currNode;
    }
    return null;
  }

  /** print out all elements of queue without removing */
  printQueue() {
    if (this.head === null) {
      console.log("Queue is empty.");
    } else {
      let mylist = [];
      let currNode = this.head;
      while (currNode !== null) {
        mylist.push(currNode.data);
        currNode = currNode.next;
      }
      console.log(mylist);
    }
  }
}

/* -------------------------------- Queue Use ------------------------------- */

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(15);
queue.enqueue(20);
queue.enqueue(25);

queue.printQueue();

console.log("---dequeue---");
queue.dequeue();
queue.printQueue();

console.log("---dequeue---");
queue.dequeue();
queue.printQueue();
