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
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  let curL1Node = l1;
  let curL2Node = l2;
  let newList = null;
  let carryVal = 0;
  let sumVal;
  let nodeVal;
  let curNewListNode;

  while (curL1Node !== null) {
    sumVal = curL1Node.value + curL2Node.value;
    nodeVal = (sumVal + carryVal > 9 ? sumVal - 10 : sumVal) + carryVal;
    // Calculate new carry value
    carryVal = sumVal + carryVal > 9 ? 1 : 0;

    if (newList === null) {
      newList = new Node(nodeVal);
      curNewListNode = newList;
    } else {
      curNewListNode.next = new Node(nodeVal);
      curNewListNode = curNewListNode.next;
    }

    curL1Node = curL1Node.next;
    curL2Node = curL2Node.next;
  }

  return newList;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
