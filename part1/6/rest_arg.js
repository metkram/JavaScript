"use strict";

function calculateAllArgs(first, ...args) { //three dots here collect all args in one array
  let result = first;
  for (let arg of args) {
    result += arg;
  }
  return result;
}
calculateAllArgs(1, 2, 3, 4, 5); //1 + 2 + 3 + 4 + 5

//all arguments are in array named - arguments

function names() {
  alert(arguments[0]);
  alert(arguments[1]);
}
//names("YO", "second name") - alert "yo", alert "second name"

let na = ["name", "naem1", "ndsf"];
let na1 = ["1name", "nfsdfaem1", "nbbbbdsf"];

//names(...na) - here three dots transform array to arguments
//names(...na1, ...na)
//or names("yuio", ...na, ...na1, "234", ...na)
//or let comb = [...na, ...na1]
//let hi = "hello";
//let hiArr = [...hi] - [h, e, l, l, o]
