"use strict";

//writable, enumerable, configurable

//Object.getOwnPropertyDescriptor(obj, propertyName); propertyName should be string

let user = {
  name: "Buratino"
};

let userProrerties = Object.getOwnPropertyDescriptor(user, "name");

alert(JSON.stringify(userProrerties));

//Object.defineProperty(obj, propertyName, descriptor) all three properties set to false

Object.defineProperty(user, "age", {
  value: 23,
  writable: true
});

let userProp2 = Object.getOwnPropertyDescriptor(user, "age");

alert(JSON.stringify(userProp2));

//Object.defineProperties

Object.defineProperties(user,{
  alive: {value: true, writable: true},
  luckyNum: {value: 1, writable: true, enumerable: true}
});

//Object.getOwnPropertyDescriptors(obj)

let allProp = Object.getOwnPropertyDescriptors(user);

alert(JSON.stringify(allProp));
