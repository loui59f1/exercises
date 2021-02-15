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

// Sætter i rigtige rækkefølge

function getNameParts(fullname) {
  const firstSpace = fullname.indexOf(" ");
  const lastSpace = fullname.lastIndexOf(" ");

  const firstname = fullname.substring(0, firstSpace);
  const middlename = fullname.substring(firstSpace, lastSpace);
  const lastname = fullname.substring(lastSpace);

  console.log(`Hello my name is ${firstname}${middlename}${lastname}`);
}

getNameParts("Harry James Potter");
