"use strict";

let firstObject = {}; //literal
//or
let secondObject = new Object();

let user = {
  name: "UserName",
  age: 99,
  "two words": "you can use with quotes"
};
//alert(user.name);
user.isAdmin = true;
//alert(user.isAdmin);

delete user.age; //delete age from user object;

alert(user["two words"]); //if you want to use two words naming
//or
let key = "two words";
alert(user[key]);
//or
//let ask = prompt("whot do you want to know", "name"); //name
//alert(user[ask]); it'll return "UserName" if ask equal to "name"

//let fruit = prompt("What do you buy?", "strawberry");
let cart = {
  [fruit]: 3
};
//or
//let cart = {};
//car[fruit] = 3;


function makeUser(name, age) {
  return {
    name: name,
    age: age
    //or
    //name,
    //age
  };
}
let user1 = makeUser("FlatEather", 66);

//in
//alert("name" in user1); //return true
//alert("reg" in user1); //return false



//for..in
for (let key in user1) {
  //alert(key); //name, age

  //alert(user[key]); "FlatEather", 66
}

//object assign
let solarSystem = {
  isEarthIncluded: true,
  name: "Solar system"
};

let venus = {
  isVenusIncluded: true,
  name: "Venus"
};

Object.assign(solarSystem, venus); //solarSystem = {isEarthIncluded: true, isVenusIncluded: true, name: "Venus"};

//clone
let cloneSolarSystem = Object.assign({}, solarSystem);

//an object in an Object
let oneInOne = { //if we clone this object, newone.secondObject and oldone.secondObject will be linked to the same object
  name: "double object", //and we have to check if it\'s object, and if yes clone in deeply https://lodash.com/docs#cloneDeep
  secondObject: {
    name: "second",
    count: 2
  },
  age: 23
}


//tast
let emptyObj = {};

function isEmpty(obj) {
  let result = 0;
  for (let i in obj) {
    result++;
  }
  if (result > 1) {
    return false;
  } else {
    return true;
  }
}

//alert(isEmpty(emptyObj)); should return true
