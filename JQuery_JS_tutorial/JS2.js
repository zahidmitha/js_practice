// single line comment

/* multiple
line

comment */

var test = 1;
var test2 = function() {...};
var test3 = test2(test);

var test4 = 1,
	test5 = function() {...},
	test6 = test2(test);

// this variable is declare without a value-its value is stated as undefined

var x;
x == undefined; //true


// strings with single or double quotes
var a = "I am a string";
var b = 'so am I'
var alert1 = alert(a);
var alert2 = alert(b);

//escaping quotations
var statement1 = 'He said"JS is awesome"';
var statement2 = "He said \"I have dogs\"";

//numbers are whole or floating points
var num1 = 100;
var num2 = 100.10;
var num3 = 0.10;

// null is no value or the absence of a value
var strange = null;
// undefined is either declared as so or not declared
var undefined1 = undefined;
var undefined2;

// creating objects with the constructor
var person1 = new Object;

person1.firstName ="John";
person1.lastName = "Doe";

alert(person1.firstName + " " + person1.lastName);

// creating object with object literal syntax

var person2 = {
	firstName = "John";
	lastName = "Doe";
};

alert(person2.firstName + " " + person2.lastName);

// Objects can also have other objects as a property

var people = {}

people["person1"] = person1;
people["person2"] = person2;

alert(people["person1"].firstName);
alert(people["person"].lastName);

//properties that are not created are undefined

var person {name: "Zahid"};
alert(person.email); // undefined

// arrays

// array constructor
var damn = new Array;

// array literal syntax
var bar = [];

// the difference is that if a single number is inserted into the creation of an array constructor, it will assume that that is the length of the array. Array literals don't do this

var zahid= [100];
alert(zahid(0)); // => 100
alert(zahid.length); // => 1

// versus in a constructor...

var bar= new Array( 100 );
alert(bar[0]); // => undefined
alter(bar.length); /// => 100

// using methods on an array
var zahid =[];

zahid.push("a");
zahid.push("b");

alert(zahid[0]);// a
alert(zahid[1]); //b

alert(zahid.length); // 2

zahid.pop();

alert(zahid[0]); // => a
alert(zahid[1]); // => undefined

alert(zahid.length); // 1

// adds to the front
zahid.unshift(" z ");

alert(zahid[0]); // z
alert(zahid[1]); // a

alert(zahid.length); // 2

// takes away the first
zahid.shift();

alert(zahid[0]); // a
alert(zahid[1]); // undefined

aler(zahid.length); // 1

// ----------------------
// jQuery type checking

// checking type of arbitrary value

var myType = [1, 2, 3];

// using Javascript's type operator to check for primitive types

typeof myType === "string"; //false
typeof myType === "boolean" //false
typeof myType === "undefined"; // false

// using equality operator to check for null

myType === null; //false

// Using Jquery methods to check for non-primitive type

jQuery.isFunction(myType); //false
jQuery.isPlainObject(myType); //false
JQuery.isArray(myType); // TRUE





