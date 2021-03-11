"use strict";

// Exercise 2
// gsap.to(".ball", { duration: 2, x: 400, rotate: 200, stagger: 0.2 });
// gsap.to(".ball", { y: -100, yoyo: true, repeat: -1 })
// gsap.to(".ball", { delay: 2, scale: 0 });

// Exercise 3
const timeline = gsap.timeline({ repeat: 2, repeatDelay: 1 });
timeline.to(".ball", { duration: 2, x: 400, rotate: 200 });
timeline.to(".ball", { delay: 1, scale: 0.5 });
timeline.to(".ball", { y: -600, x: 900 });