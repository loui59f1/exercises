"use strict";

// Flyt bolden mod højre
gsap.to(".ball", { duration: 2, x: 400 });

// Roter bolden
gsap.to(".ball", { duration: 2, rotate: 200 });

// Når bolden er nået de x: 400, skaler til 0
gsap.to(".ball", { delay: 2, scale: 0 });