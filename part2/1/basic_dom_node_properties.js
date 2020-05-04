"use strict";

// innerHTML
let firstBlock = document.querySelector("div");

firstBlock.innerHTML = "<marquee>Hi there</marquee>";

console.log(firstBlock.innerHTML);

//concatination

let secondBlock = document.querySelectorAll("div")[1];

firstBlock.innerHTML += "<br />I added this text to the original content";

secondBlock.innerHTML = "I copies content below to this div. <br />" + firstBlock.innerHTML;

// textContent

console.log(secondBlock.textContent); //shows only text, without tags

//hidden
//elem.hidden = true\false;

setInterval(() => secondBlock.hidden = !secondBlock.hidden, 2000);

//console.dir(elem) shows all properties
