"use stricts";


function generateRandomNumber(sidesofdice){
	let diceRoll = Math.floor(Math.random() * sidesofdice) + 1;
	return diceRoll
}
	

function chooseSwimStrokes(){
	let diceRoll = generateRandomNumber(4);
	if (diceRoll === 1){
		console.log("Congrats! You will be swimming freestyle");
		return 10
	}
	else if (diceRoll === 2){
		console.log("Congrats! You will be swimming Butterfly!");
		return 8
	}
	else if (diceRoll === 3){
		console.log("Congrats! You will be swimming Backsstroke!");
		return 6
	}
	else if (diceRoll === 4){
		console.log("Congrats! You will be swimming Breaststroke!");
		return 4
	}
}


function chooseSwimYards(){
	let diceRoll = generateRandomNumber(20);
	if(diceRoll <=5){
		console.log("Please, roll again.");
		return chooseSwimYards()
	}
	else if(diceRoll <=10){
		console.log("You will be swimming 100 yards!");
		return 100;
	}
	else if(diceRoll <=15){
		console.log("Please, roll again.");
		return chooseSwimYards()
	}
	else if(diceRoll <=20){
		console.log("You will be swimming 50 yards!");
		return 50;
	}

}


function choosePoolLane(){
	let diceRoll = generateRandomNumber(8);
	if(diceRoll ===2 || diceRoll ===6){
		let input = prompt("Choose your lane, either 1 or 2.")
		return input;
	}
	else if(diceRoll ===7 || diceRoll ===8){
		let input = prompt("Choose your lane, either 3 or 4.")
		return input;
	}
	else if(diceRoll ===1 || diceRoll ===3){
		let input = prompt("Choose your lane, either 5 or 6.")
		return input;
	}
	else if(diceRoll ===4 || diceRoll ===5){
		let input = prompt("Choose your lane, either 7 or 8")
		return input;
	}
}


function diveSpeed(){
	let diceRoll = generateRandomNumber(6);
	if(diceRoll ===2 || diceRoll ===6){
		console.log("You forgot to dive into the water! Try again.");
		return 0
	}
	else if(diceRoll ===1 || diceRoll ===3){
		console.log("Great dive!");
		return 2
	}
	else if(diceRoll ===4 || diceRoll ===5){
		console.log("Don't be so hesitant. It's just water.");
		return 1
	}
}
function determineSwimspeed(){
	let diceRoll = generateRandomNumber(10); 
	var a = [4, 5, 6, 10];
		if(diceRoll ===2 || diceRoll ===3 || diceRoll ===9){
		console.log("Congrats! You are in first place!");
		return 5
	}
	else if(a ){
		console.log("You are in second place!");
		return 4
	}
	else if(diceRoll ===1 || diceRoll ===3 || diceRoll ===5){
		console.log("Keep goinig!");
		return 2
	}
}
function turnOverSpeed(){
	let diceRoll = generateRandomNumber(12);
	if(diceRoll ===2 || diceRoll ===6 || diceRoll ===8 || diceRoll ===12){
			console.log("Almost there! You're in first place!");
		return 5
		}
	else if(diceRoll ===4 || diceRoll ===7 || diceRoll ===9 || diceRoll ===10 || diceRoll ===11){
			console.log("Almost done! You're in second place!");
		return 2
		}
	else if(diceRoll ===1 || diceRoll ===3 || diceRoll ===5){
			console.log("Your flip turn was too slow :(");
		return 1
		}
}

function totalScore(stroke, dive, speed, turnover){
	// let speed = stroke + dive
	let totalScore = stroke + dive + speed + turnover; 
	return totalScore;
}

function runGame(){
	let stroke = chooseSwimStrokes();
	let yards = chooseSwimYards();
	let dive = diveSpeed();
	let Speed = determineSwimspeed();
	let turnover = turnOverSpeed();
	let finalScore = totalScore(stroke, dive, Speed, turnover);
	console.log("This is your final score " + finalScore + "." );
}

runGame();
