"use strict";

//map
//new Map();
//map.set(key, value); - add
//map.get(key); - get
//map.has(key); is there (true/false)
//map.delete(key); - delete
//map.clear(); - delete all
//map.size; - ...

//iteretion
//.keys() return keys
//.value() return values
//.entries() return key + value pairs
//eg for (let man of room.keys()) {
//    alert(man);
// }

//.forEach((value, key, map) => {})

let map = new Map([
  ["1", "str1"],
  [1, "str2"],
  [true, "str3"]
])

//Map from Object

let newUser = {
  name: "joht",
  age: 45
};

let newMap = new Map(Object.entries(newUser));

//Object from entries
let newObj = Object.fromEntries([
  ["nanan", 1],
  ["gue", 2],
  ["gjoe", 5]
])

//From map to Object

let newObj1 = Object.fromEntries(map.entries());

//Set
// let newSet = new Set(iterable);
// newSet.add(value);
// newSet.delete(value);
// newSet.has(value);
// newSet.clear();
// newSet.size;

//tasks

// function unique(arr) {
//   let set = new Set();
//   let newArr = [];
//   for (let word of arr) {
//     set.add(word);
//   }
//   set.forEach((item) => newArr.push(item));
//   return newArr;
// }
function unique(arr) {
    return Array.from(new Set(arr));
  }
let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
// alert(unique(values));

function aclean(arr) {
  let map = new Map();
  for (let word of arr) {
    map.set(word.toLowerCase().split("").sort().join(""), word);
  }
  return Array.from(map.values());
}
let anag = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert(aclean(anag));
