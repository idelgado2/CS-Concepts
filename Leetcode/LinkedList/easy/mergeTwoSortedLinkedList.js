import {
  Node,
  LinkedList,
} from "../../../Data Structures/LinkedLIst/linkedlist.js";

/**
 * Merge two sorted linked lists
 *
 * @param {Node} l1
 * @param {Node} l2
 * @return {Node}
 */
var mergeTwoLists = function (l1, l2) {
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
};

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

let mergedList = mergeTwoLists(linkedList.head, linkedList2.head);
let mList = new LinkedList(mergedList);
console.log("Merged list");
mList.printList();
