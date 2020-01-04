//Implement a 'peek' method in this Queue class
//Peek should return the last element ( the next one
//to be returned) from the queue *without it being 
//removed*

class Queue {
    constructor() {
        this.data = []
    }

    add(record) {
        this.data.unshift(record);
    }

    remove() {
        return this.data.pop()
    }

    peek() {
        return this.data[this.data.length - 1]
    }
}

//practice
class Queue {
    constructor() {
         this.data = []
    }
    
    add(record) {
        this.data.unshift(record)
    }

    remove() {
        return Qthis.data.pop()
    }

    peek() {
        return this.data[this.data.length - 1];
    }
 }


//Implement the 'weave' function. Weave receives two queues
//as arguments and combines the contents of each into a new
//third queue. The third queue should contain the
//alternating content of the two queues. The fx should 
//handle queues of different length without inserting
//'undefined' into the new one
//*Do not* access the array inside of any queue, on use the 
//'add', 'remove', and 'peek' fx

function weave(sourceOne, sourceTwo) {
    const q = new Queue();

    while (sourceOne.peek() || sourceTwo.peek()) {
        if (sourceOne.peek()) {
            q.add(sourceOne.remove())
        }

        if (sourceTwo.peek()) {
            q.add(sourceTwo.remove())
        }
    }

    return q
}

//practice
function weave(sourceOne, sourceTwo) {
    const q = new Queue();

    while (sourceOne.peek() || sourceTwo.peek()) {
        if (sourceOne.peek()) {
            q.add(sourceOne.remove())
        }

        if (sourceTwo.peek()) {
            q.add(sourceTwo.remove())
        }
    }
    return q;

}

function weave2 (sourceOne, sourceTwo) {

    const q = new Queue;
    while (sourceOne.peek() || sourceTwo.peek()) {
        if (sourceOne.peek()) {
            q.add(sourceOne.remove());
        }

        if (sourceTwo.peek()) {
            q.add(sourceTwo.remove());
        }
    }
    return q
}