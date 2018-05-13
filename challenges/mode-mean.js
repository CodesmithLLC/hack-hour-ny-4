/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
  return mean(array) === mode(array);
}

function mean(array) {
  let sum = array.reduce(function(accum, curr) {
    return accum + curr;
  });
  return Math.floor(sum / array.length);
}

function mode(array) {
  let count = {};
  let max = -Infinity;
  let modes;
  
  array.forEach(function(num) {
    if (num in count) {
      return count[num]++;
    }
    count[num] = 1;
  });
  
  for (let num in count) {
    if (count[num] > max) {
      modes = [num];
      max = count[num];
    } else if (count[num] === max) {
      modes.push(num);
    }
  }

  return Math.max.apply(this, modes);
}


module.exports = modemean;


console.log(modemean([9, 3, 3, 3, 9, 9]));
console.log(modemean([8, 8, 8, 8, 7, 9]));