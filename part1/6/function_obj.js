"use strict";

let funName = function() {
  alert("I am function");
}

let name = funName.name; //return "funName"

let lengthFun = function(a, b, c) {
  alert("I have 3 arguments");
}

let args = lengthFun.length; //return 3, cause there're 3 arguments (a, b and c)

let addCustomProp = function() {
  //do something

  addCustomProp.counter++;
}
addCustomProp.counter = 0;
addCustomProp();
addCustomProp();
let counterRessult = addCustomProp.counter; //return 2, cause we launched function 2 times

//tasks

function makeCounter() {
  function counter() {
    return counter.count++;
  }
  counter.count = 0;

  counter.set = function(n) {
    counter.count = n;
  }

  counter.decrease = function() {
    return counter.count--;
  }

  return counter;
}

let myCounter = makeCounter();
myCounter.set(10);
alert(myCounter());
alert(myCounter());
alert(myCounter.decrease());
alert(myCounter.decrease());
alert(myCounter.decrease());
alert(myCounter.decrease());

//it's becoming more and more crazy
