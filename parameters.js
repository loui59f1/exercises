"use strict";

// It doesn't matter if this defining of the parameter
// happens before or after the function.
// sayHello("Peter");

// function sayHello(firstName) {
//   console.log(`Hello ${firstName}`);
// }

// const myName = "Louise";

// sayHello(myName);

// const lastName = "Lind";
// const firstName = "Peter";

// sayHello(myName);

// sayHello(you);

function presentPet(firstName, animalType, animalName) {
  console.log(
    `My name is ${firstName}, i have a ${animalType} called ${animalName}`
  );
}

const firstName = "Peter";
const animalType = "cat";
const animalName = "Mandu";

presentPet(firstName, animalType, animalName);

const myName = "Petra";
const type = "goldfish";
const theName = "Hawn";

presentPet(myName, type, theName);

// We can call the function with strings
presentPet("Hiemal", "goat", "isildur");

// expects three parameters, so when only two we get undefined
presentPet(myName, animalType);

// if more than the 3 parameters, it will ignore the fourth.
presentPet(animalName, firstName, animalType);
