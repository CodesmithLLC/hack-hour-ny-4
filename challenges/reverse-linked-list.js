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

// // not in place (stores nodes in array)
// function reverseLinkedList(head) {
//   // create array to store nodes
//   const nodeStorage = [];
//   // initialize current node variable to head
//   let current = head;
//   // traverse list and push each node to nodeStorage array
//   while (current) {
//     nodeStorage.push(current);
//     current = current.next;
//   }
//   // start reversed list with the last node
//   const returnList = nodeStorage.pop();
//   // reassign current pointer to head of returnList
//   current = returnList;
//   // continue to assign next node in returnList
//   while (nodeStorage.length) {
//     current.next = nodeStorage.pop();
//     current = current.next;
//   }
//   // remove next reference of the last node (which used to be the head)
//   current.next = null;
//   // return reversed list
//   return returnList;
// }

// // in place
// function reverseLinkedListInPlace(head) {
//   // create rest and current variables to track position as we go through list
//   let rest = head.next;
//   let current = rest;
//   // remove circular reference of head to node that should be before it
//   head.next = null;

//   // traverse through list
//   while (rest) {
//     // move rest pointer to next since current is in the same place
//     rest = rest.next;
//     // point current.next to head
//     current.next = head;
//     // set head to current so that it contains the whole reversed list so far
//     head = current;
//     // set current to rest as we prepare to loop again
//     current = rest;
//   }

//   // return the head
//   return head;
// }
