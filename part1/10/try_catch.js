"use strict";

try {
  alert("Hello");
} catch (e) {
  alert("error");
  //catch won't be activated cause thre's no errors in try block
}

//e has .name .message .stack

try {
  sendMessage(); //there isn't any function with name sendMessage, after that we go to the catch block
  alert("Message has been sent"); //this alert will be ignored
} catch (e) {
  // alert(`There is some error (${e.name}), fix it`);
  // alert(e.message);
  // alert(e.stack);
}

//trow
//Error SyntaxError ReferenceError

try {
  if (!name) throw new SyntaxError("There is no name");
} catch (e) {
  alert(`we have ${e}`);
}
