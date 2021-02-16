"use strict";

//___________________________________________
//RGB TO HEX

// function rgbtohex(r, g, b) {
//   r = r.toString(16).padStart(2, "0");
//   g = g.toString(16).padStart(2, "0");
//   b = b.toString(16).padStart(2, "0");
//   const hex = `#${r}${g}${b}`;

//   return `vores hex kode er ${r}`;
// }

// result = rgbtohex({240, 11, 66});

// console.log(result);

function greeting(r, g, b) {
  return { r, g, b };
}

const result = greeting({ r: 1, g: 3, b: 5 });

console.log(result);
