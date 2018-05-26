/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = {};
  this.index = 0;
}
Stack.prototype.push = (value) => {
  this.index++;
  this.storage[this.index] = value;
  return this.index;
}
Stack.prototype.pop = () => {
  let removed = this.storage[this.index-1];
  delete this.storage[this.index-1];
  this.index--;
  if(this.index < 0) this.index = 0;
  return removed;
}
Stack.prototype.getMax = () => {
  let maxValue = 0;;
  for(let key in this.storage) {
    if(this.storage[key] > maxValue) {
      maxValue = this.storage[key];
    }
  }
  return maxValue;
}

module.exports = Stack;