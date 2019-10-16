export class Vehicle{
	constructor(name){
		this.name = name;
	}
	move(){
		console.log("Move away "this.name + "is coming");
	}
}

export let hello = () => {
	console.log("Hello Module, are you there?");
}