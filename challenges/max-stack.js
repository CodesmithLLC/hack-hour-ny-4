/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.stack = []; 
  this.max = 0;
}


Stack.prototype.push = function(val) {
  this.stack[this.stack.length] = val;
  if(this.max < val) this.max = val;
  return this.stack.length;
}

Stack.prototype.pop = function() {
  let result = this.stack[this.stack.length - 1];
  if(this.stack.indexOf(result) !== -1) {
    this.stack = [... this.stack.slice(0, -1)];
    this.max = 0;
    for(var i = 0; i < this.stack.length; i++) {
      console.log(this.stack[i]);
      if(this.max < this.stack[i]) this.max = this.stack[i];
    }
  } else {
    this.stack = [... this.stack.slice(0, -1)];
  }
  return result;
}

Stack.prototype.getMax = function() { 
}

module.exports = Stack;