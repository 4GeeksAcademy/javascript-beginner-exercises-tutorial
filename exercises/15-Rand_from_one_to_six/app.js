function getRandomInt()
{
	let randomNumber = Math.random() * 6 + 1; // Generate a random number between 1 and 6
	randomNumber = Math.floor(randomNumber); // Round it down to the nearest integer
	return randomNumber;
}
console.log(getRandomInt());