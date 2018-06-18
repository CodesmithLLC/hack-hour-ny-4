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
  //let linkedList = head; 
  let previous = null; 

  while (head) { 
    let listRef = head.next; //reference to rest of list
    head.next = previous; //reverse the pointer
    previous = head; //increment previous to next node
    head = listRef; //increment node up until null
  }//end while

  return previous; 
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};