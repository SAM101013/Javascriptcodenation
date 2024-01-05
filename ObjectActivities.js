//Activity 1
//person object which includes favorite songs & name
let person = {
    name: "Quinn",
    age: 42,
    favoriteSongs: ["Toxic by Britney Spears", "'So Amazing' by Luther Vandross"],
  
    sayHi() {
      return `Hello my name is ${this.name}`;
    }
  };
  
  console.log(person.sayHi()); // Output: Hello my name is Quinn

  //Activity 2 Create an object named pet

  let pet = {
    name: "Luna",
    typeOfPet: "Cat",
    age: 3,
    colour: "Black",
  
    eat() {
      return `${this.name} is eating`;
    },
  
    drink() {
      return `${this.name} is drinking`;
    }
  };
  
  console.log(pet.eat());  
// Output: Luna is eating
  console.log(pet.drink()); 
// Output: Luna is drinking
  
//Activity 3
class CoffeeShop {
    constructor(branch) {
      this.branch = branch;
      this.drinks = {
        "Coffee": 2.50,
        "Tea": 1.80,
        "Latte": 3.20,
        "Cappuccino": 3.50,
        "Mocha": 3.80,
      };
      this.food = {
        "Biryani": 7.99,
        "Bombay Potatoes": 7.99,
        "Pakoras": 4.99,
        "Roti": 2.50,
        "Poppadoms": 1.50,
        "Prawn Puri": 5.99,
      };
      this.orderedDrinks = [];
      this.orderedFood = [];
    }
  
    drinksOrdered(...drinks) {
      this.orderedDrinks.push(...drinks);
      const drinkCost = this.orderedDrinks.reduce((acc, drink) => acc + this.drinks[drink], 0);
      return `Your order at ${this.branch} is ${drinks.join(', ')} for £${drinkCost.toFixed(2)}`;
    }
  
    foodOrdered(...food) {
      this.orderedFood.push(...food);
      const foodCost = this.orderedFood.reduce((acc, item) => acc + this.food[item], 0);
      return `Your order at ${this.branch} is ${food.join(', ')} for £${foodCost.toFixed(2)}`;
    }
  
    totalOrder() {
      const totalCost = this.orderedDrinks.reduce((acc, drink) => acc + this.drinks[drink], 0) +
        this.orderedFood.reduce((acc, item) => acc + this.food[item], 0);
      return `Your total order at ${this.branch} comes to £${totalCost.toFixed(2)}`;
    }
  }
  
  // Example usage
  const coffeeShop1 = new CoffeeShop("Manchester");
  
  coffeeShop1.drinksOrdered("Coffee", "Latte");
  coffeeShop1.foodOrdered("Biryani", "Bombay Potatoes", "Roti");
  
  console.log(coffeeShop1.drinksOrdered());
  console.log(coffeeShop1.foodOrdered());
  console.log(coffeeShop1.totalOrder());
  



  
