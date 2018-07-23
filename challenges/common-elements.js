// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

  // var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  // var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  // var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
  // var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

function commonElements(array1, array2, array3, array4){
  let count = {};
  for(let i = 0; i < array1.length; i++) {
    let el = array1[i];
    if(!count[el]) count[el] = 1;
  }
  for(let i = 0; i < array2.length; i++) {
    let el = array2[i];
    if(count[el] === 1) count[el] = 2;
  }
  for(let i = 0; i < array3.length; i++) {
    let el = array3[i];
    if(count[el] === 2) count[el] = 3;
  }
  for(let i = 0; i < array4.length; i++) {
    let el = array4[i];
    if(count[el] === 3) count[el] = 4;
  }

  let result = [];
  for(let key in count) {
    if(count[key] === 4) result.push(key); 
  }

  return result.length > 0 ? result : "Nothing in Common!";
}

module.exports = commonElements;
