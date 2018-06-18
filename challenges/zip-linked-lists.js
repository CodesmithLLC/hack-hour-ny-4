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

// result should be a, f, b, g, c, h, d, i, e, j
function zip(l1, l2) {
  
  while(l1.next != null){
    l1.next = l2;
    l2.next = l1.next.next;
  }
  // for(let i = 0; i < l1.length; i += 1){
  //   l1[i].next = l2[i];
  //   l2[i].next = l1[i + 1];
  // }
  // console.log(l1);
  // console.log(l2);
};

module.exports = {Node: Node, zip: zip};

// LinkOne
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// LinkTwo
const f = new Node('F');
const g = new Node('G');
const h = new Node('H');
const i = new Node('I');
const j = new Node('J');

f.next = g;
g.next = h;
h.next = i;
i.next = j;

// let linkOne = [a, b, c, d, e];
// let linkTwo = [f, g, h, i, j];

console.log(zip(a, f));