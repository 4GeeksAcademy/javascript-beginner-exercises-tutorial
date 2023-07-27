function getColor(colorNumber = 0) {
	//make sure the parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch (colorNumber) {
		case 1: return "red";

		case 2: return "yellow";

		case 3: return "blue";

		case 4: return "green";

		default: return "black";

	}
}

function getAllStudentColors(number) {
	while (number > 0) {
		// (getColor(Math.floor((Math.random() * 5) + 1)));
		console.log("student number " + number + " has been assigned color " + (getColor(Math.floor((Math.random() * 5) + 1))));
		number = number - 1;
	}
}

//call the function below with the number of students in the class and print on the console
getAllStudentColors(10);

