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
 * 512 + 295 = 807
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  // console.log('l1: ', JSON.stringify(l1, null, 2));
  // console.log('l2: ', JSON.stringify(l2, null, 2));

  if (!l2) return l1;

  let output = new LinkedList(); 
  const sumOne = getSum(l1);
  const sumTwo = getSum(l2);

  const outputSum = +sumOne.reverse().join('') + +sumTwo.reverse().join('');
  let reversedNodes = outputSum.toString().split('');

  let curr = output.head;
  for (let i = reversedNodes.length - 1; i >= 0; i--) {
    if (!curr) {
      curr = new Node(+reversedNodes[i]);
      output.head = curr;
    } else {
      curr.next = new Node(+reversedNodes[i]);
      output.tail = curr.next;
    }

  }
}


getSum = (list) => {
  let sum = [];
  if (list.head) {
    let curr = list.head;
    while (curr) {
      sum.push(curr.value);
      curr = curr.next;
    }

    return sum;
  } else {
    return 0;
  }
}

console.log(addLinkedList(l1, l2));

module.exports = {Node: Node, addLinkedList: addLinkedList};
