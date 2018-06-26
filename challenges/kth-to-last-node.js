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
  this.currNode = val; // head
  this.next = null; // tail
  this.length = 1;
}

function kthToLastNode(k, head) {
  this.head = new Node(head);
  console.log(this.head.length);

  while (this.currNode) {
    const current = this.head;
    // this.next =
  }

  // const list =
  console.log('head is: ', this.head);
}

console.log(kthToLastNode(2, a));
module.exports = { Node, kthToLastNode };
