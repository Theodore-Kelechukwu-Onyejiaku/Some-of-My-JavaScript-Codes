

/*----------VARIABLES OR PRIMITIVES-------*/
//The following are variables, and this shows that variables are just containers. They do not reference a value or variable like objects do.
var var1 = "whatever";
//Now we copy the value of var1 to var2
var var2 = var1;	//Here we copied the value of var1 to var2. Whether we change the value of var2 later or not, this will not affect the value of var2
var1 = "something";	//Now the value of var1 has changed.

console.log(var1);	//outputs "something"
console.log(var2);	//outputs "whatever"


/*------------OBJECTS---------------------*/
//The following are objects and they do not store values, rather they point to a value or reference a value
var obj1 = {
	name: "Beauty",
	state: "Delta",
}
var obj2 = obj1;
console.log(obj2.name);	//outputs "Beauty"

obj2.name = "Kelechukwu";	//The container has changed thus

console.log(obj1.name);		//Outputs "Kelechukwu"

obj2.gender = "female and Male";
console.log(obj1.gender);	//Outputs "Female and Male"
console.log(obj2.gender);	//Ouputs "Female and Male"

var obj3 = obj1;
 obj3.name = "Somtochukwu";
 console.log(obj1.name);	//Outputs "Somtochukwu"
 console.log(obj2.name);	//Outputs "Somtochukwu"


/*------PROTOTYPES-----------------------*/

//From my examples and trials below, I donnot think that this works on prototypes and their instances
var objPrototype = function(name, gender){	//A prototype is created 
	this.name = name;
	this.gender = gender;
}

var obj1 = new objPrototype("Loveth", "Female");	//An instance of the prototype above is created

console.log(obj1.name);	//Outputs Loveth

obj2.name = "Theodore";
 console.log(obj2.name);
 console.log(obj1.name);
obj1 = obj2;
	console.log(obj1.name);





/*--------------FUNCTIONS--------------*/
var varName = "Beauty";
var objName = {
	name: "Theodore",
}

function naming(a, b){
	a =  45;
	b.name = "Somtochukwu";
}

naming(varName, objName);
console.log(varName);
console.log(objName);




//Testing The innertext property of every object or array

var firstElement = document.getElementById("#hone").innerHTML;
 console.log(firstElement);


//Array 
var arrays = ["Theodore","IMT"];
console.log(arrays[0]);
console.log(arrays[0].innerText);