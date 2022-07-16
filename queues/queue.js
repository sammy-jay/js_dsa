class Queue {
  constructor(array = []) {
    this.array = array;
    this._size = 0;
  }

  getBuffer() {
    return this.array.slice();
  }

  isEmpty() {
    return this.array.length === 0;
  }

  // Peek - O(1)
  peek() {
    return this.array[0];
  }

  // Insertion - O(1)
  enqueue(value) {
    this.array.push(value);
    this._size++;
  }

  // Deletion - O(1)
  dequeue() {
    this._size--;
    return this.array.shift();
  }
}

// Access - O(n)
function getNthTopElem(queue, n) {
  const bufferArray = queue.getBuffer();
  const bufferQueue = new Queue(bufferArray);

  if (n < 0) throw "Invalid nth term";

  let i = 1;
  while (i < n) {
    bufferQueue.dequeue();
    i++;
  }
  return bufferQueue.dequeue();
}

// Search - O(n)
function queueSearch(queue, elem) {
  const bufferArray = queue.getBuffer();
  const bufferQueue = new Queue(bufferArray);

  while (!bufferQueue.isEmpty()) {
    if (bufferQueue.dequeue() === elem) {
      return true;
    }
  }
  return false;
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

queue.dequeue();
console.log(queue);
console.log(getNthTopElem(queue, 3));
console.log(queueSearch(queue, 2));
