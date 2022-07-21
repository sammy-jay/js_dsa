class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  findNode(value) {
    let currentRoot = this.root;
    let found = false;
    while (currentRoot) {
      if (value < currentRoot.value) {
        currentRoot = currentRoot.left;
      } else if (value > currentRoot.value) {
        currentRoot = currentRoot.right;
      } else {
        found = true;
        break;
      }
    }
    return found;
  }

  addNode(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.value > value) {
          if (currentNode.left != null) {
            currentNode = currentNode.left;
          } else {
            currentNode.left = newNode;
            break;
          }
        } else if (currentNode.value < value) {
          if (currentNode.right !== null) {
            currentNode = currentNode.right;
          } else {
            currentNode.right = newNode;
            break;
          }
        } else {
          throw new Error("Duplicates not allowed");
        }
      }
    }
  }
  bfs(root = this.root) {
    const queue = [root];
    while (queue.length) {
      let current = queue.shift();
      console.log(current.value);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }

  dfs(root = this.root) {
    const stack = [root];
    while (stack.length) {
      let current = stack.pop();
      console.log(current.value);

      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left);
    }
  }
}
const bst = new BST();
const list = ["G", "E", "W", "D", "X", "A", "F", "R", "H", "C", "L", "P"];

for (let lt of list) bst.addNode(lt);
console.log(bst.findNode("P"));
bst.bfs();
bst.dfs();

//      G
//    /  \
//   E    W
//  /\   /\
// D  F R X
