/* Done - check test and clean up code for student use */

function getColor(colorNumber)
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

function getAllStudentColors(students){
	
	//your loop here
    var exampleColor = "";

    for (var i = 0; i < students; i++){
        exampleColor = getColor(Math.ceil(Math.random()*4));
        console.log(exampleColor);
    }
    
}

//call the function below with the number of students in the class
getAllStudentColors(10);