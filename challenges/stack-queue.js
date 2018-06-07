/**
 * Create a stack.Then create a queue using two stacks.
 */

//LIFO


function Stack() {
  let storage = [];
  this.push = function () {
    storage.push(storage, ...arguments);
  }
  this.pop = function () {
    storage.pop(storage, ...arguments);
  }
  this.size = function () {
    return storage.length;
  }
  this.peek = function () {
    return storage;
  }
}

/**
* Queue Class
*/

//FIFO
function Queue() {
  let inStorage = new Stack();
  let outStorage = new Stack();

  this.enqueue = function () {
    inStorage.push(inStorage, ...arguments);
  }
  this.dequeue = function () {
    if (outStorage.size() > 0) return outStorage.pop();
    else while (inbox.size()) {
      return outStorage.push(inbox.pop()).pop();
    }
  }
  this.size = function () {
    return inStorage.size() + outStorage.size();
  }
  this.peek = function () {
    return outStorage.peek();
  }
}

module.exports = { Stack: Stack, Queue: Queue };
