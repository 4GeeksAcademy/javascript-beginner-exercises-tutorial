var bulletPosition = 4;

const spinChamber = () => {
	var chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition;
};

const fireGun = (spinnerPosition) => {
    if (bulletPosition === spinnerPosition) return ("You're dead!");
    else return ("Keep playing!");
};

console.log(fireGun(spinChamber()));