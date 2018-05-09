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

function kthToLastNode(k, head) {
<<<<<<< HEAD
  var length = 0;
  var curr = head;
  while(curr.next !== null) {
    curr = curr.next;
    length++;
  }
  var target = length - k;
  curr = head;
  var finder = 0;
  while(finder <= target) {
    curr = curr.next;
    finder++;
  }
  return curr.value;
=======

>>>>>>> 05e9e8999607914c1bc817c3975d8afe09f40a6b
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
