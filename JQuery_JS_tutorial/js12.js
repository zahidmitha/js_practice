// Closures

// functions have access to changing variable values. The same sort of behavior exists with functions defined within loops – the function "sees" the change in the variable's value even after the function is defined, resulting in each function referencing the last value stored in the variable.

// Each function executed within the loop will reference
// the last value stored in i (5).
// This won't behave as we want it to - every 100 milliseconds, 5 will alert
for ( var i = 0; i < 5; i++ ) {
    setTimeout(function() {
        alert( i );
    }, i * 100 );
}

// Closures can be used to prevent this by creating a unique scope for each iteration – storing each unique value of the variable within its scope.

// Using a closure to create a new private scope
// fix: “close” the value of i inside createFunction, so it won't change
var createFunction = function( i ) {
    return function() {
        alert( i );
    };
};

for ( var i = 0; i < 5; i++ ) {
    setTimeout( createFunction( i ), i * 100 );
}

// Closures can also be used to resolve issues with the this keyword, which is unique to each scope:

// Using a closure to access inner and outer object instances simultaneously.
var outerObj = {
    myName: "outer",
    outerFunction: function() {
        // provide a reference to outerObj through innerFunction"s closure
        var self = this;
        var innerObj = {
            myName: "inner",
            innerFunction: function() {
                console.log( self.myName, this.myName ); // "outer inner"
            }
        };

        innerObj.innerFunction();

        console.log( this.myName ); // "outer"
    }
};

outerObj.outerFunction();

// Using .bind() instead-check docs: http://learn.jquery.com/javascript-101/closures/

