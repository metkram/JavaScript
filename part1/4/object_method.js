"use strict";

let user = {
  name: "Boby",
  age: 43
};

user.sayHi = function() {
  alert(`hi, my name is Boby`);
};

//or

let user1 = {
  sayHi: function() {
    alert("I say HI");
  }
};

//or

let user2 = {
  sayHi() {
    alert("I say hi");
  }
};

//this

ler user3 = {
  name: "Name",
  sayHi() {
    alert(`my name is ${this.name}`); //we can use user3.name until this object is inside user3 variable
  }
};
