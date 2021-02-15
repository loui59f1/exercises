"use strict";

function capitalize(str) {
  let name = "louise";
  const nameCap =
    name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase();

  console.log(`Hello my name is ${nameCap}`);
}

capitalize();
