"use strict";

class User {
  ages = 0; //without let
  constructor(name) {
    this.name = name;
  }

  get age() {
    return this.ages;
  }

  set age(value) {
    if (value < 0) {
      this.ages = 1;
    } else {
      this.ages = value;
    }
  }

  sayHi() {
    alert(`Hi, my name is ${this.name}`);
  }
}

let ivan = new User("Ivan");
ivan.age = -10;


ivan.sayHi();
alert(ivan.age);
