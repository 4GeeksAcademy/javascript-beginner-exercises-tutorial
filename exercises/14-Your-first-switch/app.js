 
const getColor = (selection) => {
 let color = selection;
  console.log('Color', color);

	switch (color) {
        case 'red':
            console.log('Good news! That color is available');   
            break;
        case 'green':
            console.log('Good news! That color is available');   
            break;
        case 'blue':
            console.log('Good news! That color is available');   
            break;    
            default:
                console.log('We are sorry, that color is not available'); 
                break;
    }
    
}

var colorname = prompt('What color do you want?');
console.log("colorname", colorname);

getColor(colorname.toString());


/*
var colorname = prompt('What color do you want?');
console.log("colorname", colorname);

var isAvailable = getColor(colorname);
console.log("getColor ", isAvailable);

if(isAvailable == true) console.log('Good news! That color is available');
else console.log('We are sorry, that color is not available');
*/