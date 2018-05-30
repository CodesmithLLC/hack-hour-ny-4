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
  const refArr = [];
  let curNode = head.next;

  while (curNode !== null) {
    refArr.push(curNode);
    curNode = curNode.next;
  }

  for (let i = 0; i < refArr.length; i += 1) {
    if (i === 0) refArr[i].next = head;
    else refArr[i].next = refArr[i - 1];
  }
  head.next = null;

  return refArr.length === 0 ? head : refArr[refArr.length - 1];
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
