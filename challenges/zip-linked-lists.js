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

function zip(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let curr1 = l1; //use to refrence rest of list 1
  let curr2 = l2; //use to refrence rest of list 2
  let curNext1 = l1.next; //use to incremenet through list 1
  let curNext2 = l2.next; //use to incremenet through list 2

  while (curNext1 && curNext2){
    curr1.next = curr2; //next node in first list points to rest of list 2 
    curr2.next = curNext1; //next node in second list points to next node in list 1

    curr1 = curNext1; //incremenet pointer to rest of list 1
    curr2 = curNext2; //incremenet pointer to rest of list 2

    curNext1 = curNext1.next; //incremenet to end of list 1
    curNext2 = curNext2.next; //incremenet to end of list 2
  }//end while
  
  if (!curr2.next) curr2.next =  curr1.next; //list 2 longer
  curr1.next = curr2; //list 1 longer
   
  return l1;
};

module.exports = {Node: Node, zip: zip};