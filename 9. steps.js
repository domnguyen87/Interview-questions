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
//