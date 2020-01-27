"use strict";

//&& - and, || - or, ! - not

// ||

if (1 || 0) {
  alert("True");
}

let defName = "Buui";
let name = undefined || defName || "Some name"; //return "Buui" - the first true
alert(name);

// &&

name = undefined && defName && "Some name"; //return undefined - the first false
alert(name);
name = defName && "Some name"; //return "Some name" - the last true

name && alert("Name is true"); //return alert

// !
//
// !true - false
// !0 - true
//
// !!"some strint" - true //conver to boolean

let age = 44;
if (age >= 14 && age <= 90) {
  alert("age in the range");
}

let logIn = prompt("Enter you login", "Admin");
