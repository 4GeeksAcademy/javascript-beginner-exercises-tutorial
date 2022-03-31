// firePosition will be the position in which the gun will fire.
let firePosition = 1;

// The output of spinChamber will be a number and it can be passed as a parameter to the fireGun function.
const spinChamber = () => {
	let chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition;
};

// Remove the // below and complete the commented lines
const fireGun = (bulletPosition) => {
    // if (...) return ("You're dead!");
    // else return ("Keep playing!");
};

console.log(fireGun(spinChamber()));
