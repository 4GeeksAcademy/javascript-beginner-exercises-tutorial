/*
var age keeps being received as NaN and breaks the test; 
tried forcing it to int and then back to string, but none of that helps 
*/

const rewire = require('rewire');
const fs = require('fs');

it('Declare age variable', function () {

    const app = rewire('./app.js');
    var age = app.__get__("age");


    expect(age).toEqual(expect.anything());
});


it('Age is input + 10', function () {

    const _app = rewire('./app.js');
    var age = _app.__get__("age");
    age = age.toString();
    var expected = parseInt(__stdin) + 10;

    expect(age).toBe(expected.toString());
});