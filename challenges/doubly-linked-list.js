/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function (val) {
  const newNode = new Node(val);
  if (this.tail === null) this.head = newNode;
  else {
    newNode.prev = this.tail;
    newNode.prev.next = newNode;
  }
  this.tail = newNode;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  let curNode = this.head;
  while (curNode !== null) {
    if (curNode.val === val) {
      curNode.prev === null ? this.head = curNode.next : curNode.prev.next = curNode.next;
      curNode.next === null ? this.tail = curNode.prev : curNode.next.prev = curNode.prev;
      return true;
    }
    curNode = curNode.next;
  }
  return false;
};

module.exports = LinkedList;
