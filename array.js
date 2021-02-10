"use strict";

// Creating an array with 3 people
const people = ["Harry", "Ron", "Hermione"];

let result;

// Adding a new person // See the index of new person and array
result = people.push("Draco");
result = people.push("Neville");
result = people.push("Luna");

// Creates new person on 1st spot
people[1] = "Ginny";

// Creates multiple new persons
result = people.push("Fred", "George");

// Returns index of Fred (would be 6)
result = people.indexOf("Fred");

console.log(result);
console.log(people);

// Creates array from string
const letters = Array.from("abcdefghijklmnopqrstu");

console.log(letters);
