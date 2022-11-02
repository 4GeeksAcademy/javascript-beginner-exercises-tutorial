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
const path = require('path');

const app = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
global.console.log = console.log = jest.fn(text => null);

it('Declare age variable', function () {
    const regex = /let\s+age\s*=\s*prompt\s*\(.*\)/gm
    expect(regex.test(app.toString())).toBeTruthy();
});

it('Testing with age = 40, and the console.log() should print 50', function () {
    const _ = require('./app');
    expect(console.log).toHaveBeenCalledWith(50);
});
