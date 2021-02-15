"use strict";

function capitalize(str) {
  console.log(str);

  const first = str.substring(0, 1).toUpperCase();
  const second = str.substring(1, 6).toLowerCase();
  const result = `${first}${second}`;

  console.log(`Hello my name is ${result}`);
}

const str = "loUISe";
capitalize(str);

function fullName(lastName, firstName, middleName = "") {
  const result = firstName + " " + middleName + " " + lastName;

  console.log(result);
}

fullName("Potter", "Harry", "James");
