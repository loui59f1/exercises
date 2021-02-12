"use strict";

const student1 = {
  firstName: "Harry",
  lastName: "Potter",
};

const student2 = {
  firstName: "Harry",
  lastName: "Potter",
};

// Even though the objects look a like and are identical, they are not the same

if (student1 == student2) {
  console.log("They are the same");
} else {
  console.log("They are not");
}
