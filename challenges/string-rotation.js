/* eslint-disable */

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
  return s1.length === s2.length;
}

function stringRotation(s1, s2) {
  
  if (s1 === s2) {
  	return true;
  }

  if (s1.length !== s2.length) {
    return false; 
  } 

  let firstLetter = s1[0];
  let left;
  let right;

  s2 = s2.split('');
  
  for(var i = 0; i < s2.length; i++) {
  	if (s2[i] === firstLetter) {
  		left = s2.slice(0, i);
  		right = s2.slice(i);
  	}
  }

  let rotation2 = right.concat(left);


  return s1 === rotation2.join('');

}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};

console.log(stringRotation('hello', 'lohel'));