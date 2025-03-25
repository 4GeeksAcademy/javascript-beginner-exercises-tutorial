function getRandomInt(min, max)
{
	let randomNumber = Math.floor((Math.random() * 6) + 1);
	return randomNumber;
}
console.log(getRandomInt());