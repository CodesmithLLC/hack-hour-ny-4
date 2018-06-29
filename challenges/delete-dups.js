/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

 function LinkedList() {
   this.head = null;
   this.tail = null;
 }

 function Node(value) {
   this.value = value;
   this.next = null;
 }


function deleteDups(head) {
  const obj = {};
  let curr = head;
  while (curr) {
    if (obj[value]) {
      obj[value]++;
    } else {
      obj[value] = 1;
    }
    curr = curr.next;
  }

  curr = head;
  if (curr.value === obj[value] && obj[value] > 1) {
    head = curr.next;
  }
  while (curr.next) {
    if(curr.next.value === obj[value] && obj[value] > 1) {
      curr.next = curr.next.next;
    } 
    curr.next = curr.next.next;
  }

  // loop through the LL
    // add all values to an obj 
    // if value seen more than once, increment it 
  // go back through the LL searching for each value with more than 1 count
    // delete the node associated with the value and change pointers
    
}

let test = new LinkedList;
test.head = new Node(1);
test.head.next = new Node(2);
test.head.next.next = new Node(3);
test.head.next.next.next = new Node(3);

module.exports = deleteDups;
