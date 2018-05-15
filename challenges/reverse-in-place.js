'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

function reverseInPlace(array) {
  for (let i = 0; i < array.length; i++) {
    array.splice(i,0,array.pop());
  }
  return array;
}
/*
function reverseInPlace(array) {
  let originalLen = array.length;
  for (var i = 0; i < originalLen; i++) {
    array.splice(i,0,array[array.length - i -1]);
  }
  while (i < array.length) {
    array.splice(i,1);
  }
  console.log(array);
}
*/
console.log(reverseInPlace(['a', 'b', 'c', 'd', 'e']));

module.exports = reverseInPlace;