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


//toJSON() works the same as toString() in objects

// let obj1 = {
//   name: "Bbb",
//   toJSON() {
//     return this.name;
//   }
// }
// alert(JSON.stringify(obj1)); returns "Bbb" instead of full JSON file


//JSON.parse(str, [reviver])

let str1 = '{"name": "some name", "age": 22}';
let obj2 = JSON.parse(str1);
//alert(Object.keys(obj2));

//[reviver] we use if we need restore fuction
//e.g JSON.parse(jsonVar, function(key, value) {
// if (key == "date") {
//   return new Date(value);
// }
// return value;
// });


//tasks

let user = {
  name: "Василий Иванович",
  age: 35
};
let userJson = JSON.stringify(user);
let user1 = JSON.parse(userJson);
