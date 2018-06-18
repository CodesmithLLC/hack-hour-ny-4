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
  this.max = { 
    index: 0, //keep track where the max is in the stack
    val: Number.NEGATIVE_INFINITY //for making comparisions
  }; 
}

Stack.prototype.setNewMax = function() {
  for (let i in this.storage) { //loop through storage
    if (this.storage[i] > this.max.val) { //comapre all elements to store in stack
      this.max.val = this.storage[i]; //set max value to largest element
      this.max.index = i; //note the index of the max element 
    }//end if
  }//end for
}

Stack.prototype.resetMax = function() { 
  this.max.val = Number.NEGATIVE_INFINITY; 
  this.max.idx = -1;
  return;  
}

Stack.prototype.push = function(value) { 
  if (value > this.max.val) { 
    this.max.idx = this.length;
    this.max.val = value; 
  }//end if 
  this.storage[this.length] = value; 
  this.length++; 
  return this.length; 
}

Stack.prototype.pop = function() {
  if (this.length === 0) return undefined; //nothing to pop
  const temp = this.storage[this.length-1]; //held element to be removed and returned 
  if (temp === this.max.val) this.resetMax(); //if popped is max, resetMax to -Intifiny
  delete this.storage[this.length-1]; //pop element off
  this.setNewMax(); //set a new max
  this.length--; //decrement length
  return temp;  //return popped elemet 
}

Stack.prototype.getMax = function() { 
  //if nothing in stack return undefined, otherwise retrieve max value
  return this.length === 0 ? undefined : this.max.val; 
}

module.exports = Stack;