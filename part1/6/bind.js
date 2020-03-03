"use strong";

let user = {
  name: "jjj",
  sayHi() {
    alert(`Hi ${this.name}`);
  }
};

function func() {
  alert(this.name);
}

let funcUser = func.bind(user); //glue func and user obj

// funcUser(); //it works

let ownFunc = user.sayHi.bind(user);

// ownFunc(); //it works too

function mul(a, b) {
  return a * b;
}

let double = mul.bind(null, 2);

// alert(double(4)); //a = 2, b = 4

//some information I skipped. It's a sing that I stuck and I'm in trouble with lerning and understanding new information. Duck
