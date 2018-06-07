/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
for (let i = 0; i <= arr.length; i++){
    for (let j = i + 1; j < arr.length; j++)
    {
        //console.log('Arr i: ' , arr[i]);
        //console.log('Arr j + 1: ', arr[j]);
        if (arr[i] + arr[j] === n){
            return true;
        }
    }

}

return false;
}

module.exports = twoSum;

//console.log(twoSum([2, 3, 5], 8)); 
