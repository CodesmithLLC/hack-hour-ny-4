/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-unused-vars */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable max-len */

/* eslint-disable */

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


function modemean (array) {
	function getMean (array) {
		return (array.reduce(function(acc, curElem){
			return acc + curElem;
		})/array.length)
	}
	function getMode (array) {
		let freqDict = {};
		array.forEach(function(curElem){
			if (freqDict[curElem] !== undefined) freqDict[curElem] += 1;
			else freqDict[curElem] = 1;
		})
		return Object.keys(freqDict).reduce(function(prevElem, curElem){
			if (freqDict[prevElem] > freqDict[curElem]) return prevElem;
			if (freqDict[prevElem] < freqDict[curElem]) return curElem;
			else return prevElem > curElem ? prevElem : curElem;
		})
	}
	return Math.floor(getMean(array)) === parseInt(getMode(array));
}

module.exports = modemean;
