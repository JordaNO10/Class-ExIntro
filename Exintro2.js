// Created By Yarden halely & Natalia Akulov
// Function to print prime numbers up to a specified maxNumber
function printPrimes(maxNumber) {
  // Loop through numbers starting from 2 up to maxNumber
  for (let currNum = 2; currNum <= maxNumber; currNum++) {
    // Assume the current number is prime initially
    let isPrime = true;

    // Check divisibility from 2 up to the square root of currNum
    // We only need to check up to Math.sqrt(currNum) for efficiency
    for (let j = 2; j <= Math.sqrt(currNum); j++) {
      // If currNum is divisible by any number between 2 and sqrt(currNum),
      // it's not a prime number
      if (currNum % j === 0) {
        // 8 % 2
        // Set isPrime to false and exit the loop
        isPrime = false;
        break; // No need to check further divisors
      }
    }

    // If no divisors were found, currNum is prime, so print it
    if (isPrime) {
      console.log(currNum);
    }
  }
}

// Calling the function with 9 as the maximum number to print primes up to
printPrimes(237); // This will print primes up to 9
