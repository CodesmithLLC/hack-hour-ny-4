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
        var node = head;
        var previous = null;
      
        while(node) {
          var temp = node.next;
          node.next = previous;
          previous = node;
          node = temp;
        }
        return previous;  
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
