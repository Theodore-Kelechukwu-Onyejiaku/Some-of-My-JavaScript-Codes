//CLOSURES is the phenomenon whereby an executing function still
//the scope of an already returned function
//Closures Happen when there is an anonymous returning function inside a main function

//EXAMPLE 1 
function retirement(retirementAgeOfCountry){
	console.log("Wow! The retirment Age of your country is "+retirementAgeOfCountry)
	return function(yearOfBirth){
		let age = retirementAgeOfCountry - yearOfBirth;
		console.log("You have "+age+"years left to retire");
	}

}

let retirementNG = retirement();
retirementNG(1996); 





//Closure Challenge
/*
function interViewQuestion(Job){
	console.log("Welcome to this interview question")
	return 
}
*/