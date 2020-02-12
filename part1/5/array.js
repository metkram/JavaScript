"use strict";

let arr0 = [];
let arr1 = new Array();

let cats = ["black", "red", "white"];

cats[2] = "navy"; //replace "navy" with "white"
cats[3] = "pink"; //add "pink" cat on 4th place
//cats.length return 4

//push - adds new element to the end cats.push("yello") adds "yello to the end"
//shift - deletes first element and move all data from back to forvard cats.shift() deletes "black"
//pop - deletes last element ... cats.pop() deletes "pint"
//unshift - adds element to the begining of the array cats.unshift("baige") adds "baige"

//push and unshift can add multiple elements cats.push("white", "black") adds to the end

for (let cat of cats) {
  //alert(cat);
}

//or even

for (let cat in cats) {
  //alert(cats[cat]);
}
