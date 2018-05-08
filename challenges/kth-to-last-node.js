/* eslint-disable */
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

// ['A', 'B', 'C', 'D', 'E']

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
	let valHist = [];
	let curNode = head;
	
	// Need to find the end
	while(curNode.next !== null) {
		valHist.unshift(curNode.value);
		if (valHist.length > k) valHist.pop();
		curNode = curNode.next;
	}
	// Handle last value
	valHist.unshift(curNode.value);
	if (valHist.length > k) valHist.pop();

	return valHist[k - 1];
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
