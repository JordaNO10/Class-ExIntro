// Created By Yarden halely & Natalia Akulov
function isDivisible(usersNumber) {
  // Check divisibility
  const divisibleBy2 = usersNumber % 2 === 0; // Is the number divisible by 2?
  const divisibleBy3 = usersNumber % 3 === 0; // Is the number divisible by 3?
  const divisibleBy5 = usersNumber % 5 === 0; // Is the number divisible by 5?

  // Calculate the result
  const result =
    3 * Number(divisibleBy2 && divisibleBy3 && divisibleBy5) + // If divisible by 2, 3, and 5, return 3
    2 *
      Number(
        (divisibleBy2 && divisibleBy3 && !divisibleBy5) || // If divisible by 2 and 3 but not 5
          (divisibleBy3 && divisibleBy5 && !divisibleBy2) || // If divisible by 3 and 5 but not 2
          (divisibleBy2 && divisibleBy5 && !divisibleBy3) // If divisible by 2 and 5 but not 3
      ) +
    1 *
      Number(
        (divisibleBy2 && !divisibleBy3 && !divisibleBy5) || // If divisible only by 2
          (divisibleBy3 && !divisibleBy2 && !divisibleBy5) || // If divisible only by 3
          (divisibleBy5 && !divisibleBy2 && !divisibleBy3) // If divisible only by 5
      );

  // Print the result
  console.log(result);
}
let users_number = 2; // Change with any number you wish to check
isDivisible(users_number);
