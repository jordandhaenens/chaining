/***********************************************************
Sort the numbers in descending order (10, 9, 8, 7, etc).
Remove any integers greater than 19.
Multiply each remaining number by 1.5 and then subtract 1.
Then output (either in the DOM or the console) the sum of all the resulting numbers.
***********************************************************/



var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];


console.log(integers.sort(function(a, b){return b - a;}).filter(function(element){return element < 19;})
	.map(function(element){return (element * 1.5) - 1;}).reduce(function(accumulator, currentValue){
		return accumulator + currentValue;}));




