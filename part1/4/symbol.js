"use strict";

let id = Symbol();
//or
let id1 = Symbol("id1");

let newObj = {
  name: "Vas",
  [id1]: 134 // square brackets link it to out Symbol on 5 row
}

//global Symbols
let firstSymbol = Symbol.for("id");
let secondSymbol = Symbol.for("id"); //it's linked to the same symbol as firstSymbol
//firstSymbol === secondSymbol

//Symbol.keyFor(key) returns symbol name
//alert(Symbol.keyFor(secondSymbol)); id

//description
//alert(Symbol.keyFor(id1)); underfined - couse it's local Symbol
//alert(id1.description); id1 - cause underfined works for all symbols 
