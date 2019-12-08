//Directions
//Write a program that console logs the number from 1 to n
//multiples of 3, print out "fizz". 5, print out "buzz".
//multiples of 3 & 5, print out "fizzbuzz"

//examples
//fizzBuzz(5): 1,2,fizz, 4, buzz

//hints: 11 % 3 = 1 (12 % 3 = 0)
//hints: 11 % 3 === 0 (false)
//hints: 12 % 3 === 1 (true)

function fizzbuzz(n) {
    for( let i = 1; i <= n; i++) {
        if(i % 3 === 0 && i % 5 ===0){
            console.log('fizzbuzz')
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else if ( i & 5 === 0) {
            console.log('buzz')
        } else {
            console.log(i);
        }
    }
}