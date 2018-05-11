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

function singlyList(){
  this._length = 0;
  this.head = null
}

singlyList.prototype.add = function(value) {
  let node = new Node(value),
      currentNode = this.head;
      
  if (!currentNode) {
      this.head = node;
      this._length++;
      return node;
  }
  
  while (currentNode.next) {
      currentNode = currentNode.next;
  }
  
  currentNode.next = node;
  this._length++;
  return node;
};

function kthToLastNode(k, head) {
  let length = this._length, count = 1;
  while (count < k) {
      console.log(head)
      head = head.next;
      console.log(head)
      count++;
  }

  return head;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
console.log(singlyList())

console.log(kthToLastNode(2, a));