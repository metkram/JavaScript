"use strict";

let newDiv = document.createElement("div");
//or
let newText = document.createTextNode("Hi there, I am text node");

newDiv.className = "block";
newDiv.innerHTML = "<b>Bold text</b>";

document.body.append(newDiv);
// .prepend
// .append
// .before
// .after
// replaveWith


// .insertAdjacentHTML

let elem = document.querySelectorAll(".block"); //here is some trouble cause it was looking for divs before full uploading of page
//and when I insert new div after end in rewrites div from 10s row

elem[0].insertAdjacentHTML("beforebegin", "<div class='block'>beforebegin insert html</div>");
// .beforebegin
// .afterbegin
// .beforeend
// .afterend

// .insertAdjacentText
// .insertAdjacentElement

elem[1].insertAdjacentElement("afterend", newDiv);

//Remove node

setTimeout(() => elem[1].remove(), 5000);

//cloneNode(true/false)

let newDiv2 = newDiv.cloneNode(true);
newDiv2.querySelector("b").innerHTML = "cloned div";

elem[0].before(newDiv2);
