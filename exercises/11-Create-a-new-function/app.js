/* This exercise is almost identical to 15-Random numbers - consider merging them here and using another concept for 15? */

// Declare your function here

function generateRandom()
{
   const rdec = Math.random()*9;
   const rdece = Math.floor(rdec)
   return rdece;
}

console.log(generateRandom());
