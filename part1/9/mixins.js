"use stctict";

class User {
  constructor(name) {
    this.name = name;
  }
}

let speak = {
  sayHi() {
    alert(`Hi, I am ${this.name}`);
  },
  sayBye() {
    alert(`Bye, you interacted with ${this.name}`);
  }
};

Object.assign(User.prototype, speak);

let phill = new User("Phill");

phill.sayHi();
