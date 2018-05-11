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
  //this.previous = null;
}

function kthToLastNode(k, head) {
  let listLen = 0;
  if (!head) return undefined;
  
  else {
    const headVal = head.value;
    let values = [];
    values.push(headVal);
    let current = head.next;
    
    while (current) {
      value.push(current.value)
      current = current.next;
    }
    
    return value[listLen -k];
  }

  function kthToLastNode2(k, head)
    let listLength = 0;
   // const values = [];
    let curr = head;
    while (curr) {
      listLength++;
      curr = curr.next;
    }
    let i = listLength - k;
    curr = head;
    if (i < 0) {
      return undefined;
    }
    while (i) {
      i = i - 1;
      curr = curr.next;
    }
    return curr.value;

  /*
   let endPos = 0;
  let targetNode;
  if (head.next === null) return undefined;
  else {
  //keep tranversing through my linked list until this.next = null;
  // when end is found, go back k times and return the value on that note
    while (this.next !== null) {
      endPos++;
    }
    targetNode = (endPos - k) + 1;
    

  }
  return output; 
  */
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
