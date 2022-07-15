class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  insertAtHead(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      let temp = this.head;
      this.head = new Node(value);
      this.head.next = temp;
    }
    this.size++;
  }

  insertAtEnd(value) {
    if (this.head === null) {
      this.head = new Node(value);
      this.size++;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(value);
    this.size++;
  }

  insertAt(value, position) {
    if (!this.head) {
      let temp = this.head;
      this.head = new Node(value);
      this.head.next = temp;
      this.size++;
      return;
    }
    let pos = 1;
    let current = this.head;
    let prev = null;

    if (position > this.size) {
      this.insertAtEnd(value);
      return;
    }
    while (position !== pos) {
      prev = current;
      current = current.next;
      pos++;
    }
    let newNode = new Node(value);
    prev.next = newNode;
    newNode.next = current;
    this.size++;
    return;
  }

  delete(value) {
    let current = this.head;
    let prev = this.head;

    if (current.data === value) {
      temp = this.head;
      this.head = current.next;
      this.size--;
      var temp;
      return temp;
    }

    while (current) {
      if (current.data === value) {
        prev.next = current.next;
        prev = null;
        this.size--;
        return current;
      }
      prev = current;
      current = current.next;
    }
  }

  deleteAtHead() {
    let temp = this.head;
    this.head = temp.next;
    this.size--;
    return temp;
  }

  find(value) {
    let current = this.head;
    while (current) {
      if (current.data === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  print() {
    let current = this.head;
    const list = [];
    while (current.next) {
      list.push(current.data);
      current = current.next;
    }
    list.push(current.data);
    console.log(list.join(" -> "));
  }
}

function reverse(sll) {
  let current = sll.head;
  let prev = null;

  while (current) {
    let temp = current.next;
    current.next = prev;

    prev = current;
    if (!temp) break;
    current = temp;
  }
  return current;
}

function findSum(head) {
  let sum = 0;
  let current = head;
  while (current) {
    sum += current.data;
    current = current.next;
  }
  return sum;
}

function recursiveFindSum(head) {
  if (head === null) return 0;
  return head.data + recursiveFindSum(head.next);
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);

a.next = b;
b.next = c;

console.log(findSum(a));
console.log(recursiveFindSum(a));

const sll1 = new SinglyLinkedList();

console.log(sll1.isEmpty());
sll1.insertAtHead(1); // 4
// sll1.insertAtHead(3); // 2
// sll1.insertAtHead(5); // 1
// sll1.insertAtEnd(7); // 5

sll1.insertAt(4, 3); // 3
sll1.insertAt(40, 30); // 3
sll1.insertAt(60, 26); // 3
// console.log(sll1.delete(1));
// console.log(sll1.find(7));
// console.log(sll1.deleteAtHead());
// console.log(sll1.isEmpty());
sll1.print();
console.log(reverse(sll1));
