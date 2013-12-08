// SCOPE

// Global and local

// Global-variable declared outside function

var x = 9;

// we can call it with x or window.x (window is the scope)

// Local scope

function myFunc() {
	var x = 5;
};

console.log(x); // REFERENCE ERROR

// If you declare a variable and forget to use the var keyword, that variable is automically made global.

function myFunc() {
    x = 5;
});
console.log( x ); // 5

// Because local scope works through functions, any functions defined within another have access to variables defined in the outer function:

function outer() {
    var x = 5;

    function inner() {
        console.log( x );
    }

    inner(); //  5
}

// But the .outer() function doesn't have access to any variables declared within .inner():

unction outer() {
    var x = 5;

    function inner() {
        console.log( x );
        var y = 10;
    }

    inner(); //  5

    console.log( y ); // ReferenceError: y is not defined
}

// unexpected consequences of global variables in functions-it checks the whole doc scope and overrides

var foo = "hello";

var sayHello = function() {
    console.log( foo );
};

sayHello(); // "hello"

console.log( foo ); // "hello"


// Variables with the same name can exist in different scopes with different values:

var foo = "world";

var sayHello = function() {
    var foo = "hello";
    console.log( foo );
};

sayHello(); // "hello"

console.log( foo ); // "world"

// When you reference a global variable within a function, that function can see changes to the variable value after the function is defined.

var myFunction = function() {
    var foo = "hello";
    var myFn = function() {
        console.log( foo );
    };
    foo = "world";
    return myFn;
};

var f = myFunction();

f(); // "world"

// complex example

(function() {

    var baz = 1;

    var bim = function() {
        console.log( baz );
    };

    bar = function() {
        console.log( baz );
    };

})();

console.log( baz ); // baz is not defined outside of the function

bar(); //  1 GLOBAL SCOPE FOR BAR as no "var" keyword. it has access to the baz variable because .bar() was defined within the same scope as baz. This means it has access to it, even though other code outside of the function does not.

bim(); // ReferenceError: bim is not defined. .bim() was only defined within the function, so does not exist on the global object as it was defined locally.

