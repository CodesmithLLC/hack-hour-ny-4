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
  if (this.tail) {
    let curr = this.tail;
    curr.next = new Node(val);
    curr.next.prev = curr;
    this.tail = curr.next;
  } else {
    newNode = new Node(val);
    this.head = newNode;
    this.tail = newNode;
  }

};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  // if head and tail exist and looking for node in between
  let curr = this.head;
  while(curr) {
    if (curr.val === val) {
      curr.prev.next = curr.next;
      curr.next.prev = curr.prev;
    }
    curr = curr.next;
  }

  // if remove head

  // if remove tail 

  

};


let myList = new LinkedList();
myList.add(5);
myList.add(3);
myList.add(2);
myList.remove(2);
// myList.remove(5);
console.log(myList);
module.exports = LinkedList;
