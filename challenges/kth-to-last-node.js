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

function kthToLastNode(k, head) {
  let curr = head;
  this.length = 1;
  let output = [];

  while (curr.next) {
    output.push(curr.value);
  	curr = curr.next;
  	this.length++;
  }

  let desiredIndex = this.length - k; 

  return output[desiredIndex];

}


// SOLUTION 
 const a = new Node('A');
 const b = new Node('B');
 const c = new Node('C');
 const d = new Node('D');
 const e = new Node('E');

 a.next = b;
 b.next = c;
 c.next = d;
 d.next = e;

console.log(kthToLastNode(2, a));

module.exports = {Node: Node, kthToLastNode: kthToLastNode};

// function Node(val) {
//   this.value = val;
//   this.next = null;
// }
// traversing through twice

// function kthToLastNode(k, head){
//   let listLength = 0;
//   let curr = head;
//   while(curr){
//     listLength++;
//     curr = curr.next;
//   }
//   let i = listLength - k;
//   curr = head;
//   if(i < 0) return undefined;
//   while(i){
//     i = i - 1
//     curr = curr.next;
//   }
//   return curr.value
// }

// Traverse once and store values in array
// function kthToLastNode(k, head){
//   let listLength = 0;
//   const valuesArr = [];
//   let curr = head;
//   while(curr){
//     listLength++;
//     valuesArr.push(curr.value)
//     curr = curr.next;
//   }
//   return valuesArr[listLength - k]
// }

// const a = new Node('A');
// const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');
// const e = new Node('E');

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

// console.log(kthToLastNode(2, a)); // should give D
// console.log(kthToLastNode(2, b)); // should give D

// console.log(kthToLastNode(5, a)); // should give A
// console.log(kthToLastNode(5, b)); // should give undefined
