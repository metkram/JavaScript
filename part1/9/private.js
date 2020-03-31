"use strict";

class House {
  #creator = "Allan"; //private properties, does not work atm in most browsers

  // #showCreator() {
  //   return #creator;
  // }
  whoIsCreator() {
    return this.#creator;
  }
}

let house = new House();
alert(house.whoIsCreator());
