'use strict';

//String(value) or alert(value) converse valur to String
let randomBoolean = true; //Boolean
randomBoolean = String(randomBoolean);
alert(typeOf(randomBoolean)); //return String

//math conversion
alert("4" / "2"); //return 2 Number
//or
let randomNumber = "5";
randomNumber = Number(randomNumber); //5 instead of "5"
let nanNumber = Number("random string"); //retunt NaN
//number conversion
//undefined -> NaN
//null -> 0
//true\false -> 1\0
//string -> ("  234   " -> 234, "23d" - NaN)

//+  "1" + 1 -> "11" while "1" / 1 -> 1

//Boolean Boolean(value)
//"", NaN, undefined, 0, null -> false
//"something", and other -> true

/*
"" - 1 = -1
"" - 1 + 1 = 0
true + false = 1
null + 1 = 1
undefined + 1 = NaN
1 + 1 + "f" = "2f"

*/
