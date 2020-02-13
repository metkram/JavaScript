"use strict";

//splice arrName.splice(position, howMuch, elementToInserst)
let sentence = ["my", "name", "is", "bob"];
sentence.splice(3, 1); //delete "bob" and return it
let removed = sentence.splice(0, 1, "your"); //replace "my" with "your" and send "my" to removed variable
sentence.splice(3, 0); //return 3 element without deleting
//negative indexes point us to the end of array
sentence.splice(-1, 0); //return one before last element
//-----------------------------
//slice arr.slice(startIndex, endIndex)

//contac arr.concat(arr1, arr2, etc) - concat arr with arr1 and arr2 and etc

//forEach sentence.forEach(function(item, index, array) {})
//-----------------------------
//arr.indexOf(item, from) return index, if it finds or -1

//arr.lastIndexOf(imem, from) the same but from the end

//arr.includes(item, from) return true if in finds

//let users = [{id: 1, name: "qwe"}, {id: 2, name: "wer"}];
//.find(function(item, index, array))
//let user = users.find((item) => item.id == 1)
//user.name == "qwe" true

//arr.findIndex works the same as find but return index instead of item

//filter works the same as find but return all elements
//e.g. ourUsers = users.filter((item) => item.id > 0)

//-------------------
//map
//arr.map(function(item, index, array)) return new array with modified elements
//let newArr = sentense.map((item) => item.length) return [2, 4, 2, 3]
//-------------------
//sort
//let numArr = [4, 1, 3, 15]
//numArr.sort() - [1, 15, 3, 4]

// function compareNumeric(a, b) {
//   if (a > b) return 1;
//   if (a == b) return 0;
//   if (a < b) return -1;
// }
//numArr.sort(compareNumeric) - [1, 3, 4, 15]

//-----------------
//reverse
//numArr.reverse() - [15, 4, 3, 1]

//-----------------
//.split(", ")
//let chatUsers = "Bob, Cat, Nancy";
//let usert = chatUsers.split(", ") - ["Bob", "Cat", "Nancy"]
//let firstUser = chatUsers.split(", ", 1) - ["Bob"]
//.split('') will split by letters ["B", "o", "b", ",", etc]

//----------
//.join(glue)
//let nameArr = ["sun", "venus"]
//let planetString = nameArr.join(";") - "sun;venus"

//---------------------
//.reduce(function(previousValue, item, index, array), [initial])
//[2, 3, 4, 5, 6].reduce((factorial, element) => factorial * element, 1) - 1 * 2 * 3 * 4 * 5 * 6
//if there isn't [initian] initial will be equal to arr[0]

//-----------
//Array.isArray(value) if value is array it'll return true else false
//Array.isArray([1, 2]) - return true

//tasks

function camelize(string) {
  let result = string;
  if (string[0] == "-") {
    result = string.slice(1);
  }
  result = result.split("-");
  result = result.map((item) => item[0].toUpperCase() + item.slice(1));
  if (string[0] != "-") {
    result[0] = result[0].toLowerCase();
  }
  result = result.join("");
  return result;
}
// alert(camelize("some-dind-of-you"));
// alert(camelize("-dind-of-you"));

function filterRange(arr, a, b) {
  let result = arr.filter((item, index) => index > a && index < b);
  return result;
}
// alert(filterRange([1, 3, 4, 5], 0, 3));

function filterRangeInPlace(arr, a, b) {
  let result = arr.filter((item) => item > a && item < b);
  return result;
}
// alert(filterRangeInPlace([1, 3, 4, 5], 0, 3));

function reverseSort(arr) {
  let result = arr.sort(function(a, b) {return a - b}).reverse();
  return result;
}
// alert(reverseSort([1, -10, 4, 2, 5, 15, 1]));
