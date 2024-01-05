let favouriteDrink = "coffee";
console.log(favouriteDrink);

let favouriteFood = "biriyani";
console.log(favouriteFood);

let name = "Sophia";
let age = 42;
let favDrink = "Coffee";

console.log(
  "Hi my name is ${name}. I am ${age} and my favourite drink is ${favDrink}."
);

age = 4;
favDrink = "Tea";

console.log(
  "Hi my name is ${myName}. I am ${age} and my favourite drink is ${favDrink}."
);
let myName = "Sophia";
let myAge = 42;
let myfavcolor = "green";

console.log(
  "Hi my name is ${myName}. I am ${age} and my favourite color is ${myfavcolor}."
);

// Get today's date
const today = new Date();
const currentMonth = today.getMonth(); 

// Months are 0-indexed (0 = January, 11 = December)
const currentDay = today.getDate();

// Set birthday
const birthdayMonth = 4; // April is month 4
const birthdayDay = 13;

// Calculate the difference in days
let daysUntilBirthday = 0;

if (currentMonth === birthdayMonth) {
  // Same month: calculate days directly
  daysUntilBirthday = birthdayDay - currentDay;
} else {
  // Different months:
  daysUntilBirthday = today.getDate(); // Remaining days in current month

  // Add days in full months between today and birthday month
  for (let month = currentMonth + 1; month < birthdayMonth; month++) {
    daysUntilBirthday += 30; // Assume 30 days in each month for simplicity
  }

  // Add days in birthday month
  daysUntilBirthday += birthdayDay;
}

// Account for leap year (February has 29 days)
if (
  birthdayMonth > 1 &&
  today.getFullYear() % 4 === 0 &&
  (today.getFullYear() % 100 !== 0 || today.getFullYear() % 400 === 0)
) {
  daysUntilBirthday++;
}

// Output the result
console.log(`There are ${daysUntilBirthday} days until your birthday!`);

//TicTacToe Board

// Initialize variables for 9 spaces
let space1 = " ";
let space2 = " ";
let space3 = " ";
let space4 = " ";
let space5 = " ";
let space6 = " ";
let space7 = " ";
let space8 = " ";
let space9 = " ";

// Example moves
space1 = "X";
space5 = "O";
space9 = "X";

// Display the board with template literals
console.log(`
 ${space1} | ${space2} | ${space3}
---|---|---
 ${space4} | ${space5} | ${space6}
---|---|---
 ${space7} | ${space8} | ${space9}
`);
