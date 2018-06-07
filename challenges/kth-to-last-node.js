/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}
// function SinglyLinkedList(arr = []) {
//   this.head = null;
//   this.tail = null;
//   this.length = 0;
// }

function kthToLastNode(k, head) {
  let index = 0;
  if (index >= this.head) return null;
  while (this.head.next) {
    this.head = this.head.next;
    index++;
  }
  if (index === this.head - 1 - k) return this.value;
}

module.exports = { Node, kthToLastNode };
