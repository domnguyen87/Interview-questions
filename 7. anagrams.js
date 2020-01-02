//Check to see if two provided strings are anagrams of each other
//One string is anagram of another it is uses the same char
//in the same quantity. Only consider char, not spaces or
//punchtutation. Consider capital letter to be the same as lowercase

//EXAMPLES
//anagrams('rail safety'), 'fairy tales' ) -- True
//anagrams('rail! safety!', 'fairy tales') -- True
//anagrams('Hi there', 'Bye there') -- False

//HINT
//const word = "HI THERE!!!!"
//word.replace(/[^\w]/g, " ").lowercase === hithere

//Solution 1
function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }
    return true;
}

//helper function
function buildCharMap(str) {
    const charMap = {};

    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1
    }

    return charMap
}

//practice 1
function buildCharMap(str) {
    const charMap = {}
    for (let char of str.replace('regex').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap
}

function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).lenght) {
        return false;
    }

    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }

    return true
}

//Solution 2
function anagrams(stringA, stringB) {
    return clearnString(stringA) === cleanString(stringB)
}

function cleanString(str) {
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('')
}

//Practice 2

function cleanString(str) {
    return str
        .replace("regex")
        .toLowerCase()
        .split('')
        .sort()
        .join('')
}

function anagram(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB)
}