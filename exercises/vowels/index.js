// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// solution 1
function vowels(str) {
    let count = 0;
    const checkVowel = ['a', 'e', 'i', 'o', 'u'];

    for (let char of str.toLowerCase()) {
        if (checkVowel.includes(char)) {
            count++;
        }
    }

    return count;

}

// solution 2

// function vowels(str) {
//     const matches = str.match(/[aeiou]/gi);
//     // if matches return an array then return length if null return zero
//     return matches ? matches.length : 0
// }

module.exports = vowels;
