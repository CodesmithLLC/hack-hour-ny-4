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
  let curr = head;
  this.length = 1;
  let desiredIndex; 

  while (curr.next) {
  	console.log('this.length: ' , this.length);
  	curr = curr.next;
  	this.length++;

  	if (this.length === desiredIndex) {
  	  console.log('curr', curr);
  	}
  }

  desiredIndex = this.length - k; 


  console.log('desired index: ', desiredIndex);

  // gets to the tail 

  console.log('last element', curr);
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};

 const a = new Node('A');
 const b = new Node('B');
 const c = new Node('C');
 const d = new Node('D');
 const e = new Node('E');

 a.next = b;
 b.next = c;
 c.next = d;
 d.next = e;

kthToLastNode(2, a);
