"use strict";

// Defining object

let object = {
  firstname: "Peter",
  age: 29,
  student: false,
};

console.log(`${object.firstname} is ${object.age} years old`);

console.log(object);

console.log(object.lastName);

// Adding properties

object.lastName = "Lind";

console.log(object.lastName);

console.log(object);

//Remove properties

// Only sets the value to undefined (could also be null)

object.lastName = undefined;

console.log(object.lastName);
console.log(object.middleName);

// Removes a property completely

delete object.lastName;

console.log(object.lastName);
console.log(object);

// let vs. const

const object2 = {
  firstname: "Peter",
  age: 29,
  student: false,
};

// We can change the heigt eve though its a const
object2.age++;

console.log(object2);

const object3 = {
  firstname: "Louise",
  age: 25,
  student: true,
};

// This wont work, cause a const cannout be changed like this
object2 = object3;

// What you can do is this, change the properties:
object2.firstname = object3.firstname;

console.log(object2);
