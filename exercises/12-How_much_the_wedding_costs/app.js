let guests = prompt('How many people are coming to your wedding?');

function getPrice(guests){
    let cost = 0;
    // Your code here

    let people = Number(guests);

    if (people > 200) {
        cost = 20000
    }

    else if (people <= 200 && people > 100) {
        cost = 15000
    }

    else if (people <= 100 && people > 50) {
        cost = 10000
    }

    else if (people <= 50) {
        cost = 4000
    } 

    return cost;

}

let price = getPrice(guests);
console.log('Your wedding will cost '+price+' dollars');
