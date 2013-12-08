// CONDITIONAL CODE

var zahid = true;
var mitha = false;

if (mitha) {
	// this code will never run
	console.log("hello!");
}

if (mitha) {
	// this won't run

} else {
	if( zahid) {
		// this code will run

	}

}

// some values we expect to evaluate to true don't, and vice versa

// these evaluate to true
"0";
"some string";
[]; //empty array
{}; // empty object
1; // any non-zero number

// these evaluate to false
""; // an empty string
NaN; // JS's not-a-number variable
null;
undefined; // be careful-undefined can be redefined!
0;// the number zero

// the ternary operator (a la Ruby)
// set zahid to 1 if bar is true. otherwise, set it to 0
var zahid = bar ? 1 : 0


// Switch statements
// Switch statements look at the value of a variable/expression, and run different blocks depending on the value

switch (zahid) {

	case "bar":
		alert("The value was bar!");
		break;
	case "baz":
		alert("Maybe it was Baz");
		break
	default:
		alert("everything else is OK");
}


// We can also create a reusable object to do the same thing

var stuffToDo = {

    "bar": function() {
        alert( "the value was bar -- yay!" );
    },

    "baz": function() {
        alert( "boo baz :(" );
    },

    "default": function() {
        alert( "everything else is just ok" );
    }

};

if ( stuffToDo[ "bar" ] ) {

    stuffToDo[ "bar" ]();

} else {

    stuffToDo["default"]();

}
