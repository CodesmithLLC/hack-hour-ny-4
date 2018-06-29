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
  const mem = {};
  let curNode = head;

  mem[curNode.value] = true;
  while (curNode.next !== null) {
    if (mem[curNode.next.value] === undefined) {
      mem[curNode.next.value] = true;
      curNode = curNode.next;
    } else {
      curNode.next = curNode.next.next;
    }
  }

  return head;
}

module.exports = deleteDups;
