"use strict";

let block = document.querySelectorAll(".block");

function sayRandomNumber() {
  alert(Math.round(Math.random() * 100));
}

block[1].onclick = function(event) {
  alert(event.type + " " + this.clientWidth + " " + event.currentTarget);
}
console.dir(block[1]);
