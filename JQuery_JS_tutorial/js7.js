// OBJECTS

// Objects contain one or more key value pairs. The key can be any string, and the value can be anything (even a function or another object)

// when a value is a function, it's called a method

// nearly everything in JS is an object, and they all have properties and methods

// creating object literal-these are basically arrays

var myObject = {
	sayHello: function() {
		console.log("hello");
	},
	myName: "Zahid"
};

myObject.sayHello;"hello"
console.log(myObject.myName);// "Zahid"
// or
myObject.myName //"Zahid"

// the key part can be written as javascript identifier i.e. a string or number

var myObject = {
	validIdentifier: 123,
	"some string": 456,
	9999: 2342

};