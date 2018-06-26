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
  const newArr = [];

  let current = head;

  while (current) {
    newArr.push(current);
    current = current.next;
  }

  const returnList = newArr.pop();

  current = returnList;

  while (newArr.length) {
    current.next = newArr.pop();
    current = current.next();
  }

  current.next = null;
  return returnList;
}

module.exports = { Node, reverseLinkedList };

// 5, 4, 3, 2
