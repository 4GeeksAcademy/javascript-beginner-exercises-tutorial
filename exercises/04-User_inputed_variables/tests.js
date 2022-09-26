/*
let age keeps being received as NaN and breaks the test; 
tried forcing it to int and then back to string, but none of that helps 
*/

//mock the prompt function
const stdin = ["40"];
//this mock will pass one by one all the inputs
global.prompt = jest.fn(() => stdin.shift());

const rewire = require('rewire');
const fs = require('fs');
const app = rewire('./app.js');
global.console.log = console.log = jest.fn(text => null);

it('Declare age variable', function () {

    let age = app.__get__("age");
    expect(age).toEqual(expect.anything());
});


it('Testing with age = 40, and the console.log() should print 50', function () {

    const _ = require('./app');

    expect(console.log).toHaveBeenCalledWith(50);
});
