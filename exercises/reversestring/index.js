// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution one with pseudocode
//      split the string and convert to an array
//      reverse the array
//      join it to create the new string
// function reverse(str) {
//     const reverseString = str.split('').reverse().join('');
//     console.log(reverseString);
//     return reverseString
// }

// Solution One cleaned up
// function reverse(str) {
//     return str
//     .split('')
//     .reverse()
//     .join('');
// }

// Solution Two with pseudocode
// create an empty string 'reversed'
// loop through each character in the provided string, take the character and add it to the start of 'reversed'
// return the variable 'reversed'
// const reverse = (str) => {
//    let reversed = '';

//     for (let char of str) {
//         reversed = char + reversed;
//     }

//     return reversed;
// }

// Solution Three
function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}


module.exports = reverse;
