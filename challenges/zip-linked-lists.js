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
  if (!l1) return l2;
  let head = new Node();
  let head = l1;
  while (l2) {
    head = l1.next;
    l1.next = l2;
    l1 = l2;
    l2 = head;
  }
  return head;
}

module.exports = { Node: Node, zip: zip };