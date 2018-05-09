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
<<<<<<< HEAD
    this.value = val;
    this.next = null;
  }
  
  function kthToLastNode(k, head) {
      var nodeCount = 0;
      var currNode = head;
      var nodeArr = [];
      while (currNode.next !== null){
          nodeCount++;
          nodeArr.push(currNode);
          currNode = currNode.next;
      }
      nodeArr.push(currNode);
      if (nodeArr[nodeCount - k + 1] === undefined || nodeArr[nodeCount - k + 1] === null){
          return undefined;
      }
     
      return nodeArr[nodeCount - k + 1].value;
  }

  const a = new Node('A');
  const b = new Node('B');
  const c = new Node('C');
  const d = new Node('D');
  const e = new Node('E');

  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;

  //console.log(kthToLastNode(4,a));
  
  module.exports = {Node: Node, kthToLastNode: kthToLastNode};
=======
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {

}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
>>>>>>> 05e9e8999607914c1bc817c3975d8afe09f40a6b
