let total = prompt('How many km are left to go?');

// Your code below:
function distancia (total) {
    let km = Number(total);

    if (km > 100) {
        return("We still have a bit of driving left to go")
    } 
    
    else if (km > 50) {
        return("We'll be there in 5 minutes")
    }

    else if (km <= 50) {
        return("I'm parking. I'll see you right now")
    }
}

console.log(distancia(total))