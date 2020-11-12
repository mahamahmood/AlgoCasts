// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// pesudocode
// make an empty array 'words' that will hold the capitalized str
// split the input str by spaces to get an array
// for each word of the array
// // uppercase the first letter of the word
// // join the first letter with the rest of the string
// // push the result into 'words' array
// join 'words' into a string and return it

function capitalize(str) {
    const words = [];
    const splitStr = str.split(' ');

    for (let word of splitStr) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }

    return words.join(' ');
    
}

// second solution
// function capitalize(str) {
//     let result = str[0].toUpperCase();

//     for(let i = 1; i < str.length; i++) {
//         if (str[i - 1] === ' ') {
//             result += str[i].toUpperCase();
//         } else {
//             result += str[i];
//         }
//     }
//     return result;
// }

capitalize('hello world');

module.exports = capitalize;
