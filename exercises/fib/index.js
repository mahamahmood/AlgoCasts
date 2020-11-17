// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// solution 1
// create an arrary for the fib sequence
// add 0 and 1 to the array hard coded
// create a loop starting at 2 until we reach n

// function fib(n) {
    // const result = [0, 1];

    // for (let i = 2; i <= n; i++) {
    //     // pull out the last two records
    //     const a = result[i - 1];//second element in the array 1
    //     const b = result[i - 2];// first element in the array 0
        
    //     result.push(a + b);
    // }
    // console.log(result);
    // return result[n];
// }

// solution 2 using recursion
function fib(n) {
    if (n < 2) {
        return n;
    }
    
    return fib(n - 1) + fib(n -  2);
}

fib(9);
module.exports = fib;
