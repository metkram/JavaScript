"use strict";

function User(name) {
  this.name = name;
  this.age = 1;
}

let user = new User("Fighter");
alert(`my name is ${user.name} and I\'m ${user.age} days old`);

function SayHiBot(name) {
  this.name = name;
  this.sayHi = function() {
    alert(`Hi, I'm bot and my name is ${this.name}`);
  }
}

let newHiBot = new SayHiBot("BIbi");
newHiBot.sayHi();
