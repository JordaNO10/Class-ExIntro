/**
 * Authors:
 * Programmer 1: Natalia Akulov
 * Programmer 2: Yarden Halely
 * 
 * File Name: ExIntro3.js
 * Purpose: Count the number of zeros in an array using a conditional expression.
 */

const numbers = [0, 1, 2, 0, 3, 0, 4, 0, 5]; // Example array of numbers

let zeroCount = 0; // Initialize a counter for zeros

// Count the number of zeros in the array
for (let num of numbers) {
  zeroCount += num === 0 ? 1 : 0; // Add 1 if the number is 0, otherwise add 0
}

// Print the result
console.log(`Number of zeros: ${zeroCount}`);
