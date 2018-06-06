/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  const stackObj = {};
  stackObj.contents = [];
  stackObj.push = val => stackObj.contents.push(val);
  stackObj.pop = () => stackObj.contents.pop();

  return stackObj;
}

/**
* Queue Class
*/

function Queue() {
  const queueObj = {};
  queueObj.realStack = Stack();
  queueObj.tempStack = Stack();
  queueObj.len = 0;

  queueObj.enqueue = (val) => {
    queueObj.len += 1;
    return queueObj.realStack.push(val);
  };

  queueObj.dequeue = () => {
    if (queueObj.len === 0) return undefined;
    for (let i = 0; i < queueObj.len - 1; i += 1) {
      queueObj.tempStack.push(queueObj.realStack.pop());
    }
    queueObj.len -= 1;
    const returnVal = queueObj.realStack.pop();
    for (let i = 0; i < queueObj.len; i += 1) {
      queueObj.realStack.push(queueObj.tempStack.pop());
    }
    return returnVal;
  };

  return queueObj;
}

module.exports = {Stack: Stack, Queue: Queue};
