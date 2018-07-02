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
  let curr = head;
  if (!curr) return 0;
  if (curr === curr.next) {
    curr = curr.next.next;
    curr.next = null;
  }
  return deleteDups(head.next);
}


module.exports = deleteDups;
