var yearOfBirthAvgs = [1991, 1996, 2000, 1998];

realAges = function(anyArray, callBackFxn){
	var result = [];
		for(var x = 0; x < anyArray.length; x++){
			result.push(callBackFxn(anyArray[x]));
		}
		return result;
}

function findAge(arrayElement){
	return	2019 - arrayElement;
}

var ageAvgs;
ageAvgs = realAges(yearOfBirthAvgs, findAge);

console.log(ageAvgs);