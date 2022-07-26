function getColor(selection)
{
	switch(selection){
		// Add more options here
	    default:
	    	return false;  //returns false because the user picked an unavailable color
	    break;               
	}
}

letcolorname = prompt('What color do you want?').trim();
letisAvailable = getColor(colorname);

if(isAvailable)
	console.log('Good news! That color is available');
else 
	console.log('We are sorry, that color is not available');
