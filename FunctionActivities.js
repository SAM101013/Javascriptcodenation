//Functions/activities

///Activity 1 Arrow fuction syntax

function factorial(n){

if((n===0) || (n===1)) {
return 1;
}else{
 return (n * factorial (n-1));
 }
 }
console.log(factorial(33));


// // Replaced function with =>: The arrow function syntax uses => to define the function.
// // Removed return keyword: In single-line arrow functions, the implicit return allows you to omit the return keyword.
// // Kept parentheses around n

// //Activity 2 Add parameters and order count

let orderCount = 0;

const takeOrder = (size, topping) => {
  orderCount++;
  console.log(`Order #${orderCount}: Pizza with ${size} crust and ${topping}`);
};

takeOrder("medium", "pepperoni");
takeOrder("large", "extra cheese");

console.log(`Total orders: ${orderCount}`);

//Activity 3 cash machine: With Simulated user input and output
function simulateInput(prompt) {
  console.log(prompt);
  return prompt.startsWith("Enter PIN") ? "1234" : "100"; // Example input
}

function simulateOutput(message) {
  console.log(message);
}

// Cash machine logic
let availableFunds = 500;
const correctPIN = 1234;

function getPIN() {
  const enteredPIN = parseInt(simulateInput("Enter your PIN (4 digits):"));
  return enteredPIN === correctPIN;
}

function processWithdrawal() {
  const requestedAmount = parseInt(simulateInput("Enter withdrawal amount:"));

  if (requestedAmount <= availableFunds) {
    availableFunds -= requestedAmount;
    simulateOutput(`Dispensing ${requestedAmount} in cash.`);
    simulateOutput(`Your remaining balance is: ${availableFunds}`);
  } else {
    simulateOutput("Insufficient funds. Please enter a lower amount.");
  }
}

// Initiate the cash machine simulation
simulateOutput("Welcome to Sophs simulation Cash Machine!");

if (getPIN()) {
  processWithdrawal();
} else {
  simulateOutput("Incorrect PIN. Please try again.");
}

simulateOutput("Thank you for using Sophs simualtion Cash Machine!");
