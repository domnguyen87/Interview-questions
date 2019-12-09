//Write a fx that accepts a postive number N
//The tfunction should console log a pyramid shapre
//with N levels using the # char. Make sure the 
//pyramid has spaces on both the left and right sides

//Example
//pyramid(2)
//  ' # '
//  '###'
//
//pyramid(3)
//  '  #  '
//  ' ### '
//  '#####'

//HINT
//From 0 to n (iterate through rows)
//  Create  an empty string, "level"
//  From 0 to ??? (columns)
//      IF the col should have a #
//          add a "#" to "level"
//      ELSE
//          Add a space to "level"
//  Console log "stair"

//Solution 1 ***Iterative***
function pyramid(n) {
    const midpoint = Math.floor((2 * n - 1) / 2);

    for (let row = 0; row < n; row++) {
        let level = '';

        for (let column = 0; column < 2 * n - 1; column++) {
            if (midpoint - row <= column && midpoint + row >= column) {
                level += '#';
            } else {
                level += ' ';
            }
        }

        console.log(level)
    }
}

//Solution 2 ***Recursion
function pyramid(n, row = 0, level = "") {
    //basecase
    if (row === n) {
        return;
    }

    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    const midpoint = Math.floor((2 * n - 1) / 2);
    let add;
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#'
    } else {
        add = ' ';
    }
}
