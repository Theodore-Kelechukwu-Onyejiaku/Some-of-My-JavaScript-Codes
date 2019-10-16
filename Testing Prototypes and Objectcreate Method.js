
/*
//Here we use the Prototype Method. And this is different from the Object.create method
var protoSingers = function(name, yearOfBirth, country, genre){
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.country = country;
	this.genre = genre;
	this.findAge = function(){
		console.log("Age is "+ (2019 - this.yearOfBirth));
	}
}

var passenger = new protoSingers("Michael David Rosenberg", 1984, "England", "folk rock");
	console.log(passenger.name);
	console.log(passenger.yearOfBirth);
	console.log(passenger.findAge());

*/

//Now we use the other method which is Object.create Method. 
//This method is different from creating instances using the Prototype method
var singerObject = {
	findName : function(){
		console.log("Hello welcome to Instance Creation");
	},
	whatever : "whatever",	//I am using this property to know if the instances of this object can access this property
}

// Create an instance with the Object.create method this way or the other way below
var tatiana = Object.create(singerObject);
 	tatiana.name = "Tatiana Manaois";
 	tatiana.age = 2019 - 1996;

 	console.log(tatiana.name);		//This logs out Tatiana Manaois
 	console.log(tatiana.whatever);	//Truly, this is an instance of the object called singerObject because it can access this property of its prototype or class


//You can create an instance this way too
var ed_sheeran = Object.create(singerObject,{
	name : {value : "Edward Christopher Sheeran"},
	age : { value : 2019 - 1991}
	});
	console.log(ed_sheeran.name);
	console.log(ed_sheeran.whatever);