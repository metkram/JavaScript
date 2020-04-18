"use strict";

let redBody = function() {
  let color = Math.floor(Math.random() * 999999);
  document.body.style.background = "#" + color;
}

setInterval(redBody, 10000);

//it becomes much more interesting
