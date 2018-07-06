/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
  let result = {};
  function rec(arr, subArr) {
    if(subArr.length === array.length-1) {
			return result[subArr] = subArr;
		}
    for(let i = 0; i < arr.length; i++) {
			let select = arr[i];
      let rest = arr.slice(0, i).concat(arr.slice(i+1));
      rec(rest, subArr.concat(select) );
    }
  }
  rec(array, []);
  return Object.values(result).map((el)=>{
		return el.reduce((acc, cur)=>{
			acc = acc*cur;
			return acc;	
		});
	}).filter((val, i, self)=>{
		return self.indexOf(val) === i;
	});
}

module.exports = getAllProducts;
