//Write a function that returns the number of vowels
//used in a string. Vowels are the char a, e, i ,o ,u
//
//Example
//vowels("Hi There!") --->3
//vowels("Why?") ---> 0

//Solution 1 (iterative)
function vowels(str) {
    let count = 0;
    const checker = ['a', 'e', 'i', 'o', 'u']

    for (let char of str.toLowerCase()) {
        if(checker.includes(char)){
            count++;
        }
    }

    return count
}


//Practice
function vowels(str) {
    const checker = ["a", "e", "i", "o", "u"];
    let numOfVowels = 0;

    for (let char of str.toLowerCase()){
        if (checker.includes(char)) {
            numOfVowels++
        }
    }

    return numOfVowels;
}

//Solution 2
function vowels(str) {
    //g = don't stop, i = insensitive to lowercase
    const matches = str.match(/[aeiou]/gi)
    
    // teritary function. If matches is true, return length.
    // If it's false which is NULL, return 0
    return matches ? matches.length : 0
}