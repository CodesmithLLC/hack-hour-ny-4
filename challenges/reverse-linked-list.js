/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
    if(!head) return head;
    let arr = [];
    let cur = head;
    while(cur) {
        arr.unshift(cur.value);
        cur = cur.next;
    }
    let newHead = new Node(arr.shift());
    let newCur = newHead;
    for(let i = 0; i < arr.length; i++) {
        newCur.next = new Node(arr[i]);
        newCur = newCur.next;
    }
    return newHead;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
