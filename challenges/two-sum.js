/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */
    
function twoSum(arr, n) {
    // let sum = [];
    // arr.sort()
    // console.log(arr);
    // for(let i = 0; i < arr.length; i++) {
    //     for (let j = 1; j < arr.length; j++) {
    //         console.log(arr[j]);

    //     }
    // }
    function sumOfTwo(num1, num2, total) {
        let sum = num1 + num2;
        if (total === sum) return true;
    }

    for (let i = 0; i < arr.length; i++) {
        
    }
    console.log(arr);
}

console.log(twoSum([4, 3, 2, 1, 5, 6, 8]), 7)

module.exports = twoSum;
