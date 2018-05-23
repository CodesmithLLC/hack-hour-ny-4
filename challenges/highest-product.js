/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

// function highestProduct(array) {
//   array.sort((a, b) => {
//     return a-b;
//   });
//   let lastThirdIdx = array.length - 1 - 2;
//   let result=1;
//   for(let i = lastThirdIdx; i < array.length; i++) {
//     result *= array[i];
//   }
//   return result;
// }

// function highestProduct(array) {
//   if(!Array.isArray(array)) return 0;
// 	if(array.length < 3) return 0;
//   return array.sort((a, b) => {
//     return a-b;
//   }).reduce((acc, curr, idx)=> {
// 		if(typeof curr !== 'number') acc = 0;
//     if(idx >= array.length - 1 - 2) { return acc *= curr; } 
//     else { return acc; }
// 	}, 1);
// }

function highestProduct(array) {
	if(!Array.isArray(array)) return 0;
	if(array.length < 3) return 0;
  array.sort((a, b) => {
    return a-b;
  });
	let negArr = array.filter((elem)=>{return elem < 0});
	let posArr = array.filter((elem)=>{return elem > 0});
	if(negArr.length >= 2 && posArr.length >= 2) {
		if(negArr[0]*negArr[1]*posArr[posArr.length-1] > posArr[posArr.length-1]*posArr[posArr.length-2]*posArr[posArr.length-3]) {
			return negArr[0]*negArr[1]*posArr[posArr.length-1];
		} else {
			return array.reduce((acc, curr, idx)=> {
				if(typeof curr !== 'number') acc = 0;
				if(idx >= array.length - 1 - 2) { return acc *= curr; } 
				else { return acc; }
			}, 1);
		}
	} else {
		return array.reduce((acc, curr, idx)=> {
			if(typeof curr !== 'number') acc = 0;
			if(idx >= array.length - 1 - 2) { return acc *= curr; } 
			else { return acc; }
		}, 1);
	}
}


module.exports = highestProduct;
