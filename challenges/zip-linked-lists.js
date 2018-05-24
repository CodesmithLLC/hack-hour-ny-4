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
  let l1Next = l1.next;
  let l2Next = l2.next;
  while(l1.next && l2.next) {

    l1.next = l2;
    l2.next = l1Next;

    l1 = l1Next;
    l2 = l2Next;

    l1Next = l1.next;
    l2Next = l2.next;

  }
	// if(!l1.next && l2) {
	// 	l1.next = l2;
	// }
};

module.exports = {Node: Node, zip: zip};
