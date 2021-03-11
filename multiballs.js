"use strict";

gsap.to(".ball", { duration: 2, x: 400, rotate: 200, stagger: 0.2 });
gsap.to(".ball", { y: -100, yoyo: true, repeat: -1 })
gsap.to(".ball", { delay: 2, scale: 0 });