//Write a function that accepts a string. The function should capitalize
//the first letter of each word of the sting and return

//Example
//capitalize('a short sentence') --> 'A Short Sentence'
//capitalize('a lazy fox') --> 'A Lazy Fox'
//capitalize('lookm it is working!') --> 'Look, It Is Working!'

//HINT
//str.slice(beingIndex[,endIndex])
//const word = "there"
//word[0].toUpperCase() --> T
//word.slice(1) --> here

//1.Make empy array "words"
//2.Split the input str by space to get an array
//3.For each word in the array
    //4.Uppercase the first letter of the word
    //5.Join first letter with rest of the string
    //6.Push results into "words" array
//7. Join "words" into a string and return it

//Solution1
function capitalize(str) {
    const words = [];

    for (let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }

    return words
    .join(' ')
}

//Solution 2
//HINT
//1. Create "results" which is the first char of the input str capitalized
//2. For each character in the string
    //3. If the charachter to the left a space
        //Capitalize it and add it to "results"
    //4. Else
        //Add it to "results"
function capitalize(str) {
    let result = str[0].toUpperCase();

    for ( let i = 1; i < str.length; i++) {
        if(str[i-1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }

    return result
}