function Entity(){
	this.exists = false;
}

Human.protype = new Entity();

function Human(hairColor, name){
	this.hairColor = hairColor;
	this.name = name;

	this.breathe = function(){
		if(this.exists){
			console.log(this.name + " took a breath.");
		} else {
			console.log("Can't breathe if you don't exist.");
		}
	}

	this.speak = function(){
		if(this.exists){
			console.log("Hi, my name is " + this.name);
		} else {
			console.log("Can't speak if you don't exist.");
		}
	}

	this.comeToLife = function(){
		this.exists = true;
	}

	this.die = function(){
		this.exists = false;
	}

	var x = 10;
}

var joeHuman = new Human("brown", "Joe");
console.log(joeHuman);

Adult.prototype = new Human();

function Adult(jobTitle, name){
	this.jobTitle = jobTitle;
	this.name = name;

	this.setJobTitle = function(title){
		this.jobTitle = title;
	}

	this.work = function(){
		if(this.exists){
			if(this.jobTitle){
				console.log(this.name + " happily goes to work.");
			} else {
				console.log(this.name + " is still looking for work.");
			}
		} else {
			console.log("Can't work if you don't exist.");
		}
	}

	this.complain = function(){
		if(this.exists){
			if(this.jobTitle){
				console.log("I hate my boss.");
			} else {
				console.log("I need money!");
			}
		} else {
			console.log("Can't complain if you don't exist");
		}	
	}
}

var MarieAdult = new Adult(undefined, "Marie");