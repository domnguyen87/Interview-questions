//Write a fx that accepts a positive number N.
//The fx should console log a step shape
//with N levels using the # char. Make sure the
//step has spaces on ther right hand side!

//Example
//Step(2)   Step(3)
//  '# '    '#  ' 
//  '##'    '## '
//          '###'

//****HINT
//From 0 to n ( iterate through rows)
//  Create an empty string, "stairs"
//  From 0 to n ( iterate trhough columns)
//      IF the current col equal or last than the current row
//          Add a "#" to stair
//      ELSE
//          Add a space to "stair"
//  Console log "stair"

//****SOLUTION*/
function steps(n){
    for (let row = 0; row < n; row++){
        let stair = "";

        for(let col = 0; col < n; col++) {
            if(col <= row) {
                stair += "#";
            } else {
                stair += " ";
            }
        }

    console.log(stair)
    }
}

//***Recursive solution*/
//HINT
//Figure out the bare miniuum pieces of information to represent your problem
//Give reasonable defaults to the bare minium pieces of info
//Check the base case. Is there any work left to do? If not, return
//Do some work. Call your fx again, making sure the arugmens have changed in some fashion

function printNumber(n){
    //basecase
    if(n===0){
        return;
    }
console.log(n);
printNumber(n-1);
}
printNumber(10);

//If(row === n), then we have hit the end of our problem
//If the "stairs" string has a length === n then we are at the end of a row
//If the length of the stair string is less than or equal to the 
//row number we're working on, we add a "#", otherwise add a space

function steps(n, row = 0, stair =""){
    if( n===row ) {
        return;
    }

    if (n === stair.length) {
        console.log(stair);
        return steps(n, row + 1);
    }

    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }
}
