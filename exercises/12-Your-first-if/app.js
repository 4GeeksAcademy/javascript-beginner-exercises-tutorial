var total = prompt('How much money do you have in your pocket');
total = parseInt(total);

//your code here
const richOrPoor = (amount) => {
if (amount > 100) return "Give me your money!";
else if (amount > 50) return "Buy me some coffee, you cheapster!";
else return "You are a poor guy, go away!";
}

//do not change the code below
console.log(richOrPoor(total));