function getColor(colorNumber=0)
{
	//making sure is a number and not a string
	colorNumber = parseInt(colorNumber);
	switch(colorNumber){
		case 1: return "red"; break;
		case 2: return "yellow"; break;
		case 3: return "blue"; break;
		case 4: return "green"; break;
		default: return "black"; break;
	}
}

function getAllStudentColors(){
	
	//your loop here
	var exampleColor = getColor(1);
}

console.log(getAllStudentColors());