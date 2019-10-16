/*This is a testing of functions*/
//THe function below returns a value
/*function calculateAge(yearOfBirth){
	var yourage = 2019 - yearOfBirth;
	return yourage;
}
var john = calculateAge(1996);
console.log("John's Age is "+john);

//The function below does not return any value, and it also calls another function
function retirementAge(name, yearOfBirth){
 var retirement = 75 - calculateAge(yearOfBirth);
if(retirement > 0){
	console.log("You have "+retirement+" years to retire
console.log(student);
console.log(student[0]);
console.log(student[3]);
console.log(student[4]);   //Displays as undefined 

//The following are the various array methods in JavaScript
student.push("Bread and Beans");//This adds another value to the end of the array
console.log(student);
student.unshift("Onyejiaku");   //Adds an element at the beginning of an array
console.log(student);
student.pop();  +
+                //Requires no parameter but removes the last element of an array
console.log(student);
student.shift();                //Requires no parameter but removes the first element of an array
console.log(student);
console.log(student.indexOf("Theodore")); //This helps to find the index position of an element
console.log(student.indexOf("Beauty"));   //It also helps us to know if an element is a member of an array. Once the element inside this method displays -1, then it means that it is not a member of the array.
*/


//The follwing is about objects
 /*var student = {
 	name : "Theodore",
 	dept : "IMT",
 	birthday: 1996,
 	isMarried : false,
 	address : "Lagos",
 	friends: ["Chidera", "Elijah", "Emeka", "Beauty", "Anita", "Junior"],
 	calculateAge : function(birthday){
          return 2019 - birthday;
 	}
 }
 //console.log(student.friends);
 //console.log(student);
 var reg = 1998;
 console.log(student.calculateAge(reg));
 console.log(student.friends.length);
*/

/*The following is about JavaScript Hoisting*/ 
//In the following, we shall look at variables inside and outside functions
/*
var name = "Theodore";  //This variable is stored in the global variable stack
function message(){
	var name = "Kelechukwu";//This variable is stored in the execution variable stack
	console.log(name);
}

console.log(name);  //Displays "Theodore"
message();          //Displays "Kelechukwu"
*/

/*Now we look at Scoping and Scoping chain in JS.*/
//In JS, variables inside child functions can not be accessed by global functions
//But variables inside parent fucntions can be accessed by child functions
/*
var a = "Hello ";
first();

function first(){
	var b = "this ";
	second();

	 function second(){
	 	var c = "is Theodore";
	 	console.log(a+b+c);
	 }
}
//Now we want to look at a function that tries to access a child function variable
  function notify(){
  	//console.log(c);    //This would print error when called
    console.log(a);      //This would print because it accesses a global variable
  }
//notify(); //Prints error because this function tries to access a child function variable called c
notify();
*/


/*
Here, we want to look at the "this" object or variable
*/
var dept = {
	faculty: "SMAT",
	dean: "Mr Marshall",
	maleStudents : 300,
	noOfStudents : 900,
	female : function(){
		console.log(this);
		console.log(this.noOfStudents - this.maleStudents);
	},
};
dept.female();
//Now we want to try out METHOD BORROWING 
var dept2 = {
	faculty : 'SOHT',
	dean : "Mrs Margaret",
	maleStudents : 200,
	noOfStudents : 2000,
}
dept2.female = dept.female; //This is the method borrowing. Remember that there are no parenthesis after the functions
dept2.female();             //Here the method or function is called
