/* -------------------------------------------------------------------------- */
/*                        Queue Array JS Implementation                       */
/* -------------------------------------------------------------------------- */

/**
 * Queue Array Implementation
 * Last In First Out (LIFO)
 * @class Queue
 * @typedef {Queue}
 */
export class Queue {
  constructor() {
    this.queue = [];
  }

  /**
   * Adds new dat to the back of the queue
   *
   * @param {*} data
   */
  enqueue(data) {
    this.queue.push(data);
  }

  /**
   * Return first element of the queue
   *
   * @returns {*}
   */
  dequeue() {
    return this.queue.shift();
  }

  /**
   * Check if queue is empty
   *
   * @returns {boolean}
   */
  isEmpty() {
    return this.queue.length === 0;
  }

  /** print all elements in queue but does not remove them */
  printQueue() {
    console.log(this.queue);
  }
}

/* -------------------------------- Queue Use ------------------------------- */

// let queue = new Queue();
// queue.enqueue(10);
// queue.enqueue(15);
// queue.enqueue(20);
// queue.enqueue(25);

// queue.printQueue();

// console.log(queue.dequeue());

// queue.printQueue();
