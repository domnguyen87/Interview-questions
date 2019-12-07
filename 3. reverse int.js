//Given an integer, return that is the reverse order number
//Example
//reverseInt(15) === 51
//reverseInt(500) === 5
//reverseInt(-15) === -51
//reversetInt(-90) === -9

// xxx.toString() : turns from a number to a string
// Math.sign(4) === 1 (postive number)
// Math.sign(-4) === -1 (negative)
// parseInt(xxx.toString()): turns it back from a string
// to a number

function reverseInt(n) {
    const reversed = n 
        .toString()
        .split('')
        .reverse()
        .join('');

    //one way of doing this        
    if(n<0) {
        return parseInt(reversed) * -1
    }
    return parseInt (reversed);

    // an easier way of doing this
    // return parseInt(reversed) * Math.sign(n);
}

module.export = reverseInt;