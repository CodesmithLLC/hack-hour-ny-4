

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
//   return array.reduceRight((prev, curr) => prev + curr);

  for (let i = array.length; i >= 0; i--) {
    for (let j = 0; j < array.length; j++) {
      if (array[j]) {
        array[j] === array[i];
      }
    //   console.log('each j loop: ', array[j]);
    //   console.log('each i loop: ', array[i]);
    }
    // console.log('array[i]: ', array[i]);
  }
  return array;
}

console.log(reverseInPlace(['h', 'e', 'l', 'l', 'o']));
// o    l     l   e     h

module.exports = reverseInPlace;
