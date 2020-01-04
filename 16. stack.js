//Create a stack data structure. The stack should be a 
//class with methonds "push", "pop", and "peek". Adding 
//an element to the stack should store it until it is
// removed
//
//Example
//  const s  = new Stack();
//  s.push(1);
//  s.push(2);
//  s.pop() // returns 2
//  s.pop() // return 1

class Stack {
    constructor() {
        this.data = []
    }

    //Adds data at the end of the array
    push(record) {
        this.data.push(record)
    }

    //Remove data at the end of the array
    pop() {
        return this.data.pop();
    }    

    peek() {
        return this.data[this.data.length - 1];
    }

}

