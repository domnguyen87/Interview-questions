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

//Solution 2