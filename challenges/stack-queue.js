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


// SOLUTION I SHOWED: , also I decided it made sense to return the length 
// of the queue on an enqueue, so I added that.
/**
 * Create a stack.Then create a queue using two stacks.
 */
// function Stack() {
//     this.storage = {};
//     this.index = 0;
//   }
  
//   Stack.prototype.push = function(value) {
//     this.storage[this.index++] = value;
//     return this.index;
//   }
  
//   Stack.prototype.pop = function(){
//     let output = this.storage[--this.index];
//     delete this.storage[this.index]
//     return output;
//   }
//   /**
//    * Queue Class
//    */
//   function Queue() {
//     this.in = new Stack();
//     this.out = new Stack();
//   }
  
//   Queue.prototype.enqueue = function(value){
//     this.in.push(value);
//     return this.in.index + this.out.index;
//   }
  
//   Queue.prototype.dequeue = function(value){
//     if(this.out.index > 0) return this.out.pop();
//     while(this.in.index > 1){
//       this.out.push(this.in.pop());
//     }
//     return this.in.pop();
//   }
  
//   // let x = new Stack();
//   // console.log('PUSH: ', x.push(5));
//   // console.log('PUSH: ', x.push(6));
//   // console.log('PUSH: ', x.push(7));
//   // console.log('POP: ', x.pop());
//   // console.log('stack object: ', x);
//   let y = new Queue();
//   console.log('enqueue: ', y.enqueue(12));
//   console.log('enqueue: ', y.enqueue(13));
//   console.log('enqueue: ', y.enqueue(14));
//   // console.log('\n', y);
//   console.log('dequeue: ', y.dequeue());
//   // console.log('\n', y);
//   console.log('enqueue: ', y.enqueue(15));
//   // console.log('\n', y);
  
  
//   // ALTERNATE "cheating" way - but I do like the isEmpty method they added to the stack
//   // which helped for seeing with item to dequeue
//   function Stack() {
//     this.items = [];
//   }
  
//   Stack.prototype.push = function(item) {
//     this.items.push(item);
//   };
  
//   Stack.prototype.pop = function() {
//     return this.items.pop();
//   };
  
//   Stack.prototype.isEmpty = function() {
//     return this.items.length;
//   };
  
//   function Queue() {
//     this.in = new Stack();
//     this.out = new Stack();
//   }
  
//   Queue.prototype.enqueue = function(item) {
//     this.in.push(item);
//   };
  
//   Queue.prototype.dequeue = function() {
//     if (this.out.isEmpty()) {
//       while (!this.in.isEmpty()) {
//         this.out.push(this.in.pop());
//       }
//     }
//     return this.out.pop();
//   };