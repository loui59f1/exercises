"use strict";

const person1 = {
  firstName: "Peter",
  age: 29,
  student: false,
};

const person2 = person1;

person2.firstName = "other Peter";

console.log(person1.firstName);

// This works, even though in objects exercise we thought otherwise.
// Its the same object, so we changed the variable person1-person2. They point to the object. They are pointers or references to an object.

let person3 = person1;

console.log(person3);
