function Excuse1(){
	var college= ['I drank too much last night',"I'm not feeling well", "I'm going home for the weekend", "What day is it?" ];
	document.getElementById("ex").innerHTML = college[Math.round(Math.random()*(college.length-1))];	
}

function Excuse2(){
	var club= ["I can't find my laptop", "I got lost", "I was Studying for Another Course","The Police Caught me for Speeding"];
	document.getElementById("ex").innerHTML = club[Math.round(Math.random()*(club.length-1))];
}

function Excuse3(){
	var assigment= ["My dog ate it", "Left it at college over the weekend", "Don't understand the assignment", "I was gone when it was assigned."]
	document.getElementById("ex").innerHTML = assigment[Math.round(Math.random()*(assigment.length-1))];
}
