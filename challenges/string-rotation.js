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

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  if (s1 === s2) return true;

  while (s1 !== s2) {
    var s1.splice
  }

}

console.log(isSubstring('hello', 'hello'));
// console.log(isSubstring('hello', 'llohe'));
// console.log(isSubstring('hello', 'he'));
// console.log(isSubstring('hello', 'ollhe'));




console.log('hello'.indexOf('hello'));
console.log('hello'.indexOf('llohe'));
console.log('hello'.indexOf('he'));
console.log('hello'.indexOf('ollhe'));


module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
