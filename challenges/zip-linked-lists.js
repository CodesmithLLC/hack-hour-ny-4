/* eslint-disable*/

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
  console.log('l1: ', l1);
  console.log('l2: ', l2);	
  if(l1 && l2) {
  	this.head = l1.head;
  	console.log(this.head);
  	this.next = l2.head;
  	while (this.next.next && l1.next) {
      this.next.next = l1.next;
      this.next.next.next = l2.next;
  	}
  	this.tail = this.next.next.next;
    console.log(this.head);
  } //else {
  	// this.head = l1;
  	// this.next = l2;
  // } else if (l1) {
  // 	// just l1
  // } else if (l2) {
  // 	// just 2
  // }
};


console.log(zip({head: {value:4, next:{value: 5, next: {value: 1, next: null}}}}, {head: {value: 3, next: {value:2, next:{value:3, next: null}}}}));
module.exports = {Node: Node, zip: zip};
