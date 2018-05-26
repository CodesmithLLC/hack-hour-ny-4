/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.storage = {}; 
  this.length = 0; 
}

Stack.prototype.push = function(value) { 
  this.storage[this.length] = value; 
  this.length++; 
}

Stack.prototype.pop = function() { 
  const temp = this.storage[this.length-1]; 
  delete this.storage[this.length-1]; 
  this.length--;  
  return temp;  
}

Stack.prototype.getMax = function() { 
  const values = Object.values(this.storage);
  values.sort((a, b) => a - b); 
  return values[this.length-1];  
}

module.exports = Stack;