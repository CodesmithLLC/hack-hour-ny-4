/* eslint-disable */
/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {

	function listLength(list){
		let len = 1;
		let curNode = list;

		while(curNode.next !== null) {
			len += 1;
			curNode = curNode.next;
		}

		return len;
	}
	// console.log(listLength(l1));

	function getNodeAtInd(list, ind){
		let i = 0;
		let curNode = list;

		while(i < ind && curNode !== null){
		  curNode = curNode.next;
		  i += 1;
		}

		return curNode;
	}
	// console.log(getNodeAtInd(l1, 1));

	let l1Len = listLength(l1);
	let l2Len = listLength(l2);
	let iterLen;
	if (l1Len > l2Len) iterLen = l2Len + 1;
	else {
		iterLen = l1Len;
		getNodeAtInd(l1, l1Len - 1).next = getNodeAtInd(l2, l1Len - 1);
	}

	for (let i = iterLen - 2; i >= 0; i -= 1) {
		getNodeAtInd(l2, i).next = getNodeAtInd(l1, i + 1);
		getNodeAtInd(l1, i).next = getNodeAtInd(l2, i);
	}

	// Check
	// let curNode = l1;
	// while (curNode.next !== null){
	//   console.log(curNode.value);
	//   curNode = curNode.next;
	// }
	// console.log(curNode.value);

	return l1;
};

module.exports = {Node: Node, zip: zip};
