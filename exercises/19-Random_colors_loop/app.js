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

function getAllStudentColors(numberOfStudents) {
	for (let i = 0; i < numberOfStudents; i++) {
		let randomNum = Math.floor(Math.random() * 4) + 1; // Número entre 1 y 4
		let color = getColor(randomNum); // Obtener el color según el número
		console.log(color); // Imprimir el color
	}
}

//call the function below with the number of students in the class and print on the console
getAllStudentColors(10);

