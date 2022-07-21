// f(n) = n => T O(n), M O(1)
function reverseList(head) {
  let current = head;
  let prev = null;
  while (current) {
    temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
}

// T O(n), M O(n)
function reverseListRecursively(head) {
  if (!head) {
    return null;
  }
  let newHead = head;
  if (head.next) {
    newHead = reverseListRecursively(head.next);
    head.next.next = head
  }
  head.next = null
  return newHead;
}
