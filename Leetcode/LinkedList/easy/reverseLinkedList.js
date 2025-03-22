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
   * Reverse the linked list - this is the actual problem - takes O(n) time
   */
  reverse(head) {
    let current = head;
    let prev = null;
    while (current) {
      let temp = current.next;
      current.next = prev;
      prev = current;
      current = temp;
    }
    return prev;
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

linkedList.head = linkedList.reverse(linkedList.head);
console.log("Reversed list");
linkedList.printList();
console.log("\n");
