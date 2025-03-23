import * as utils from "../../../Data Structures/index.js";

let tree = new utils.BST([15, 25, 10, 7, 22, 17, 13, 5, 9, 27]);

var bfsInvert = function (root) {
  if (root == null) return null;
  const queue = new utils.Queue();
  queue.enqueue(root);
  while (!queue.isEmpty()) {
    let node = queue.dequeue();
    [node.left, node.right] = [node.right, node.left];
    if (node.left != null) queue.enqueue(node.left);
    if (node.right != null) queue.enqueue(node.right);
  }
  return root;
};

var dfsInvert = function (root) {
  if (root === null) return null;
  const stack = new utils.Stack();
  stack.push(root);
  while (!stack.isEmpty()) {
    let node = stack.pop();
    [node.left, node.right] = [node.right, node.left];
    if (node.right !== null) stack.push(node.right);
    if (node.left !== null) stack.push(node.left);
  }
  return root;
};

console.log("Original Tree");
console.log("------------");
tree.printTree();

console.log("\n\n");

console.log("Inverted Tree");
console.log("------------");
bfsInvert(tree.getRootNode()); // or dfsInvert(tree.getRootNode());
tree.printTree();
