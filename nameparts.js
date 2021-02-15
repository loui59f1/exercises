"use strict";

function getNameParts(fullName) {
  fullName = "Louise Storegaard Nielsen";

  const firstSpace = fullName.indexOf(" ");
  const lastSpace = fullName.lastIndexOf(" ");

  const firstName = fullName.substring(0, firstSpace);
  const middleName = fullName.substring(firstSpace, lastSpace).trim();
  const lastName = fullName.substring(lastSpace).trim();

  console.log(
    `The firstname is ${firstName}, the middlename is ${middleName} and the lastname is ${lastName}`
  );
}

getNameParts();

function fullName(lastName, firstName, middleName) {
  console.log(
    `Hello my name is ${lastName} and my firstname is ${firstName} and ${middleName}`
  );

  const firstSpace = fullName.indexOf(" ");
  const lastSpace = fullName.lastIndexOf(" ");

  firstName = fullName.substring(0, firstSpace);
  middleName = fullName.substring(firstSpace, lastSpace).trim();
  lastName = fullName.substring(lastSpace).trim();
}

fullName("Potter", "Harry", "James");
