export class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export class BST {
  constructor(...args) {
    this.root = null;
    if (args.length !== 0) {
      args[0].map((x) => {
        this.insert(x);
      });
    }
  }

  getRootNode() {
    return this.root;
  }

  insert(data) {
    let node = new Node(data);

    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return null;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      var aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }
  findMinNode(node) {
    // if left of a node is null
    // then it must be minimum node
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }

  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  preorder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }

  search(node, data) {
    if (node === null) return null;
    else if (data < node.data) return this.search(node.left, data);
    else if (data > node.data) return this.search(node.right, data);
    else return node;
  }

  printNode(node, level) {
    if (!node) {
      return;
    }

    this.printNode(node.right, level + 1);
    let indentation = "    ".repeat(level);
    console.log(indentation + node.data);
    this.printNode(node.left, level + 1);
  }

  printTree() {
    this.printNode(this.root, 0);
  }
}

// let tree = new BST();
// let dataset = [15, 25, 10, 7, 22, 17, 13, 5, 9, 27];

// dataset.map((x) => {
//   tree.insert(x);
// });

// var root = tree.getRootNode();
// console.log(`root: ${root.data}`);
// tree.inorder(root);
// console.log("------------");
// tree.remove(5);
// var root = tree.getRootNode();
// console.log(`root: ${root.data}`);
// tree.inorder(root);
// console.log("------------");

// tree.remove(7);
// var root = tree.getRootNode();
// console.log(`root: ${root.data}`);

// tree.inorder(root);
// console.log("------------");

// tree.remove(15);
// var root = tree.getRootNode();
// console.log(`root: ${root.data}`);

// console.log("inorder traversal");
// tree.inorder(root);
// console.log("------------");

// console.log("postorder traversal");
// tree.postorder(root);
// console.log("------------");

// console.log("preorder traversal");
// tree.preorder(root);
