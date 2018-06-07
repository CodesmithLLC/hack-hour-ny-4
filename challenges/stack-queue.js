/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.stack = [];
  this.index = 0;
}

Stack.prototype.push = (val) => {
  this.stack[this.index] = val;
  this.index++;
  return this.index;
};

Stack.prototype.pop = () => {
  let removed = this.stack[this.index - 1];
  this.stack.splice(-1, 1);
  this.index -= 1;
  return removed;
};

/**
* Queue Class
*/

function Queue() {
  this.queue = [];
  this.index = 0;
}

Queue.prototype.enqueue = (val) => {
  this.queue[this.index += 1] = val;
};

Queue.prototype.dequeue = () => {
  let removed = this.stack[this.index - 1];
  this.stack.splice(0, 1);
  
};

let stack = new Stack();
stack.push(1);
console.log(stack);

module.exports = {Stack: Stack, Queue: Queue};

