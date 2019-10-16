//NOW WE WANT TO START WITH THE EQUALITY OPERATORS : remember that equality operators aks the question is ... equal or is ... not equal
console.log("EQUALITY OPERATORS EQUALITY OPERATORS")
/*
(1) == does type conversion
*/
if ("23" == 23) {
	console.log("true");
}else{
	console.log("false");
}
//RESULT : "true"

/*
(2) === does not do type conversion
*/
if("23" === 23){
	console.log("true");
}else{
	console.log("false");
}
//RESULT : 'false'

/*
(3)	!= does type conversion
*/
if(10 != "10"){
	console.log("true");
}else{
	console.log("false");
}
//RESULT : 'false'

/*
(4)	!== does not do type conversion
*/
if (10 !== "10") {
	console.log("true");
}else{
	console.log("false");
}
//RESULT : 'true'
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

//NOW WE WANT TO TRY OUT UNARY OPERATORS - this is familiar, ant the important thing to remember is that when you use it on a variable that is assigned to another variable, it will change the forme varable value also.
console.log("UNARY OPERATORS UNARY OPERATORS")

/*
(1) The + : this converts a string to a number, not often used though
*/
let tel = "234";
console.log(typeof(+tel)); 
//RESULT : number

/*
(2) The - operator is used to change the sign of a variable
*/
let postNo = 5;
console.log(-postNo);
//RESULT : -5

/////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

//NOW WE WANT TO TRY OUT LOGICAL OR BOOLEAN OPERATORS - we are familiar with this operators but we want to use them outside a conditional statement like if statement

console.log("LOGICAL OPERATORS LOGICAL OPERATORS");

/*
(1) || doubel pipes: the true one, or the one that is truthy will be chosen 
*/

let val1 = 65;
let val2 = 34;
console.log(val1 || val2);
//RESULT: 34;
//NOTE: when they are both true, the first one will be chosen

/*
(2) The && Ampersand : if both are true, the last one is chosen. If one is false, then the false one is chosen
*/

let val3 = 12;
let val4 = 10;
console.log(val4 && val3);
