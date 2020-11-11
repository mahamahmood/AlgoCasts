// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// What is the most common character in the string?
// Does string A have the same characters as string B (is it an anagram)?
// Does the given string have any repeated characters in it?

// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// pseudocode 
// create an object where we can have a key value pair
// key being the num of times a value has been mentioned and value is the char
// loop through each char in the string
// check if the char has been added to the object already
// if true ++ if false assign it to 1
// create max and maxChar variables
// loop through the new obj of chars and check if char is more than max
// max is zero if char is more then assign it to maxChar

function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }
    //console.log(charMap);

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }
    // console.log(maxChar);

    return maxChar;
}


// function maxChar(str) {
//     const chars = {};
//     let max = 0;
//     let maxChar = '';

//     // for of to itrate over arrays and return values
//     for (let char of str) {
//         if (!chars[char]) {
//             chars[char] = 1;
//         } else {
//             chars[char]++;
//         }
//     }
//     console.log(chars);
    
//     // for in iterate over objects and return keys. char will be keys
//     for (let char in chars) {
//         if (chars[char] > max) {
//             max = chars[char];
//             maxChar = char;
//         }
//     }

//     return maxChar;

// }

maxChar('abcccccccd');

module.exports = maxChar;
