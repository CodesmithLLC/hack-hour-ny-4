/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
this.container = [];
this.size = 0;
}

Stack.prototype.push = function(num) {
this.container.push(num);
}

 Stack.prototype.pop = function(){
this.container.pop();
}

Stack.prototype.getMax = function(){
  return Math.max(...this.container)
}



// const myStack = new Stack();
// myStack.push(1);
// myStack.push(3);
// myStack.push(2);
// console.log(myStack.getMax());
//myStack.pop();
//console.log(myStack.container);

module.exports = Stack;