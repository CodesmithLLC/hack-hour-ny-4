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
  let s2Arr = s2.split('');

  let index = 0; 
  let compString = s2Arr[index];
  let subStringArr = []; 
 
  while (isSubstring(s1, compString)) { 
    if (compString === s1) {return true;}
    index+=1;
    compString += s2Arr[index];
    console.log(compString);
  }//end while*/
 
  if(s1.length === compString.length) { 
    return true; 
  }

  //console.log(compString.slice(0, -1)); 
  
  let sub = s2.split(compString.slice(0, -1));
  console.log(sub); 

  sub[0] = compString.slice(0, -1); 
  console.log(sub); 

  if (s1.includes(sub[0]) && s1.includes(sub[1])) {
    return true; 
  } else { 
    return false; 
  } //end false
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
