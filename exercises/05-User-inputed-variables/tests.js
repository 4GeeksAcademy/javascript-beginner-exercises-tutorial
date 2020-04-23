/*
var age keeps being received as NaN and breaks the test; 
tried forcing it to int and then back to string, but none of that helps 
*/

//mock the prompt function
const stdin = [].concat(__stdin);
//this mock will pass one by one all the inputs
global.prompt = jest.fn(() => __stdin.shift());

const rewire = require('rewire');
const fs = require('fs');
const app = rewire('./app.js');
global.console.log = console.log = jest.fn(text => null);

it('Declare age variable', function () {

    var age = app.__get__("age");
    expect(age).toEqual(expect.anything());
});


it('Age is input + 10', function () {

    const _ = require('./app');
    var age = app.__get__("age");
    var expected = parseInt(age) + 10;

    expect(console.log).toHaveBeenCalledWith(expected);
});