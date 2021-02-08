"use strict";

const name = "Louise Storegaard Nielsen";

const firstSpace = name.indexOf(" ");
const lastSpace = name.lastIndexOf(" ");

const firstName = name.substring(0, firstSpace);
const middleName = name.substring(firstSpace, lastSpace).trim();
const lastName = name.substring(lastSpace).trim();

console.log(
  `The firstname is ${firstName}, the middlename is ${middleName} and the lastname is ${lastName}`
);
