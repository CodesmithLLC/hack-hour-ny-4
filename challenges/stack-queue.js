/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.storage = {};
    this.index = 0;
}

Stack.prototype.push = function(value) {
    this.storage[this.index] = value;
    this.index++;
  };
  
  Stack.prototype.pop = function() {
    let removedValue = this.storage[this.index - 1];
    delete this.storage[this.index - 1];
    this.index--;
    return removedValue;
  };

 var myStartStack = new Stack();
 var myEndStack = new Stack();

/**
* Queue Class
*/


function Queue() {
    myStartStack;
    myEndStack;
    //console.log(myStartStack);
    //console.log(myEndStack);
}

Queue.prototype.enqueue = function(value){
    myStartStack.push(value);

};

Queue.prototype.dequeue = function() {
    if (myEndStack.index === 0){
        let poppedValue = myStartStack.pop();
        myEndStack.push(poppedValue);
    }
    let returnValue = myEndStack.pop();
    return returnValue;
};

module.exports = {Stack: Stack, Queue: Queue};

let myTestQueue = new Queue();
//myTestQueue.enqueue(1);
//myTestQueue.enqueue(2);
//myTestQueue.enqueue(3);
//console.log(myTestQueue.dequeue());
//console.log(myStartStack);
//console.log(myEndStack);
//console.log(myTestQueue);
