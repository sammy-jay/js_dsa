 class Stack {
  constructor(array = []) {
    this.array = array;
    this._size = array.length;
  }

  getBuffer() {
    return this.array.slice();
  }

  isEmpty() {
    return this.array.length === 0;
  }

  getSize() {
    return this._size;
  }

  // Peek - O(1)
  peek() {
    return this.array[this.getSize() - 1];
  }

  // Insertion - O(1)
  push(value) {
    this.array.push(value);
    this._size++;
  }

  // Deletion - O(1)
  pop() {
    this._size--;
    return this.array.pop();
  }
}

module.exports = Stack

// Access - O(n)
function getNthTopElem(stack, n) {
  const bufferArray = stack.getBuffer();
  if (n < 0) throw "Invalid nth term";

  const bufferStack = new Stack(bufferArray);
  let i = 1;
  while (i < n) {
    //  (--n !== 0)
    bufferStack.pop();
    i++;
  }
  return bufferStack.pop();
}

// Search - O(n)
function stackSearch(stack, elem) {
  const bufferArray = stack.getBuffer();
  const bufferStack = new Stack(bufferArray);

  while (!bufferStack.isEmpty()) {
    if (bufferStack.pop() === elem) {
      return true;
    }
  }
  return false;
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

// 5 - 4 - 3 - 2 - 1
console.log(stack);
console.log(getNthTopElem(stack, 3));
console.log(stackSearch(stack, 13));
