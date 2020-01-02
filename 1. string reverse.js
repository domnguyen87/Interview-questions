//Given a string, return new string with reversed order
//example 1
function reverse(str) {
    return str
        .split('')
        .reverse()
        .join('')
}

//example 2
// create an empty string called 'reverse'
// for each character in the provided string  
// Take the character and add it to the start of 'reversed'

// Return the Variable 'reverse'
function reverse(str) {
    let reversed = '';

    // For Loop classic example.
    // for (var i = 0; i < str.length; i++) {
    // }

    //For of syntax
    for (let character of str) {
        reversed = character + reversed;
    }

    return reversed;
}

//example3
function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}

//Practice #1
function reverse(str) {
    
    return str.split('')
        .reverse()
        .join('')
    
    
}

//Practice #2
function reverse(str) {
    let reversed = ''

    for (let character of str) {
        reversed = character + reversed
    }

    return reversed;
}

