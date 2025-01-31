/* -------------------------------------------------------------------------- */
/*                         Linked List Implementation                         */
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
 * LinkedList Implementation
 *
 * @class LinkedList
 * @typedef {LinkedList}
 */
class LinkedList {
  constructor() {
    this.head = null;
  }

  /**
   * push an elemenet to back of linkedList
   *
   * @param {*} data
   */
  push(data) {
    let node = new Node(data);
    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
  }

  /**
   * Push new element to the front of linked list
   *
   * @param {*} data
   */
  prepend(data) {
    let node = new Node(data);
    if (this.head === null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  /**
   * Add a data element to linked list at specified index
   * and shifting other elements to the right
   *
   * @param {*} data
   * @param {*} index
   */
  addAtIndex(data, index) {
    let node = new Node(data);
    let currentIndex = 0;
    let current;

    if (this.head === null) {
      return;
    }
    if (index === 0) {
      this.prepend(data);
    } else {
      currentIndex++;
    }

    current = this.head;
    while (currentIndex !== index) {
      currentIndex++;
      current = current.next;
    }
    node.next = current.next;
    current.next = node;
  }

  /**
   * Replace data in linked list at specified index
   *
   * @param {*} data
   * @param {*} index
   */
  replaceDataAtIndex(data, index) {
    let node = new Node(data);
    let currentIndex = 0;
    let current, previousCurrent;

    if (this.head === null) {
      return;
    }
    if (index === 0) {
      node.next = this.head.next;
      this.head = node;
    } else {
      currentIndex++;
      current = this.head.next;
      previousCurrent = this.head;

      while (currentIndex !== index) {
        currentIndex++;
        previousCurrent = current;
        current = current.next;
      }

      node.next = current.next;
      previousCurrent.next = node;
    }
  }

  /** Delete element at the end of linked list */
  pop() {
    let curr, prev;
    if (this.head == null) {
      return;
    }
    if (this.head.next == null) {
      this.head = null;
    }
    curr = this.head.next;
    prev = this.head;

    while (curr.next != null) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = null;
  }

  /** Delete element at index 0 */
  frontPop() {
    if (this.head == null) {
      return;
    }
    this.head = this.head.next;
  }

  /** Prints Linked List elements */
  printList() {
    let dataList = [];
    let current = this.head;

    while (current !== null) {
      dataList.push(current.data);
      current = current.next;
    }

    console.log(dataList);
  }
}

/* ----------------------------- Linked List Use ---------------------------- */

let linkedList = new LinkedList();
console.log("Default list");
linkedList.push(10);
linkedList.push(15);
linkedList.push(20);
linkedList.push(25);
linkedList.printList();
console.log("\n");

console.log("prepending value of 3");
linkedList.prepend(3);
linkedList.printList();

console.log("adding value 5 at index 3");
linkedList.addAtIndex(5, 3);
linkedList.printList();

console.log("replace value at index 4 with value of 1");
linkedList.replaceDataAtIndex(1, 4);
linkedList.printList();

console.log("replace value at index 0 with value of 1");
linkedList.replaceDataAtIndex(1, 0);
linkedList.printList();

console.log("removing last element in linked list");
linkedList.pop();
linkedList.printList();

console.log("remove element at index 0");
linkedList.frontPop();
linkedList.printList();
