//Given a string, return true if the string is a palindrome
//or false if it's not. Palindromes are the same words revered
//Examples
//palindrome("abba") === true
//palindrome("asdf") === false
//make sure you're returning true or false

//Solution 1
function palindrome(str) {
    const reversed = str   
        .split('')
        .reversed()
        .join('')

    return str === reversed
}

//Solution 2
//Use 'every' to comepare which only works with arrays
//so you have to turn str to an array first
function palindrome(str) {
    return str.split('').every((char,i) => {
        return char === str[str.length - i -1];
    });
}

//Practice 1
function palindrome(str) {
    let reversed = str.split('').reverse().join('')

    return str === reversed
                        
}

//Practice 2
function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1]
    } )
}