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
 * 512 + 295 = 807
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  // console.log('l1: ', JSON.stringify(l1, null, 2));
  // console.log('l2: ', JSON.stringify(l2, null, 2));

  // create an output LL
  let output = new LinkedList; 

  // if length of the lls are different
  // loop through the bigger one 
    // add the values of each node directly to new LL until length of LL2 is the same 

  // if the length of the lls are the same
  // loop through LL1 from end to beginning
     // add the LL1 last node's value to LL2 last node's value 
     // create a node containing that sum to the output LL
     // call helper func that reverses order of output LL, input node
}

let l1 = new LinkedList();
l1.head = new Node(2);
l1.head.next = new Node(1);
l1.head.next.next = new Node(5);
l1.tail = l1.head.next.next;
// l1.next.next.next = new Node(5);
let l2 = new LinkedList();
l2.head = new Node(5);
l2.head.next = new Node(9);
l2.head.next.next = new Node(2);
l2.tail = l2.head.next.next;

console.log(addLinkedList(l1, l2));

function reverseLinkedList(l3) {
  // reverse list 
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
