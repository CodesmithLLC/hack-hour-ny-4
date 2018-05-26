/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
	const stackObj = {};
	stackObj.arr = [];
	stackObj.maxVal = undefined;

	stackObj.push = function (val) {
		if (stackObj.maxVal === undefined || stackObj.maxVal < val) stackObj.maxVal = val;
		return stackObj.arr.push(val);
	};

	stackObj.pop = function () {
		let popVal = stackObj.arr.pop();
		if (popVal === stackObj.maxVal) stackObj.maxVal = Math.max(...stackObj.arr);
		return popVal;
	};

	stackObj.getMax = function () {
		return stackObj.maxVal;
	};

	return stackObj;
}

module.exports = Stack;