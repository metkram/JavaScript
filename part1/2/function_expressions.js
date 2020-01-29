"use strict";

//it's function expression
let functionName = function() {
  alert("say hi");
};

//copy function
function someName() {
  //some code
}

let newFuncVar = someName;

//trick with function in the function

function alertYes() {
  alert("Yes");
}

function ask(question, yes, no = "no") {
  if (confirm(question)) {
    yes();
  } else {
    alert(no);
  }
}
//ask("Do you wanna ...?", alertYes);

//or
//ask("What do you wanna?", function() {alert("yes");});
