"use strict";

// 16/2 return values

function fullName(lastName, firstName, middleName) {
  let result = "";
  result = `${firstName} ${middleName ? middleName : ""} ${lastName}`;
  return result;
}

const name = fullName("Nielsen", "Louise", "Storegaard");
console.log(name);
