function getColor(selection)
{
	selection=selection.toLowerCase();
	switch(selection){
		case "red":
			result =true;
			break;
		case "green":
			result =true;
			break;
		case "blue":
			result =true;
			break;
		// Add more options here
	    default:
	    	return false;  //returns false because the user picked an unavailable color
	                
	}
	return result
}

var colorname = prompt('What color do you want?').trim();
var isAvailable = getColor(colorname);

if(isAvailable)
	console.log('Good news! That color is available');
else 
	console.log('We are sorry, that color is not available');
