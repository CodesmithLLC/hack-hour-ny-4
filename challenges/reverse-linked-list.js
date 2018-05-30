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
  let previous = null;
  let savedNode;
  while (head) {
    // save the next node by pointing it to another node first
    savedNode = head.next;
    // reverse pointer by assigning next to previous
    head.next = previous;
    // point previous to the current node - the head
    previous = head;
    // current node - the head - needs to point or increment to next
    head = savedNode;
  }
  // return new head of the list
  return previous;
}

module.exports = { Node, reverseLinkedList };
