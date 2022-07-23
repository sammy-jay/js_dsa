class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      newNode.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = temp.next;
    this.size--;
    return temp.value;
  }
}

/**
 * Queue DS
 */
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if ((this.first == this.last) == null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    if (this.first == this.last) {
      this.last = null;
    }
    let temp = this.first.next;
    this.first = temp;
    this.size--;
    return temp.value;
  }
}

/**
 * Singly Linked list DS
 */
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    return ++this.length;
  }
  pop() {
    if (this.length <= 1) {
      this.head = null;
      this.tail = null;
    }
    let current = this.head;
    let newTail = null;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return current;
  }
  shift() {
    if (this.length <= 1) {
      this.head = null;
      this.tail = null;
      return;
    }
    let newHead = this.head.next;
    this.head = newHead;
    this.length--;
    return newHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    let secHead = this.head.next;
    newNode.next = secHead;
    this.head = newNode;
    this.length++;
  }
  get(index) {
    if (index < 0 || index > this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter != index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    if (index < 0 || index > this.length) return null;
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let current = this.head;
    let prev = null;
    let counter = 0;
    while (counter != index) {
      prev = current;
      current = current.next;
      counter++;
    }
    prev.next = newNode;
    newNode.next = current;
    this.length++;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const previousNode = this.get(index - 1);
    const removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
  reverse() {
    if (!this.head) return null;
    let current = this.head;
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
}
