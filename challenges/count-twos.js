// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
    let numOfTwos = 0;
    let counter = 0;

    while (counter < num){
    let n = counter.toString().split('');
    n.forEach(function(element) {
        if (element === '2'){
            numOfTwos++;
        }
    });

    counter++;
}
return numOfTwos
}

module.exports = countTwos;

console.log(countTwos(1000));

// function countTwos(num) {
//     let totalCount = 0; 
//     for (let i=1; i <= num; i += 1) {
//       const count = i.toString()
//         .split('')
//         .filter(char => char === '2')
//         .length;
//       totalCount += count;
//     }
//     return totalCount;
//   }
  
//   // function countTwos(num) {
//   //   var count = 0;
//   //   if (num < 2) return 0;
//   //   for (var i = 2; i <= num; i++) {
//   //     var string = i.toString();
//   //     for (var j = 0; j < string.length; j++) {
//   //       if (string[j] === '2') count++;
//   //     }
//   //   }
//   //   return count;
//   // }
  
//   function countTwos(num) {
//     let totalCount = 0;
//     // Split the number into an easy to solve multiple of 10 and the remaining
//     let numDigits = Math.floor(Math.log10(num) + 1);
//     const base = 10**(numDigits - 1);
//     const remaining = num - base;
//     const baseCount = 1 * (numDigits - 1) * 10**(numDigits - 2);
//     totalCount += baseCount;
  
//     // Count the number of twos in the remaining
//     for (let i=base; i <= num; i += 1) {
//       const count = i.toString()
//         .split('')
//         .filter(char => char === '2')
//         .length;
//       totalCount += count;
//     }
//     return totalCount;
//   }
  
//   function countTwos(num) {
//     if (num === 0) return 0;
//     // Count the number of digits
//     const numDigits = Math.floor(Math.log10(num) + 1);
//     // Get the first digit
//     const firstDigit = Math.floor(num/10**(numDigits - 1));
  
//     // Split the number into an easy to solve multiple of 10 and the remainder
//     const base = firstDigit * 10**(numDigits - 1);
//     const remaining = num - base;
  
//     // Count the number of twos in the remaining amount
//     const remainderCount = countTwos(remaining);
  
//     const baseCount = firstDigit * (numDigits - 1) * 10**(numDigits - 2);
//     if (firstDigit < 2) return  baseCount + remainderCount; // base + remaining
//     if (firstDigit === 2) return baseCount + remainderCount + (remaining + 1); //base + remaining + adjust for first digit
//     if (firstDigit > 2) return baseCount + remainderCount + 10**(numDigits - 1); //base + remaining + adjust for first digit
//   }
  
  
//   function countTwos(num) {
//     // Count the number of digits
//     let numDigits = Math.floor(Math.log10(num) + 1);
//     let totalCount = 0;
//     while (num > 0) {
//       // Get the first digit
//       const firstDigit = Math.floor(num/10**(numDigits - 1));
//       // Split the number into an easy to solve multiple of 10 and the remainder
//       const base = firstDigit * 10**(numDigits - 1);
//       const remaining = num - base;
//       // Count the number of twos in the base value
//       const baseCount = firstDigit * (numDigits - 1) * 10**(numDigits - 2);
      
//       if (firstDigit < 2) totalCount += baseCount; 
//       if (firstDigit === 2) totalCount += baseCount + (remaining + 1); //base +  adjust for first digit
//       if (firstDigit > 2) totalCount += baseCount + 10**(numDigits - 1); //base + adjust for first digit
      
//       // Pass on the remaining amount to the next loop
//       num = remaining;
//       numDigits -= 1;
//     }
//     return totalCount;
//   }
