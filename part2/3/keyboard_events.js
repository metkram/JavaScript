"use strict";

document.addEventListener("keydown", function(event){
  console.log(event.code);
  if (event.code == "KeyH") alert("h");
  event.preventDefault(); //dissable scroll
});
