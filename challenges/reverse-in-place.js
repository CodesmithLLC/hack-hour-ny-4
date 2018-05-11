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
  let counter = 1;
  for(let i = 0; i < array.length / 2; i++){
    let temp1 = array[i];
    let temp2 = array[array.length - counter];
    array[array.length - counter] = temp1;
    array[i] = temp2;
    counter++;
  }
  return array;
}

module.exports = reverseInPlace;

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(reverseInPlace(arr))