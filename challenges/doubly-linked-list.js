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
LinkedList.prototype.add = function(val) {
  if(!this.head) {
    this.head = new Node(val);
    this.tail = head;
  } else {
    this.tail.next = new Node(val);
    this.tail.next.prev = this.tail;
    this.tail = this.tail.next;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if(!this.head) return false;
  let cur = this.head;
  while(cur) {
    if(cur.val === val) {
      if(cur === this.head) {
        return false;
      }
      if(cur === this.tail) {
        this.tail = cur.prev;
        cur.prev.next = null;
      } else {
        cur.prev.next = cur.next;
        cur.next.prev = cur.prev;
      }
    }
    cur = cur.next;
  }
  return true;
};

module.exports = LinkedList;
