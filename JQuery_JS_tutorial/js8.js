// Functions

// Functions contain blocks of code to be executed rapidly. They can contain 0 or more args, and optionally return a value

// Function declaration options

function zahid() {

	//some shit
};

// named function expression

var zahid = function() {

	// do x
}

// Using function

//eg1

var greet = function(person, greeting) {

	var text = greeting + ", " + person;
	console.log(text);
};

greet("Zahid", "Hello");

// A function that returns a value

var greet = function(person, greeting) {
	var text = greeting + ", " + person;
	return text

};

console.log(greet("Zahid", "Hello"));


// Function that returns another function

var greeting = function(person, greeting) {
	var text = greeting + ", " + person;
	return function() {
		console.log(text);
	};

};

var greeting = greeting("Zahid", "hello");  // the first function's results
greeting(); // the second function's call on the first


// Immediately invoked Function Expressions (IIFE). Function is declared then executed-we don't need to declare anything outside the function

(function() {

	var zahid = "Hello world";
})();

console.log(zahid); // UNDEFINED!!


// functions as arguments-functions can be assigned to variables or passed to other functions as args

// i.e. pass anonymous function as arg

var myF = function( fn ) {
	var result = fn();
	console.log(result);

};

// logs hello world-here we're passing the empty function as an argument

myF( function() {
	return "Hello world";
});




// passing a named function as an arg

var myF = function(fn) {

	var result =fn();
	console.log(result);
};

var myOtherF = function() {

	return "hello world";

};

myF(myOtherF); // "hello world"