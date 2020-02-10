"use strict";

//BigInt
let tenThousand = 1e4; //the same as let tenThousand = 10000;
let smallNumber = 1e-3; //0.001
let floatNegNumber = 1.12e-5; //0.0000112
let sixteen = 0xff;
let binaryNum = 0b1101;
let eighty = 0o00347;

//.toString(base) 16, 8, 2
let exampleNum = 12;
//alert(exampleNum.toString(2) + ` is ${exampleNum} in 2 base`);
//alert(exampleNum.toString(36) + ` is ${exampleNum} in 36 base`);

let numToNum = 1234..toString(2); //we need two dots or (1234).toString(2);

let numToFloor = Math.floor(1.1); //1, -1.1 = -2
let numToCeil = Math.ceil(-1.1); //-1, 1.1 = 2
let numToRound = Math.round(1.1); //1, -1.1 = -1
let numToTrunc = Math.trunc(1.1); //1, 1.6 = 1, -4.2 = 4
let numToFixed = (1.1264).toFixed(2); //"1.13" - string
let numToFixedNum = +(2.26).toFixed(1); //2.3

//isNaN
let isNanCheck = isNaN("str"); //true
//isFinite
let isFiniteCheck = isFinite(23); //true
isFiniteCheck = isFinite(Infinity); //false, isFinete("str") will return false too

//parseInt parseFloat
let parseIntExample = parseInt("1434j"); //1434
parseIntExample = parseInt("1.1345"); //1
parseIntExample = parseInt("s44"); //NaN
let parseFloatExample = parseFloat("3.3434fervre"); //3.3434
parseFloatExample = parseFloat("3.2.3"); //3.2

//alert(parseInt("2n3ee", 32));

//Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math

//alert(Math.random());
//Math.max(1, 5, -1, 10); return 10
//Math.min(1, 5, -1, 10); return -1
//Math.pow(2, 3); 2 ** 3

//task

// function task1() {
//   let firstNumber = +prompt("enter a number", "0");
//   let secondNumber = +prompt("enter one more number", "1");
//   alert(firstNumber + secondNumber);
// }
// task1();

// function task3() {
//   let number;
//   while(number % number != 0) {
//     number = +prompt("enter a number", "");
//     alert(number % number);
//   }
// }
// task3();

function task5(min, max) {
  let result;
  result = min + Math.round(Math.random() * (max - min));
  return result;
}
alert(`Our random number from 10 to 20 is ${task5(10, 20)}`);
