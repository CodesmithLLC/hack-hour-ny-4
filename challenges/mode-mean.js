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
    let mean = 0;
    let mode = array[0];
    let count = 1;
    var modeMap = {};
    for(let i = 0; i < array.length; i++){
         mean += array[i];
         let current = array[i];
         if (modeMap[current] == null){
             modeMap[current] = 1;
         } else { 
             modeMap[current]++;
         }
            if (modeMap[current] > count){
                 mode = current;
                 count = modeMap[current]
             }
         }
    mean = Math.floor(mean / array.length);
    console.log(mean);
    console.log(mode);
    if (mean === mode){
       return true;
    }
    return false;
    
}


console.log(modemean([3,2,4,1,2,2,4]));



module.exports = modemean;
