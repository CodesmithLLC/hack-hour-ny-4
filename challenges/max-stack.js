/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.length = 0;
  this.storage = {};
  
}

Stack.prototype.push = function (val) {
  this.storage[this.length] = val;
  this.length++;
  return this.length;
}

Stack.prototype.pop = function () {
  let poppedVal = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length --;
  return poppedVal;
}

Stack.prototype.getMax = function () {
  let maxVal = -Infinity;
  for (let val in this.storage) {
    if (this.storage[val] > maxVal) maxVal = this.storage[val];
  }

  return maxVal;
}

// let myStack = new Stack();

// console.log(myStack.push(2));
// console.log(myStack.push(-2));
// console.log(myStack.push(5));
// console.log(myStack.push(3));
// console.log(myStack.pop());
// console.log(myStack.getMax());

module.exports = Stack;

