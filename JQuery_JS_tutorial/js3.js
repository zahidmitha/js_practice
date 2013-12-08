// OPERATORS

// concatenation

var zahid = "Hello";
var mitha = "world";

console.log(zahid + " " + mitha); // hello world

// incrementing

var i = 1;
console.log(++i); // allows for incrementing before processing or evaluation
console.log(i); // 2

// post increment operator increments AFTER processing it
var i = 1;
console.log(i++); // here, i was evaluated to 1 and THEN processed
console.log(i); // 2 is incremented after using it

// coerce a string to act as a number

var zahid = 1;
var  mitha = "2";

console.log(zahid + Number(mitha)); // 3

// OR the unary plus operator does the same

console.log(zahid + +mitha); // 3

// Logical And and Or operators

var a = 1;
var b = 0;
var c = 2;

// returns 1, which is true
a || b;

//returns 1 which is true
b || c;

// returns 0, which is false
a && b;

// returns 2, which is true
b && c;

// returns 1, which is true
a && c;

// || returns the value of the first truthy operand, or if neitehr is truthy, it returns the last one. && returns the value of the first false operand, or the last if both are truthy

// you can replace if statements
zahid && doSomething(zahid);
// if zahid is true, do something

// set bar to baz if baz is truthy,otherwise set it to the return of createBar()
var bar = baz ||createBar();

// more booleans

var zahid = 1
var mitha = "1"
zahid == mitha //true, but types are different

zahid === mitha //false

zahid > mitha // true
zahid => mitha //true
