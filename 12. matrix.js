Function hint() {
    //Write a function that accepts an interger N
    //and returns a NxXN sprial matrix
    //
    //Example
    //  matrix(2)
    //  [[1,2],
    //  [4,3]]
    //
    //  matrix(3)
    //  [[1,2,3],
    //  [8,9,4],
    //  [7,6,5]]

    //Create empy array of arrays called "results"
    //Create counter var, starting at 1
    //As long as (start col <= end col) AND (start row <= end row)
    //  Loop from start col to end col
    //      At result[start-row][i] assisng counter var
    //      Increment counter
    //  Increment start row
    //  Loop from start row to end row
    //      At results[i][end_col] assign counter var
    //      Increment counter
    //  Decrement end column
    //  ....repeat for other two side

}

function matrix(n) {
    const results = []

    for (let i = 0; i < n; i++) {
        results.push([])
    }

    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1
    While(startColumn <= endColumn && startRow <= endRow) {
        //Top Row
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;

        //end Column
        for (let i = startRow; i <= endRow; i++) {
            results[i][endRow] = counter;
            counter++;
        }
        endColumn--;

        //Bottom row
        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter;
            counter++
        }
        endRow--

        //start column
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter;
            counter++;
        }
        startColumn++

    }

}
