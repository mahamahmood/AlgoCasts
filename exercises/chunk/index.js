// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// solution 1
// Pesudocode
// Create empty array to hold chunks called 'chunked'
// For each element in the 'unchunked' array
// // Retrieve the last element in 'chunked'
// // If last element does not exist, or if its length is equal to chunk size
// // // Push a new chunk into 'chunked' with the current element
// // Else add the current element into the chunk

// function chunk(array, size) {
//     const chunked = [];

//     for (let element of array) {
//         const last = chunked[chunked.length - 1];
//         if (!last || last.length === size) {
//             chunked.push([element]);//pushing array & element at the same time
//         } else {
//             last.push(element);
//         }
//     }
//     console.log(chunked);
//     return chunked;
// }

// solution 2
// Pesudocode
// use method .slice(0, 3) 3 won't be included
// create empty 'chunked' array
// create 'index' variable start at 0
// loop while index is less than array.length
// // push a slice of length 'size' from 'array' into 'chunked'

const chunk = (array, size) => {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    return chunked;
}

chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);

module.exports = chunk;
