"use strict";

class Farm {
  static farmName = "Cucumber farm";
  static hello() {
    return alert(`Hello, you are at the ${this.farmName}`);
  }
}

Farm.hello();

alert(Farm.farmName);
