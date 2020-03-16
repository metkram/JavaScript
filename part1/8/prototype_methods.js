"use strict";

// Object.create(protoName, description);
//
// Object.getPrototypeOf(objName);
//
// Object.setPrototypeOf(objName, protoName);

let animal = {
  eats: true
};

let rabbit = Object.create(animal);

alert(rabbit.eats);

//or

let rabbit2 = Object.create(animal, {
  speak: {
    value: false
  },
  jumps: {
    value: true
  }
});

alert(rabbit2.speak);
