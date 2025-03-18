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
   * Merge two sorted linked lists
   *
   * @param {Node} l1
   * @param {Node} l2
   * @return {Node}
   */
  mergeTwoLists(l1, l2) {
    let dummyData = { data: 0, next: null };
    let node = dummyData;

    while (l1 && l2) {
      if (l1.data < l2.data) {
        node.next = l1;
        l1 = l1.next;
      } else {
        node.next = l2;
        l2 = l2.next;
      }
      node = node.next;
    }

    if (l1) {
      node.next = l1;
    } else {
      node.next = l2;
    }

    return dummyData.next;
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

let linkedList2 = new LinkedList();
console.log("Default list 2");
linkedList2.push(5);
linkedList2.push(12);
linkedList2.push(18);
linkedList2.push(22);
linkedList2.printList();
console.log("\n");

let mergedList = linkedList.mergeTwoLists(linkedList.head, linkedList2.head);
console.log("Merged list");
let dataList = [];
let current = mergedList;
while (current !== null) {
  dataList.push(current.data);
  current = current.next;
}
console.log(dataList);
console.log("\n");
