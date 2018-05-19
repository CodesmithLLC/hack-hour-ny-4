/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

 ///

// function DoublyLinkedList() {
//   this.head = null;
//   this.tail = null;
//   this.numberOfValues = 0;
// }

// function Node(data) {
//   this.data = data;
//   this.previous = null;
//   this.next = null;
// }

// DoublyLinkedList.prototype.add = function (data) {
//   var node = new Node(data);
//   if(!this.head) {
//     this.head = node;
//     this.tail = node;
//   } else {
//     node.previous = this.tail;
//     this.tail.next = node;
//     this.tail = node;
//   }
//   this.numberOfValues++;
// };

//var myLL = new DoublyLinkedList;
/////

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }
  let double = s1 + s1;
  return isSubstring(double, s2)
}

console.log(stringRotation("hello", "llohe"));

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};

//hellohello