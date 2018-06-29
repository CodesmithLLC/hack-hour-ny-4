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



function deleteDups(head) {
  // First approach
  let storage = {};
  let prev = head;
  let cur = head;
  storage[cur.value] = 1;
  cur = cur.next;
  while(cur){
    if(storage[cur.value]) {
      prev.next = cur.next;
      cur = cur.next;
    } else {     
      storage[cur.value] = 1;
      prev = prev.next;
      cur = cur.next;
    }
  }
  return head;
}

module.exports = deleteDups;
