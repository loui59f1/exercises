"use strict";

function nameParts(fullName) {
  let firstSpace = fullName.indexOf(" ");
  let lastSpace = fullName.lastIndexOf(" ");

  let firstName = fullName.substring(0, firstSpace);
  firstName = capitalize(firstName);
  let middleName = fullName.substring(firstSpace + 1, lastSpace);
  middleName = capitalize(middleName);
  let lastName = fullName.substring(lastSpace + 1);
  lastName = capitalize(lastName);

  return { firstName, middleName, lastName };
}

const theFullName = nameParts("louise storEGaard nielsen");
console.log(theFullName);

function capitalize(str) {
  str = str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
  return `${str}`;
}
