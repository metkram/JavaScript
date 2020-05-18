"use strict";

let blocks = document.querySelector(".blocks").querySelectorAll(".block");

console.log(blocks[1].classList);

blocks[0].classList.add("yellow");
blocks[1].classList.remove("red");
// .toggle - add or delete if it alredy exists
// .contains - true/false

//document.body.style.backgroundColor = prompt("enter a color of body", "yellow"); //two words atributes use camelCase

//getComputedStyle

let comSt = getComputedStyle(document.querySelector(".blocks"));
console.log(comSt.backgroundColor);
