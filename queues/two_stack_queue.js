const Stack = require("../stacks/stack")

class TwoStackQueue{
    constructor(){
        this.inbox = new Stack()
        this.outbox = new Stack()
    }

    enqueue(value){
        this.inbox.push(value)
    }

    dequeue(){
        if(this.outbox.isEmpty()){
            while(!this.inbox.isEmpty()){
                this.outbox.push(this.inbox.pop())
            }
        }
        return this.outbox.pop()
    }
}

const queue = new TwoStackQueue();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)

console.log(queue.dequeue())
console.log(queue.dequeue())