/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 * 512 + 295 = 807
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
  let carry = 0;
  let newNode = new Node(null);
	let result = newNode;
  let currL1 = l1;
  let currL2 = l2;
  while(currL1 && currL2) {
    let addVal = currL1.value + currL2.value + carry;
    if(addVal >= 10) {
      addVal = addVal - 10;
      carry = 1;
    } else {
      carry = 0;
    }
    newNode.value = addVal;

    currL1 = currL1.next;
    currL2 = currL2.next;
		if(currL1 && currL2) {
			newNode.next = new Node(null);
			newNode = newNode.next;
		}
  }
  if(currL1) newNode.next = currL1;
  if(currL2) newNode.next = currL2;
  return result;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
