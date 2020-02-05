var total = prompt('How much money do you have in your pocket');

//your code here:
total = parseInt(total);

if (total > 100) console.log("Give me your money!");
else if (total > 50) console.log("Buy me some coffee, you cheapster!");
else console.log("You are a poor guy, go away!");
