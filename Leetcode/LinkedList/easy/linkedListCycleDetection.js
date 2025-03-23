import {
  Node,
  LinkedList,
} from "../../../Data Structures/LinkedLIst/linkedlist.js";

/**
 * Detect cycle in linked list
 *
 * @param {Node} head
 * @return {boolean}
 */
var hasCylce = function (head) {
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

console.log("Does cylce exist?");
linkedList.head.next.next.next.next = linkedList.head;
console.log(hasCylce(linkedList.head)); // true
console.log("\n");
