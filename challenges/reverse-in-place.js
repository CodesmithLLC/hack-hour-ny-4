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
const arr = [1, 2, 3, 4, 5];

// function reverseInPlace(array) {
//   let i = 0;
//   let j = array.length - 1;
//   while (j > i) {
//     const temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//     i++;
//     j--;
//   }
//   return array;
// }

function reverseInPlace(array) {
  let i = 0;
  while (i < array.length - 1) {
    array.splice(i++, 0, array.pop());
  }
  return array;
}

console.log(reverseInPlace(arr));

module.exports = reverseInPlace;
