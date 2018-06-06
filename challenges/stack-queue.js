/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = [];
}
Stack.prototype.push = function(val) {
  this.storage.push(val);
}
Stack.prototype.pop = function() {
  return this.storage.pop();
}

/**
* Queue Class
*/



function Queue() {
  this.enqueueBox = new Stack();
  this.dequeueBox = new Stack();
}

Queue.prototype.enqueue = function(val){
  this.enqueueBox.push(val);
}

Queue.prototype.dequeue = function(){
  let result = null;
  if(!this.dequeueBox.storage.length) {
    while(this.enqueueBox.storage.length) {
      this.dequeueBox.push(this.enqueueBox.pop());
    }
  }
  if(this.dequeueBox.storage.length) {
    result = this.dequeueBox.pop();
  }
  return result;
}

module.exports = {Stack: Stack, Queue: Queue};
