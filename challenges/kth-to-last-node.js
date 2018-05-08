
/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  let currentNode = head;
  let memObj = {};
  while (5 === 5){
    memObj[currentNode.value] = 0;
    for (key in memObj){
      memObj[key]++;
    }
    console.log(memObj);
    if (currentNode.next === null) {
      break;
    };
    currentNode = currentNode.next;
  }
  for (key in memObj){
    if (memObj[key] === k) return key;
  }
}


module.exports = {Node: Node, kthToLastNode: kthToLastNode};
