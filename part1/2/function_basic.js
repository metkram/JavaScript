"use strict";

function functionName() {
  //some code
  let someVariable = 10; //this variable is visible only inside this function
}

function function1Name(var1, var2) {
  alert(var1);
  alert(var2);
}

function function2Name(var1, var2) {
  var1 = "some text " + var1;
  alert(var1); //it'll show "some text (variable that is stored in var1)"
  alert(var2);
}

//function2Name("another text"); - it'll show alert("some text and another text") and alert(undefined)

function function3Name(var1, var2 = "default text") { //here could be even another function
  alert(var2);
}

//function3Name("dsf"); - alert("default text")
//function3Name("sdf", "text"); - alert("text")

function calculateTwoDigits(dig1, dig2) {
  return dig1 + dig2; //empty "return" returns "undefined"
}

// function names' prefixies:
// show
// get
// calc
// create
// check
