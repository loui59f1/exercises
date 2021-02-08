"use strict";

const name = "Peter".toLowerCase();
const nameLower = name.substring(0, 2).toLowerCase();
const nameLowerEnd = name.substring(3, 5).toLowerCase();
const nameUpper = name.substring(2, 3).toUpperCase();

console.log(`Hello my name is ${nameLower}${nameUpper}${nameLowerEnd}`);
