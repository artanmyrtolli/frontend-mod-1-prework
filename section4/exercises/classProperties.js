/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any properties at this time!!

// Prompt 1: Dog
class Dog {

};

var dog1 = new Dog ();
console.log(dog1);

var dog2 = new Dog ();
console.log(dog2);

// Prompt 2: Snack

class Snack {

}

var snack1 = new Snack ();
console.log(snack1);

var snack2 = new Snack ();
console.log(snack2);

// Prompt 3: Shirt

class Shirt {

}

var shirt1 = new Shirt();
console.log(shirt1);

var shirt2 = new Shirt();
console.log(shirt2);
//
// //-------------------
// // Part 2: Properties
// //-------------------
//
// // For each prompt:
//   // Write a class skeleton
//   // Add a constructor method
//   // Assign 3 properties (names and values of your choice) to each class
//   // Create an object instance and store in variable
//   // Log that variable to the console.
//
//   // Prompt 1: Dog
  class Dog {
    constructor (breed, hair, size) {
      this.breedType = breed;
      this.hairLength = hair;
      this.dogSize = size;
    }
  };

  var dog1 = new Dog ();
  console.log(dog1);


  // Prompt 2: Snack

  class Snack {
    constructor (type, amount, healthy) {
      this.snackType = type; //pretzels, popcorn, ice cream, w/e
      this.snackAmount = amount; //weight in grams
      this.isHealthy = healthy; //boolean
    }
  }

  var snack1 = new Snack ();
  console.log(snack1);


  // Prompt 3: Shirt

  class Shirt {
    constructor (type, color, fabric) {
      this.type = type;
      this.color = color;
      this.fabric = fabric;
    }
  }

  var shirt1 = new Shirt();
  console.log(shirt1);


//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

  // Prompt 1: Dog

  class Dog {
    constructor (breed, hair, size) {
      this.breedType = breed;
      this.hairLength = hair;
      this.dogSize = size; //in lbs
    }
  };

  var dog1 = new Dog ("rottweiler", "short", 50);
  console.log(dog1);

  var dog2 = new Dog ("chihuahua", "short", 15);
  console.log(dog2);

  // Prompt 2: Snack

  class Snack {
    constructor (type, amount, healthy) {
      this.snackType = type; //pretzels, popcorn, ice cream, w/e
      this.snackAmount = amount; //weight in grams
      this.isHealthy = healthy; //boolean
    }
  }

  var snack1 = new Snack ("popcorn" , 100 , false);
  console.log(snack1);

  var snack2 = new Snack ("blueberries" , 80, true);
  console.log(snack2);

  // Prompt 3: Shirt

  class Shirt {
    constructor (type, color, fabric) {
      this.type = type;
      this.color = color;
      this.fabric = fabric;
    }
  }

  var shirt1 = new Shirt("t-Shirt", "white", "cotton");
  console.log(shirt1);

  var shirt2 = new Shirt("v-neck sweatshirt", "black", "polyester");
  console.log(shirt2);
