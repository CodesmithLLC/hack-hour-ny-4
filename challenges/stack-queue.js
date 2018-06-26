/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack(value) {
    this.stack = {};
    this.index = 0;
}

Stack.prototype.push = function(value) {
    this.stack[this.index] = value;

    return ++this.index;
};

const theStack = new Stack();
theStack.push(1);
theStack.push(2);

const twoStack = new Stack();
twoStack
// theStack

console.log(theStack);
/**
* Queue Class
*/


function Queue() {

}

function testQueue(arr1, arr2) {
    let 
}

module.exports = {Stack: Stack, Queue: Queue};
