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

  /**
   * Detect cycle in linked list
   *
   * @param {Node} head
   * @return {boolean}
   */
  hasCycle(head) {
    let fast = head;
    let slow = head;

    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;

      if (fast === slow) {
        return true;
      }
    }

    return false;
  }
}
