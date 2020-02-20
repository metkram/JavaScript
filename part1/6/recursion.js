"use strinct";

function sumTo(n) {
  if (n == 1) {
    return n;
  } else {
    return n + (sumTo(n - 1));
  }
}
//alert(sumTo(100));

function factorial(n) {
  if (n == 1) {
    return n;
  } else {
    return n * factorial(n - 1);
  }
}
//alert(factorial(5));

function fib(n) { //still can't get how it works
  if (n <= 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}
//alert(fib(4));

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printlist(list) {
  if (list.next == null) {
    alert(list.value);
    return;
  } else {
    alert(list.value);
    return printlist(list.next);
  }
}
//printlist(list);

function createList(n) {
  if (n == 1) {
    return null;
  } else {
    return {value: n, next: createList(n - 1)};
  }
}
//alert(JSON.stringify(createList(6)));

//my mind is exploded
