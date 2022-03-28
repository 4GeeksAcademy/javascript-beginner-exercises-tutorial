function getColor(colorNumber=0)
{
	//make sure parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch(colorNumber){
		case 1: return "red"; 
				break;
		case 2: return "yellow"; 
				break;
		case 3: return "blue"; 
				break;
		case 4: return "green"; 
				break;
		default: return "black"; 
				 break;
	}
}

function getAllStudentColors(){
	
	//your loop here



	var i = 0;
	while (i<10) {
		var aleatorio = Math.floor((Math.random()*4)+1);
		var exampleColor = getColor(aleatorio);
		console.log("student "+i+" uniform ref " +aleatorio+ " "+exampleColor);
		i++;
	}

}

//call the function below with the number of students in the class and print on the console
getAllStudentColors();

