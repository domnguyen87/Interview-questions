// Given a string, reutrn the char that is most used
// maxChar("abccccs") === "c"
// maxChar("apple 121111") === "1"

//Common string Q's
//What is the most common char in the string
//Does Str A have the same char as str B ( is it an anagram?)
//Does the given str have any repeated char in it?

//take the string and convert it to an object. 
//Keys will be the letters. Values will be how many time it occured
const string = "Hello There!"
const chars = {}

for (let char of string) {
    if(!chars[char]) {
        chars[char] =1;
    } else {
        chars[char]++
    }
}

//Shorter version with tertinary operator
for (let char of string) {
    chars[char] = chars[char] +1 || 1;
}

chars;

// **SOLUTION**
function maxChar(str) {
    const charMap = {}

    for (let char of str) {
        if(charMap[char]) {
            charMap[char] ++;
        } else {
            charMap[char] = 1
        }
    }

    //when iterating through an object, use IN, not of

    for (let char in charMap) {
        if(charMap > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar
}