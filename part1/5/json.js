"use strict";

// JSON.stringify - transform obj to JSON
// JSON.parse - JSON to obj

let obj = {
  name: "shad",
  age: "22"
}
let json = JSON.stringify(obj);
// alert(json); returns string


//.stringify(value[, replace, space])
//eg .stringify(obj, replace(key, value) {alert(`key ${key}`)})
let json2 = JSON.stringify(obj, ["name"]); //particular chooshing
//if Object links to another Object it'll help to form JSON without issues
//alert(json2);
