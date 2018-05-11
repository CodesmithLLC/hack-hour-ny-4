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
  // figure out what the mean is
    // number of items in the array
    // sum of values in the array 
        // math.floor it 

  // figure out what the mode is
   // store all the values in the array as keys in an obj
   // track how many times the values appear as values 
   // select the mode as the key with the highest frequency 
  // compare mode and mean to return boolean 


  // find mean 
  let sum = 0;  
  array.forEach(function(el) {
    sum += el;
  });

  let mean = Math.floor(sum/array.length);

  console.log('mean: ', mean);

  // find mode 

  let obj = {};

  let currMode = array[0];

  array.forEach(function(el) {
    if(obj[el] === undefined) {
      obj[el] = 1; 
    } else {
      obj[el]++;
    }

    if (obj[el] > currMode) {
    currMode = el;
  }
  })

  //compare values 

  return currMode === mean; 

}

console.log(modemean([2, 4, 6, 4, 11]));
module.exports = modemean;


// PETE SOLUTION 

// // helper functions - hold mode with array
// function modemean(array) {
//   return mean(array) === mode(array);
// }

// function mean(array) {
//   var sum = array.reduce(function(sum, el) {
//     return sum + el;
//   });
//   return Math.floor(sum / array.length);
// }

// function mode(array) {
//   var count = {};
//   array.forEach(function(num) {
//     if (num in count) {
//       return count[num]++;
//     }
//     count[num] = 1;
//   });
//   var max = -Infinity;
//   var modeCandidates;
//   for (var num in count) {
//     if (count[num] > max) {
//       modeCandidates = [num];
//       max = count[num];
//     } else if (count[num] === max) {
//       modeCandidates.push(num);
//     }
//   }
//   return Math.max.apply(this, modeCandidates);
// }

// //------------------------
// // hold mode in object

// function modemean(array){
//   // solving for the mean
//   let mean = 0; let mode = 0; let modeCount = 0; let modeObj = {'currMode': -Infinity};

//   mean = array.reduce( (accum, next) => {
//     return accum + next;
//   }) / array.length;

//   // solve for the mode
//   for(let i = 0; i < array.length; i++){
//     if(modeObj[array[i]] != undefined){
//       modeObj[array[i]] += 1;
//     } else {
//       modeObj[array[i]] = 1
//     }
//     if(modeObj[array[i]] === modeCount){
//       if(array[i] > modeObj['currMode']){
//         mode = array[i];
//         modeObj['currMode'] = array[i];
//       }
//     } else if(modeObj[array[i]]> modeCount){
//       mode = array[i];
//       modeObj['currMode'] = array[i]
//       modeCount = modeObj[array[i]];
//     }
//     // console.log('modeObj: ', modeObj)
//   }
//   // console.log('mode, mean : ', mode, ' , ' , mean)
//   return mode === Math.floor(mean)
// }
