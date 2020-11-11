// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


// use toString to turn the num to string so we can split, reverse, join it
// Math.sign()
// parseInt to turn the string back to number 
function reverseInt(n) {
    const reversed = n
        .toString()
        .split('')
        .reverse()
        .join('');

    // if (n < 0) {
    //     return parseInt(reversed) * -1;
    // }
    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
