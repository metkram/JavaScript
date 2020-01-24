"use strict";

let someVar = "1" + 1; //"11"
someVar = 1 + 1; //2
someVar = 1 - "1"; //0
someVar = +true; //1
someVar = +""; //0
someVar = +"1" + +"4"; //5
someVar = 10 % 4; //2 - remainder
someVar = 2 ** 3; //2*2*2
someVar++; //add 1 to someVar
++someVar;
someVar--; //subtract 1 from someVar
--someVar;
someVar += 3; //someVar = someVar + 3
someVar *= 2; //etc.
someVar *= 2 + 3; //someVar = someVar * (2 + 3) 
