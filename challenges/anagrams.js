/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

function anagrams(string) {

}

module.exports = anagrams;

// function anagrams(string) {
//   if(typeof string !== 'string') return [];
//   let permutations = {};
//   function getPerms(str, curStr){
//     if(str === '') return permutations[curStr] = true;
//     for(let i = 0; i < str.length; i++){
//       let selected = str[i];
//       let rest = str.slice(0,i) + str.slice(i+1);
//       getPerms(rest, curStr + selected);
//     }
//   }
//   getPerms(string, '');
//   return Object.keys(permutations);
// }