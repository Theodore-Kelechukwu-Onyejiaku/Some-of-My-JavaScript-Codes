/*
	This is about constructors and their instances in javascript. Here, you will learn how to create 
	constructors and their respective instances or objects. Secondly, you should be able to create 
	methods for the constructor which will be outside the constructor itself by using the propery keyword. 
	And lastly, you should be able to create properties that will only be used for individual objects 
	of a given constructor
*/



//A greetings
console.log("Welcome back again to javascript");

//Testing the this keyword
console.log(this);

//Creating an object
var animal = {
	name: "Lion",
	size: "Big",
	color: "Brown",
	message: function(){
		console.log(this.name+" is my name, I am "+this.size+" and "+this.color);
		//Now any function in another object would by default, point to the window object
		whatever();
		  function whatever(){
		  	console.log(this);
		  }
		}
	}
console.log(animal);
console.log(animal.message());

/*Now we want to create a constructor */

//Please note that you can use the declarative way or the initialization way for the constructor you want to carry out
 function Person(name, job, yearOfBirth ){
				this.name = name;
				this.job = job;
				this.yearOfBirth = yearOfBirth;
				//We can also add a method to the property of this prototype
				this.calculateAge =  function(){
					console.log("You are " + (2019 - this.yearOfBirth)+" "+this.name);
				  }
				};

var john = new Person("John", "Web-developer", 1996);
var jane = new Person("Jane", "Nurse", 1999);

//Now we access the properties of the Person Constructor/Class/Prototype
console.log(john.job);
console.log(jane.name);
console.log(john.yearOfBirth);
//Now using the calculateAge() method
jane.calculateAge(); 

//We can also create a method for the prototype outside the prototype by using the prototype property
Person.prototype.findName = function(){
	console.log("Your name is "+this.name);
}
//Now we use the findName() property or method for the instances of the prototype
john.findName();




/*Please note that you can create methods and properties for any of the instances alone*/
//Example is given below
john.country = "Nigeria";
jane.address = function(){
	console.log("Hello "+jane.name+" , your address is 13 FUTO road");
}

console.log(john.country);
jane.address();









//HOISTING PRACTICES
/*
search();
function search(){
	console.log("Enter Keyword Please");
}

getLastLetter = function(){
	console.log("The last letter is");
}
getLastLetter();
*/