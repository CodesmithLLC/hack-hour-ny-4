/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = {};
  this.length = 0;
}


/**
* Queue Class
*/


function Queue() {
  this.storage = {};
  this.length = 0;
}

module.exports = {Stack: Stack, Queue: Queue};
