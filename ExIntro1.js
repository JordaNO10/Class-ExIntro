/**
 * Authors:
 * Programmer 1: Natalia Akulov
 * Programmer 2: Yarden Halely
 * 
 * File Name: exIntro1.js
 * Purpose: Check a number's divisibility by 2, 3, and 5 and return a result
 *          based on the number of divisors without using control structures.
 */

/**
 * Validates if a given input is a valid integer number.
 * 
 * @param {any} input - The input to validate.
 * @returns {boolean} - True if the input is a valid integer number, false otherwise.
 */
function isValidNumber(input) {
  // Check if input is a number, not NaN, an integer, and non-negative
  return typeof input === 'number' && !isNaN(input) && input % 1 === 0 && input >= 0;
}

/**
* Determines the divisibility of a number by 2, 3, and 5 and prints the result.
* 
* @param {number} num - The number to check for divisibility.
* - Prints 3 if divisible by 2, 3, and 5.
* - Prints 2 if divisible by any two of them.
* - Prints 1 if divisible by only one of them.
*/
function isDivisible(num) {

  // Validate the input
  if (!isValidNumber(num)) {
    console.log(`Error: Invalid input "${num}".`);
    return;
  }
  // Check divisibility
  const divisibleBy2 = num % 2 === 0; // Is the number divisible by 2?
  const divisibleBy3 = num % 3 === 0; // Is the number divisible by 3?
  const divisibleBy5 = num % 5 === 0; // Is the number divisible by 5?

  // Calculate the result
  const result =
    3 * Number(divisibleBy2 && divisibleBy3 && divisibleBy5) + // Divisible by all three
    2 *
    Number(
      (divisibleBy2 && divisibleBy3 && !divisibleBy5) || // Divisible by 2 and 3
      (divisibleBy3 && divisibleBy5 && !divisibleBy2) || // Divisible by 3 and 5
      (divisibleBy2 && divisibleBy5 && !divisibleBy3) // Divisible by 2 and 5
    ) +
    1 *
    Number(
      (divisibleBy2 && !divisibleBy3 && !divisibleBy5) || // Only divisible by 2
      (divisibleBy3 && !divisibleBy2 && !divisibleBy5) || // Only divisible by 3
      (divisibleBy5 && !divisibleBy2 && !divisibleBy3) // Only divisible by 5
    );

  // Print the result
  result && console.log(result);
}


// Test the function
isDivisible(123); // Expected Output: 1 (Divisible only by 3)
isDivisible(30);  // Expected Output: 3 (Divisible by 2, 3, and 5)
isDivisible(10);  // Expected Output: 2 (Divisible by 2 and 5)
isDivisible(-5);  // Expected Output: Error
isDivisible('abc'); // Expected Output: Error
