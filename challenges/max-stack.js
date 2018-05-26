/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from 
 * the stack in O(1) time.
 */

function Stack() {
  // body...
  this.stack = [];
  this.length = 0;
  
}

Stack.prototype.push = function(value) {
  this.stack[this.length++] = value;
  return this.length;
}

Stack.prototype.pop = function() {
  let removed = this.stack[this.length - 1];
  this.stack.splice(-1, 1);
  this.length--;
  return removed;
}

Stack.prototype.getMax = function() {
  if(this.length === 0) return undefined;
  this.stack.sort((a, b) => a - b);
  return this.stack[this.length -1];
}

module.exports = Stack;

let newStack = new Stack();

newStack.push(5);
newStack.push(13);
newStack.push(3);
newStack.push(56);
newStack.push(20);
newStack.push(3);
newStack.push(4);
console.log('before pop', newStack);
newStack.pop()
console.log('after pop', newStack);

console.log('getMax', newStack.getMax());

console.log('after getMax', newStack);