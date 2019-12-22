//Implement a Queue datastructure using two stacks
//**Do NOT** create an array inside of the "Queue" class
//Queue should implement the methods "adds", "remove", and "peek"
//For a Reminder on what each method does, look back at the 
//Queue exercise
//
//EXAMPLE
//q.add(1)
//q.add(2)
//q.peek() // returns 1
//q.remove() // return 1
//q.remove() // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack()
    }

    add(record) {
        this.first.push(record)
    }

    remove() {
        while(this.first.peek()){
            this.second.push(this.first.pop());
        }

        const record = this.second.pop()

        while(this.second.peek()){
            this.first.push(this.second.pop())
        }

        return record
    }

    peek() {
        while(this.first.peek()) {
            this.second.push(this.first.pop());
        }

        const record = this.second.peek();

        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }

        return record
    }
}