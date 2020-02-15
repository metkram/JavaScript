"use strict";

//WeakMap's keys use only objects
let obj1 = {};
let wm1 = new WeakMap();
wm1.set(obj1: "some some"); //works while ("string key of number key", 111) won't

//if I'll delete obj1 Object it will be automatically deleted from wm1

//devs use WeakMap for temporary information
//we have
// .get(key)
// .set(key)
// .delete(key)
// .has(key)

//WeakSet work the same as Set but only with obj as key and devs use it for temporary information
// .add(key)
// .has(key)
// .delete(key)
// .size(key)
