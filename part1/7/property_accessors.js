"use strict";

let user = {
  name: "Start name",
  get realName() {
    return alert(this.name);
  },
  set changeName(value) {
    this.name = value;
    return alert(this.name);
  }

};

user.realName;
user.changeName = "Millet";

//get, set, enumerable, configurable
