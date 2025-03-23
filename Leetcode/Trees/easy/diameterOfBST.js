import * as utils from "../../../Data Structures/index.js";

let tree = new utils.BST([1, 2, 3, 4, 5]); // this is not inserted level order!!

/* -------------------------------------------------------------------------- */
/*                            Brute Force Solution                            */
/* -------------------------------------------------------------------------- */

// Time Complexity: O(N^2)
// Space Complexity: O(N)
function bruteForceDiameter(root) {
  if (root === null) {
    return 0;
  }
  let left = findMaxDepth(root.left);
  let right = findMaxDepth(root.right);
  let maxHeight = left + right;
  let subTree = Math.max(
    bruteForceDiameter(root.left),
    bruteForceDiameter(root.right)
  );
  return Math.max(maxHeight, subTree);
}

function findMaxDepth(root) {
  if (root === null) {
    return 0;
  }
  return 1 + Math.max(findMaxDepth(root.left), findMaxDepth(root.right));
}

/* -------------------------------------------------------------------------- */
/*                           DFS Recursive Solution                           */
/* -------------------------------------------------------------------------- */

// Time Complexity: O(N)
// Space Complexity: O(height)
function diameterOfBinaryTree(root) {
  const diameter = [0];
  diameterRecursive(root, diameter);
  return diameter[0];
}

function diameterRecursive(root, diameter) {
  if (root === null) {
    return null;
  }

  // Get height of both sides of root
  let left = diameterRecursive(root.left, diameter);
  let right = diameterRecursive(root.right, diameter);

  //calculate the currentDiameter
  let currentDiameter = left + right;

  // Set largest value seen
  diameter[0] = Math.max(diameter[0], currentDiameter);

  return 1 + Math.max(left, right);
}

console.log(diameterOfBinaryTree(tree.getRootNode()));
console.log(bruteForceDiameter(tree.getRootNode()));
