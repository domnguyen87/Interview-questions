//given an array and chunk size, divide the array into many subarrays
//where each subarray is of length size
//Example
//Chunk([1,2,3,4,5],2) --> [[1,2],[3,4],[5]]
//Chunk([1,2,3,4,5,6,7,8], 3) --> [[1,2,3],[4,5,6], [7,8]]

//Solution 1
function chunk(array, size) {
    //create empty array to hold chunks called "chunked"
    const chunked = [];

    //for each element in the "unchunked" array
    for(let element of array) {

        //retrevie the last elemtn in the "chunked"
        const last = chunked[chunked.length -1];

        //if the last element does not exist, or if its lengrh is
        //equal to chunk size
        if(!last || last.length === size) {

            //push a new chunk into "chunked" with the current element
            chunked.push([element]);
        } else {

            //else add the current element into the chunk
            last.push(element)
        }
    }

    return chunked
}

//Solution 2
function chunk(array,size) {
//Create empty 'chunked' array
//Create 'index' start at 0
//While index is less than array.length
    //Push a slice of length 'size' from 'array' into 'chucked'
    //Add 'size' to 'index'

//Hint: const letters = ['a', 'b', 'c', 'd', 'e']
    // letters.slice(0, 3)[start at 0 and slice up to 3]
    // ['a', 'b', 'c']   

    const chunked = [];
    let index = 0;

    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }

    return chunk
}