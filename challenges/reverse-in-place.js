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

//Solution 2
function reverseInPlace2(array) {
  //while (array[])
  for (let i = 0; i < array.length; i++) {
    array.splice(i, 0, array.pop());
  }
  return array;
}

//Solution 1

function reverseInPlace(array) {
  let indexCount = 1;
  const arrLen = array.length;
  const midArr = array.length/2;

  for (let i = 0; i < midArr; i++) {
    let tempLeft = array[i];
    let tempRight = array[arrLen - indexCount];
    array[i] = tempRight;
    array[arrLen - indexCount] = tempLeft;
    indexCount++;
  }
  return array;
}

module.exports = reverseInPlace;
