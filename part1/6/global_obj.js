"use strict";

//window (or globalThis) is a global object for browser, so ...

let message = "Hi there";
window.alert(message);
globalThis.alert(message + " sencond method");

//we can write something to global object

window.currentUser = {
  name: "Jogh"
}

alert(window.currentUser.name);
