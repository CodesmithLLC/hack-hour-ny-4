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

    var curr;
    var prev;
    var start = 0;
    var n = array.length -1;

    for (let i = array.length - 1; i >= 0; i--){
       
       while (n > start ){
         curr = array[n];
         prev = array[n - 1];
         array[n] = prev;
         array[n -1] = curr
         n--;
        }
        start++;

        var n = array.length -1;
 
        }
 
console.log(array);
}

//reverseInPlace(['a','b','c','d'])

module.exports = reverseInPlace;
