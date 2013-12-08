// The "this" Keyword

// USed by methods to refer to the object on which said method is being invoked

// A function invoked using Function.call

var myObject = {
    sayHello: function() {
        console.log( "Hi! My name is " + this.myName );
    },
    myName: "Rebecca"
};

var secondObject = {
    myName: "Colin"
};

myObject.sayHello();                    // "Hi! My name is Rebecca"
myObject.sayHello.call( secondObject ); // "Hi! My name is Colin"


// Creating a function using function.bind()

var myName = "the global object";

var sayHello = function() {

	console.log("Hi my name is " + this.myName);
};

var myObject = {

	myName: "Zahid"
};

var myObjectHello = sayHello.bind(myObject);

sayHello();
myObjectHello();

// A function being attached to an object at runtime

var myName = "The global object";
var sayHello = function() {

	console.log("Hi my name is " + this.myName);

};

var myObject = {

	myName: "Zahid"
};

var secondObject = {

	myName: "Tom"

};

myObject.sayHello = sayHello;
secondObject.sayHello = sayHello;

sayHello(); // Hi my name is the global object
myObject.sayHello(); // Hi my name is Zahid
secondObject.sayHello(); // Hi my name is Tom

// We can store a reference to the function in a shorter variable-don't do this with instance variables as it causes the vallue of "this" to change-eg:

var myNamespace = {

	myObject: {
		sayHello: function() {
			console.log("Hi my name is " + this.myName);
		},
		myName: "Zahid"
	}
};


hello(); // "Hi my name is undefined"

// BUT you can safely reduce everything up to the object on which the method is invoked

var myNamespace = {

	myObject: {
		sayHello: function() {
			console.log("Hi my name is" + this.myName);
		},
		myname: "Zahid"
	}
};

var obj = myNamespace.myObject

obj.sayHello(); // "Hi! My name is Zahid"