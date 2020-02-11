"use strict";

let testStr = "qwerty12345qw";

//alert(testStr.length);
//alert(testStr.charAt(4)); //or testStr[4]

// for(let i of testStr) {
//   alert(i);
// }

// alert(testStr.toLowerCase());
// alert(testStr.toUpperCase());

//alert(testStr.indexOf("qw")); //return 0
//alert(testStr.lastIndexOf("qw")); //return 11
//alert(testStr.includes("qw")); //return true
//.startWith .endsWith
//.slice(1) return "werty12345qw"
//.slice(1, 3) return "we"
//.slice(-4) return "45qw"
//.slice(-4, -1) return "45q"
//.subString and .substr are almost the same

//alert(testStr.codePointAt(0)); //113
//alert(String.fromCodePoint(113)); //q

//task1

function ucFirst(string = "test string, so I decline checks") {
  return string[0].toUpperCase() + string.slice(1);
}
//alert(ucFirst("howareYOU"));

//task2

function checkSpam(string = "") {
  if (string.toLowerCase().includes("viagra") || string.toLowerCase().includes("xxx")) {
    return true;
  }
  return false;
}
// alert(checkSpam("viaGra"));
// alert(checkSpam("xxx"));
// alert(checkSpam("some string"));

//task3

function truncate(string, length) {
  if (string.length > length) {
    return string.slice(0, length - 3) + "...";
  }
  return string;
}
// alert(truncate("some string", 5));
// alert(truncate("some string", 95));

//task4

function ext(string) {
  return +string.slice(1);
}
// alert(ext("d4345435"));
// alert(ext("x5435"));
