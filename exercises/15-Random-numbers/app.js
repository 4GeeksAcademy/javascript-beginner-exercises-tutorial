/*Exercise closely resembles 11 - consider introducing another concept here? */

function getRandomInt()
{
	var randomNumber = Math.random()*10;
	return Math.floor(randomNumber)+1;
}
	

console.log(getRandomInt());