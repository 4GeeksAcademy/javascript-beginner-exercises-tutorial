/* The exercise compiles with the wrong message even though same code brings up the correct message on Replit */
  
function getColor(selection) {
  selection = selection.toLowerCase();
  console.log("selection is " + selection);

  var available;
	switch(selection){
	    case 'red':
        available = "true";
        break;
        case 'green':
        available = true;
        break;
        case 'blue':
        available = true;
        break;
	    default :
	    	return false;//return false because the user pick a unavailable color
	}
	return available;
}

var colorname = prompt('What color do you want?');
var isAvailable = getColor(colorname);
if (isAvailable === "true") console.log('Good news! That color is available');
else console.log('We are sorry, that color is not available');