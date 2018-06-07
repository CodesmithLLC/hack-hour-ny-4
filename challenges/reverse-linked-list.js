/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
  while(head.next != null){
    let prevHead = head;
    let prevNext = head.next; 
    let next = head.next.next;
    head = head.next;
    head.next = prevHead; // points head.next to last node
    head = next; 
  }
  console.log(head);
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};

console.log(reverseLinkedList(a));