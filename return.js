"use strict";

function greeting(firstName) {
  return `Hello ${firstName}`;
}
const result = greeting("Peter");

console.log(result);

greeting("Any name");

console.log(greeting()); // returns undefined

const txt = `Greeting is ${greeting("a name")}`;

console.log(txt);
