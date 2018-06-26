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

  // const node = new Node();
  let node = new Node();
  let currHead = this.value;

  if (!this.value) {
    this.value = node(l1);
    this.next = node(l2)
  }

  while (this.next) {
    this.next = currHead;
  }

  

};

module.exports = {Node: Node, zip: zip};
