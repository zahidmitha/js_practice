// Loops let blocks of code run a certain number of times

// For loop that logs try '0', try '1'...'4'

for ( var i = 0; i < 5; i++ ) {

	console.log("try" + i);

}

// general rules for FOR loops:

for ( [initialization]; [conditional]; [iteration]) {

	[ loopBody ]
}

// initialization is executed once before loop  begins
// conditional evaluates before each iteration-it's value decides whether the loop should conditinue
// the iteration statement executes at end of each iteration-allows you to change the state of variables i.e. incrementing a counter
// loopBody runs on each iteration-it could be anything

// Loop example

for (var i = 0; limit = 100; i < limit; i++) {
	// This will be executed 100 times
	console.log('Currently at' + i );
	// last log will be at 99
}

// While loop-similar to if, but body will be executed UNTIL condition is false

while( [conditional] ) {

	[loopBody]
}

// typical while loop example

var i =0;
while (i < 100 ) {
	// this will be executed 100 times
	console.log("Currently at " + i);

	// increment i
	i++;

}

// combine conditional and incrementer

var i= -1;
while (++i < 100 ) {
	// this block is executed 100 times
	console.log("Currently at " + i);

}

// do-while loop-loop's body is executed at least once before conditional is tested

do{

	[loopBody]

} while ( [conditional] )

// example-here, the statement evaluates to true-but before it can be stopped the while executes at least ONE alert.

do{
	alert("Hi there!");

} while( false );

// Breaking and continuing
// breaks stops loops in their tracks before the evaluation becomes false

for (var i = 0; i < 10; i++) {
	if  (something) {
		break;
	}
}

// continue a loop without executing its body-use continue

for (var i = 0; i < 10; i++) {
	if (something) {
		continue;
	}

}
