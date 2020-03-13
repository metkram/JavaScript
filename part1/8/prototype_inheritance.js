"use strict";

let human = {
  spirit: true,
  dance() {
    alert("I am dancing");
  },
  born() {
    this.alive = true;
  }
};
let man = {

};
man.__proto__ = human;

if (man.spirit) alert("woman has spirit");

man.dance();

let woman = {
  stealBone: true,
  __proto__: man
};

woman.dance = function() {
  alert("I am a woman and I am dancing");
};

woman.dance();
woman.born();
alert(woman.alive); //true
alert(man.alive); //undefined
