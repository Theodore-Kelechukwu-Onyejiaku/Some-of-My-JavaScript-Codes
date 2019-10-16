//Create first IIFE
(function(){
	let on = 1;
	let off = 0;
	console.log(off);
})();

//Create IIFE that accepts arguments
(function(yearOfBirth){
	let age = 2019 - yearOfBirth;
	console.log(age);
})(1996);

//Create another IIFE that takes two arguments
(function(firstName, lastName){
	console.log(firstName, lastName);
})("Theodore", "Onyejiaku");

//NOTE:
//IIFEs are anonymous functions that call themselves
//They are made up of just ()();
//They make JS parser to think that it is a function calls