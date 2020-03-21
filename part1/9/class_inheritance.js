"use strict";

class CosmicObj {
  constructor(name) {
    this.name = name;
    this.weight = 0;
  }
  start(mass) {
    this.weight = mass;
  }
}

class Planet extends CosmicObj { //inheritance is almost the same as it is in Java
  becomeLiveble() {
    this.atmosphere = true;
    alert(`I have atmosphere, I need new creatures here, my mass is ${this.weight}`);
  }
}

let earth = new Planet("Earth");
earth.start(300);
earth.becomeLiveble();

//its own constructor

class Meteor extends CosmicObj {
  constructor(name, dangerous) {
    super(name);
    this.dangerous = dangerous;
  }
}

let cobal = new Meteor("Cobalst", true);
alert(`My name is ${cobal.name} and status of my dangerous is ${cobal.dangerous}`);
