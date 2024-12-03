/**
 * Authors:
 * Programmer 1: Natalia Akulov
 * Programmer 2: Yarden Halely
 * 
 * File Name: ExIntro2.js
 * Purpose: Print all prime numbers less than 237.
 */

/**
 * Determines whether a number is prime.
 * 
 * @param {number} num - The number to check for primality.
 * @returns {boolean} - True if the number is prime, false otherwise.
 */
function isPrime(num) {
  if (num < 2) return false; // Numbers less than 2 are not prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // Divisible by another number
  }
  return true;
}

/**
* Prints all prime numbers less than a given limit.
* 
* @param {number} limit - The upper limit (exclusive) for prime numbers.
*/
function printPrimes(limit) {
  for (let i = 2; i < limit; i++) {
    isPrime(i) && console.log(i); // Print the number if it is prime
  }
}

// Print all prime numbers less than 237
printPrimes(237);
