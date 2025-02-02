class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let node = new Node();
    if (this.root === null) {
      this.root = node;
      return this;
    }

    let currNode = this.root;
    while (current) {
      if (data === currNode.data) {
        return undefined;
      }
      if (data < currNode.data) {
        if (currNode.left === null) {
          currNode.left = data;
          return this;
        }
        currNode = currNode.left;
      } else {
        if (data < currNode.data) {
          if (currNode.right === null) {
            currNode.right = data;
            return this;
          }
          currNode = currNode.right;
        }
      }
    }
  }
}

console.log("hello");
