// Testing Type

// Testing the type of various variables.
var myFunction = function() {
    console.log( "hello" );
};
var myObject = {
    foo: "bar"
};
var myArray = [ "a", "b", "c" ];
var myString = "hello";
var myNumber = 3;

typeof myFunction; // "function"
typeof myObject;   // "object"
typeof myArray;    // "object" -- Careful!
typeof myString;   // "string"
typeof myNumber;   // "number"
typeof null;       // "object" -- Careful!

if ( myArray.push && myArray.slice && myArray.join ) {
    // probably an array (this is called "duck typing")
}

if ( Object.prototype.toString.call( myArray ) === "[object Array]" ) {
    // Definitely an array!
    // This is widely considered as the most robust way
    // to determine if a specific value is an Array.
}