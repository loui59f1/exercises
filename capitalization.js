"use strict";

function capitalize(str) {
  let name = "louise";
  const nameCap =
    name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase();

  console.log(`Hello my name is ${nameCap}`);
}

capitalize();

function greeting(firstName) {
  return `Hello ${firstName}`;
}

// 16/2 - return values

const result = greeting("Peter");
console.log(result);

function capital(str) {
  str = str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
  return `Hello ${str}`;
}

const capName = capital("marLEY");
console.log(capName);
