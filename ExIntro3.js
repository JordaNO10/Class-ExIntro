/**
 * Authors:
 * Programmer 1: Natalia Akulov
 * Programmer 2: Yarden Halely
 * 
 * File Name: ExIntro3.js
 * Purpose: Count the number of zeros in an array.
 */

/**
 * Validates if the input is a valid array of numbers.
 * 
 * @param {any} arr - The input to validate.
 * @returns {boolean} - True if the input is a valid array of numbers, false otherwise.
 */
const validateArray = (arr) => {
  // Check if the input is an array like object
  const isArray = arr && typeof arr === 'object' && typeof arr.length === 'number';

  // If it is not an array like object, return false
  if (!isArray) {
    console.log("Error: Input is not an array.");
    return false;
  }

  // Check if all elements are numbers using a loop
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      console.log("Error: Array contains non number elements.");
      return false;
    }
  }
  return true; // Input is valid
};

/**
 * Counts the number of zeros in an array.
 * 
 * @param {number[]} arr - The input array to analyze.
 * @returns {number} - The number of zeros in the array, or -1 if the input is invalid.
 */
const countZeros = (arr) => {
  if (!validateArray(arr)) {
    return -1; // return -1 if validation fails
  }
  return arr.filter((num) => num === 0).length; // count and return zeros
};


// Test cases
console.log(countZeros([0, 1, 125, 0, 3, 0, 65, 0, 0, 15])); // Expected: 5
console.log(countZeros([1, 2, 3, 4, 5]));                  // Expected: 0
console.log(countZeros([0, 0, 0, 0]));                     // Expected: 4
console.log(countZeros([]));                               // Expected: 0
console.log(countZeros(null));                             // Expected: -1 (Invalid input)
console.log(countZeros("string"));                         // Expected: -1 (Invalid input)
console.log(countZeros([0, "zero", 1]));                   // Expected: -1 (Invalid input)
