/**
 * The general definition of the depth of a node is the number of edges on the longest path between the root node and a leaf node.
 * in this Leetcode problem the depth is defined as the number of nodes along the longest path from the root node down to the farthest leaf node.
 */

import * as utils from "../../../Data Structures/index.js";

let tree = new utils.BST([15, 25, 10, 7, 22, 17, 13, 5, 9, 27]);

var maxDepthDFS = function (root) {
  const stack = new utils.Stack();
  stack.push([root, 1]);
  let result = 0;
  while (stack.size() > 0) {
    const current = stack.pop();
    const node = current[0];
    const depth = current[1];
    if (node !== null) {
      result = Math.max(result, depth);
      stack.push([node.left, depth + 1]);
      stack.push([node.right, depth + 1]);
    }
  }
  return result;
};

function maxDepthDFSRecursive(root) {
  if (root === null) {
    return 0;
  }
  const leftDepth = maxDepthDFSRecursive(root.left);
  const rightDepth = maxDepthDFSRecursive(root.right);
  return Math.max(leftDepth, rightDepth) + 1;
}

console.log(
  "Max Depth of the Tree is: ",
  maxDepthBFSRecursive(tree.getRootNode())
);
