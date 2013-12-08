// ARRAYS

// simple array
var myArray1 = new Array( "hello", "world" );
// literal declaration, the preferred way
var myArray2 =["hello", "world"];

// create empty array and add to them later

var myArray = [];

// adds "hello" on index 0
myArray.push("hello");

// adds world on index 1
myArray.push("world");

// adds ! on index 2
myArray[2] = "!";

// .push adds items to the end. you can also add items by index. when an index is empty, it's seen as undefined

var myArray = [];

myArray[0] = "hello";
myArray[1] = "world";
myArray[3] = "!"

console.log(myArray); // [ "hello", "world", undefined, "!" ];

// if size of array is unknown, push is safer

// you can also access values by index

var myArray = ["Zahid", "is", "awesome"];

console.log( myArray[2]); //"!"

// Array methods/properties

// Length

var myArray = ["Zahid", "is", "awesome"];

console.log(myArray.length); //3

// looping through with length

var myArray = ["Zahid", "is", "awesome"];

for ( var i = 0; i < myArray.length; i = i + 1) {

	console.log(myArray[i]);

}

// alterantive method for loops and arrays without length

var myArray = ["Zahid", "is", "awesome"];
 for ( var i in myArray ) {
 	console.log(myArray [ i ])

 }

 // .concat()

 var myArray =[2,3,4];
 var myOtherArray = [5,6,7];

 var WholeArray = MyArray.concat(myOtherArray);

 // .join() creates string representation by joining all elements using separator string. Default is commas

var myArray = ["Zahid", "is", "awesome"];

console.log(myArray.join());
console.log(myArray.join(" "));
console.log(myArray.join("!!")); //Zahid!!is!!awesome

//empty one
console.log(myArray.join("")); //Zahidisawesome

//.pop() removes last element. opposite of push()

var myArray = [];

myArray.push(0);
myArray.push(1); // [0,1]
myArray.pop(); // [0]

// .reverse() reverses around array

myArray.reverse();

// .shift() removes first element of array

var myArray = [];
myArray.push(0);
myArray.push(1)
myarray.shift(); // [1]

// .slice() extracts part of array and returns it in a new array. The parameter is starting index

var myArray = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
var newArray = myArray.slice(3);

console.log(myArray); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log(newArray); // [ 4, 5, 6, 7, 8 ]

// .splice() removes a certain amount of elements and adds new ones at given index. has 3 params:

//myArray.splice(index, length, values, ....);
// index -starting index,length, number of elements to remove,values: values to be inserted at index position

var myArray = [ 0, 7, 8, 5 ];
myArray.splice(1,2,1,2,3,4)
console.log(myArray); // [ 0, 1, 2, 3, 4, 5 ]

// .sort() sorts an array. param is comparable function. if this function is not given, array is sorted ascending

var myArray =[3,4,5,6,2];
myArray.sort();//[2,3,4,5,6]

// sorting with a comparable
function descending( a, b ) {

	return b - a;

}

var myArray = [3,4,5,6,1];

myArray.sort(descending); //[6,5,4,31]

// .unshift() inserts element into first position of array

var myArray = [];

myArray.unshift(0); //[0]
myArray.unshift(1); // [1,0]

// .forEach() - can traverse through arrays using foreach method when you pass a function that is called for each element ina array. Three args- element (the element itself),index (index of the element), array(the array)

function printElement (elem) {

	console.log(elem);
}

function printElementandIndex(elem, index) {

	console.log("index" + index + ":" + elem);
}

function negateElement(elem, index, array) {

	array[index] = -elem;
}n

myArray = [1,2,3,4,5];

// prints all elements to the console
myArray.forEach( printElement);

//prints "Index: 0: 1, Index 1: 2, Index 2:3..."
myArray.forEach(printElementandIndex);

// myArray is now [-1,-2,-3...-5]
myArray.forEach(negateElement);