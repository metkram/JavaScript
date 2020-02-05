"use strict";

function marry(man, woman) {
  man.wife = woman;
  woman.husband = man;

  retun {
    father: man,
    mother: woman
  }
}

let newFamily = marry({name: "Jack"}, {name: "Judi"});
/* Jack is linked to Judi as husband
Judi is linked to Jack as wife
Jack is linked to newFamily as father
Jusi is linked to newFamily as mother */
