
const path = require('path');
const fs = require('fs');
var rewire = require('rewire');

it('Test price', function () {

    const app = rewire('./app.js');
    let price = app.__get__("price");

    console.log('price', price);
    console.log("Prompt", __stdin);

    if(__stdin > 200) {
        expect(price).toEqual(20000);
    }
    else if (__stdin > 100) { 
        expect(price).toEqual(15000);
    }    
    else if (__stdin > 50) { 
        expect(price).toEqual(10000);
    }    
    else {
        expect(price).toEqual(4000);
    } 
});
