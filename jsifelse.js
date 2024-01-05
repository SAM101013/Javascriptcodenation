if (11%2 === 0){console.log("this number is even")
} else (console.log("this number is odd")
)

let weather = "Cloudy"
if (weather === "Cloudy" && weather === "Rainy" && weather === "Sunny")
{ cpnsole.log("nice weather")
}
//  let day = "Saturday"
//  if (day == "Saturday" || day == "Saturday
 
let age = 16;
let canDrink = (age < 18) ? 'Too young' : 'Old enough'
console.log (canDrink)

// Fun times: Judge you on your car quiz!

let car = "BMW Series 3";

if (car == "Porsche" || car == "German"){
    console.log("Driving about in a German Whip, usually eating sausage and chips!");
}
else if (car == "BMW Series 3" || car == "BMW"){
    console.log ("You are a prancy show off with a very small Penile function!")
}
else if (car == "Honda" || car == "Toyota"){
    console.log ("You possess an Asian brain that sets you apart from the rest!")
}
else if (car == "Mercedes Series 5"){
    console.log ("Your Classy, Your Sassy, You take no prisoners baby!")
}
else if (car == "Lamboghini"){
    console.log ("Godfather we submit to thee, and thee shall Master time!")
}
else if (car == "Bentley"|| car == "Rolls Royce"){
    console.log ("Please command your driver to return to the Palace!")
}
else if (car == "Hyundai" || car == "Kia"){
    console.log ("The style of Seoul Is In your soul, good skin too!")
}
else{
    console.log("Your car is irelavant, matters to nobody and only serves as an emblem of your mediocrity!");
}

//Activity 1

let age2 = 16;
let Yesserve = (age < 17) ? 'You arent old enough' : 'Yes I can serve you'
console.log (Yesserve)

//Activity 2

// Create a variable for pizza 

let pizzaTopping = "SpicyBeef";  
// Any topping desired
let dislikedTopping = "pineapple";  
// Declaring disliked topping

// Switch statement to check my favorite toppings
switch (pizzaTopping.toLowerCase()) {
  case "mushrooms":
    console.log("Yummy! Mushrooms are my favorite!");
    break;
  case "olives":
    console.log("Delicious! I love olives on my pizza!");
    break;
  case "spicybeef":
    console.log("Hot! SpicyBeef is always a sizzling choice.");
    break;
  case "sweetcorn":
    console.log("Sweet! Sweetcorn adds a creamy crunch");
    break;
  case "bell peppers":
    console.log("Amazing! Picture perfect Picasso Pizza");
    break;
  case dislikedTopping:
    console.log("Eww, please hold the " + dislikedTopping + " for me!"); 
// DislikedTopping variable
    break;
  default:
    console.log("Sounds cool! I'm always open to trying new toppings.");
}

// Activity 3 Password check

let password = "Universe";  

if (password.length < 8) {
  console.log("Password is too short. Password must be at least 8 characters long.");
} 
else {
  console.log("Password:", password); 
 // Log the password if 8 or more characters
}
// Stretch goal 

let num = 15; 

// The number to check

if (num % 3 === 0 || num % 5 === 0) {
  console.log("This number is divisible by 3 or 5.");
} else {
  console.log("This number is not divisible by 3 or 5.");
}

//Activity 4 Fizz Buzz

let num1 = 15;  

// Any number to check

if (num1 % 3 === 0 && num1 % 5 === 0) {
  console.log("fizz buzz");
} else if (num1 % 3 === 0) {
  console.log("fizz");
} else if (num1 % 5 === 0) {
  console.log("buzz");
} else {
  console.log(num1);
}

//Activity 5 Create a program that can tell if a number is a palindrome

// Created a variable named num and store chosen number 333000666000333 in it. 
// This is the number we'll test to see if it's a palindrome.

let num2 = 333000666000333;
// defines a function called isPalindrome
function isPalindrome(num) {
  let reversedNum = 0;
  let originalNum = num;

  while (num > 0) {
    let lastDigit = num % 10;
    reversedNum = reversedNum * 10 + lastDigit;
  // Remove the last digit from num, process the next digit in the next loop iteration.
    num = Math.floor(num / 10);
  }
//compare and reverse the number and return the correct answer
  return originalNum === reversedNum;
}
// This conditional calls the isPalindrome function with num2 
// (the number to check) and prints a message:
if (isPalindrome(num)) {
  console.log(num + " is a palindrome.");
} else {
  console.log(num + " is not a palindrome.");
}

///Activity 6: Set where you are besed upon the times of day 

let time = 8;  
/// The current time

/// Name the place of work
let placeOfWork = "Codenation"; 
///Name town of home
let townOfHome = "Manchester";  

if (time === 7) {
  console.log("I am at home in " + townOfHome + ".");
} else if (time === 8) {
  console.log("I am commuting to work.");
} else if (time === 9) {
  console.log("I am at work at " + placeOfWork + ".");
} else {

///Handles all other times
  console.log("I'm not sure where I am at this time.");  

}

//Activity 7: Find the last vowel in a string of text(use a loop)

let string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufhedjwshi";
let lastVowelIndex = -1;

// Set to -1 in case no vowel found

// Iterates through string in reverse 
for (let i = string.length - 1; i >= 0; i--) {
  const char = string[i].toLowerCase(); 

if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    lastVowelIndex = i;
    break;  
// Exits the loop as soon as a vowel is found
  }
}

console.log("Index of the last vowel:", lastVowelIndex);

//Activity 9

let num3 = 12;
let num4 = 5;

let result = (num3 + num4) % 2 === 0
  ? num3 + num4 
///If sum is even, return the sum
  : num3 * num4;  
///Otherwise, return the product

console.log(result);

///Activity 8

function firstLastMatch(word) {
    if (word.length < 2) {
      return false;  
///Handles words with less than 2 characters
    }
    return word[0].toLowerCase() === word[word.length - 1].toLowerCase();
  }
  
///example word to examine
  let word = "Rider";
  let result1 = firstLastMatch(word);
  console.log("Word:", word, "First and last letter match?:", result);

  let num5 = "1222";

