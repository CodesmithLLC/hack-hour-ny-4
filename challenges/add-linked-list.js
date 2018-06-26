/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.head = val;
  this.next = null;
}

function addLinkedList(l1, l2) {



}

Node.prototype.push = (val) => {
  const node = new Node(val);
  if (!this.head) {
    this.head = node;
    
  }
}

const l1Node = new Node();
l1Node.push(2);
l1Node.push(1);
l1Node.push(5);

const l2Node = new Node();
l2Node.push(5);
l2Node.push(9);
l2Node.push(2);



console.log(addLinkedList(l1Node, l2Node));

module.exports = {Node: Node, addLinkedList: addLinkedList};

// 
