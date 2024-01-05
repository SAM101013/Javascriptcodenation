//Activity 4: Define favorite films in list

const favoriteFilms = ["The Devil's Advocate", "War of the Worlds", "Minority Report", "Lucy"];

// Add Ghostbusters and sort the list
favoriteFilms.push("Ghostbusters");
favoriteFilms.sort();

// Loop through the films/check for Ghostbusters

for (let i = 0; i < favoriteFilms.length; i++) {
 const film = favoriteFilms[i];

 if (i === 2 && film === "Ghostbusters") {
   console.log("Yay Ghostbusters!");
 } else {
   console.log(`${i + 1}. ${film}`);
 }

 if (film !== "Ghostbusters" && i === 2) {
   console.log("Boo Get the Ghostbusters!");
 }
}

// Activity  1: Create an array of favorite films & loop through the array
const favoriteFilms2 = ["The Devil's Advocate", "War of the Worlds", "Minority Report", "Lucy", "The Book of Eli"];

// Added two extra films using the push method
favoriteFilms.push("Cape Fear");
favoriteFilms.push("Dusk Till Dawn");

// Looping through the array
for (const film of favoriteFilms) {
 console.log(`• ${film}`);
}

// Accessing a specific film using bracket notation
console.log(`My top film is: ${favoriteFilms[0]}`);

// Removing a film using splice method
favoriteFilms.splice(4, 1); // Removes "The Book of Eli" at index 4

// Sorting the array using the sort method
favoriteFilms.sort();
console.log("My favorite films in alphabetical order:");
for (const film of favoriteFilms) {
 console.log(`• ${film}`);
}

//Activity 2: Generate 6 random numbers between 1 and 50 

for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * 50) + 1;
    console.log(randomNumber);
  }  

//Activity 3 count 0-9/0-0

for (let i = 9; i >= 0; i--) {
    console.log(i);
  }
  

//Activity 5 Generate a random number between 1 and 30

for (let i = 0; i < 6; i++) {
    
const randomNumber = Math.floor(Math.random() * 30) + 1;
  
// Check if it's divisible by 7
if (randomNumber % 7 === 0) {

console.log(`${randomNumber} is divisible by 7!`);
    } 
else {

    console.log(`${randomNumber} is not divisible by 7.`);
    }
}
for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * 30) + 1;
  
if (randomNumber % 7 === 0) {
      console.log(`Random number ${randomNumber} is divisible by 7!`);
    } else {
// Skip logging for non-divisible numbers (no console output)
    }
}

//Activity 6: Create the arrays for Safia's & Celina's followers

const safiasFollowers = ["Quinn", "Alien02", "MrX", "Jekyll","PinkyPoo","DongleZ"];
const celinasFollowers = ["Dorito8", "JammyD", "SniffyC", "Hyde","PinkyPoo","DongleZ"];

// Nested loop to find mutual followers
console.log("Mutual followers:");
for (let i = 0; i < safiasFollowers.length; i++) {
  for (let j = 0; j < celinasFollowers.length; j++) {
    if (safiasFollowers[i] === celinasFollowers[j]) {
      console.log(safiasFollowers[i]);
    }
  }
}

//Activity 7
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5); // Output: 0, 1, 2, 3, 4

// Research & Understanding Do Loop:

// Structure: do { code to be executed } while (condition);
// Execution:
// The code block within the do block executes at least once.
// The condition is then checked.
// If the condition is true, the code block executes again.
// This process repeats until the condition becomes false
// Can lead to infinite loops if the condition never becomes false.
// Might be less readable for simpler iterations.

