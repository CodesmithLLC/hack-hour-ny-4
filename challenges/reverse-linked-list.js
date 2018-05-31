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
  let list = [];
  var curr1 = head;
  while(curr1.next !== null) {
    list.push(curr1.value);
    curr1 = curr1.next
  }
  list.push(curr1.value);
  let backArr = list.reverse();
  
  let backList = new Node(list[0]);
  let curr2 = backList;
  for(var i = 1; i < list.length; i++) { 
    curr2.next = new Node(list[i]);
    curr2 = curr2.next;
  }
  return backList;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
