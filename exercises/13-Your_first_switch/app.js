function getColor(selection)
{
	switch(selection){
		// Add more options here
	    default:
	    	return false;  //returns false because the user picked an unavailable color
	    break;
		case "red":
			return true;
			break;
		case "green":
			return true;
			break;
		case "blue":
			return true;
			break;                      
	}
}

let colorname = prompt('What color do you want?').trim().toLowerCase;
let isAvailable = getColor(colorname);

if(isAvailable)
	console.log('Good news! That color is available');
else 
	console.log('We are sorry, that color is not available');
