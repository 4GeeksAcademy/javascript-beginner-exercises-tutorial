
const fs = require('fs');
const path = require('path');
const rewire = require('rewire');

jest.dontMock('fs');
//here we are going to store and accumulate (concatenate) all the console log's from the exercise
let _buffer = "";
let _log = console.log;

// let's override the console.log function to mock it,
// but we are also going to save what is supposed to be the output of the console inside _buffer
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");


test('function getRandomInt should exist', function () {

    //then I import the index.js (which should have the alert() call inside)
    const file = rewire("./app.js");
    const getRandomInt = file.__get__('getRandomInt');
    
    //Expect the console log to have been called with a random 0-9 number at least once
    expect(getRandomInt).toBeTruthy();

});

test('getRandomInt should return something', function () {

    //then I import the index.js (which should have the alert() call inside)
    const file = rewire("./app.js");
    const getRandomInt = file.__get__('getRandomInt');
    
    //Expect the console log to have been called with a random 0-9 number at least once
    expect(getRandomInt()).toBeTruthy();

});

test('getRandomInt should return an integer (no decimals)', function () {

    //then I import the index.js (which should have the alert() call inside)
    const file = rewire("./app.js");
    const getRandomInt = file.__get__('getRandomInt');
    const _int = getRandomInt();
    expect(Math.floor(_int)).toBe(_int);
});

test('getRandomInt should return random between 1,10', function () {

    //then I import the index.js (which should have the alert() call inside)
    const file = rewire("./app.js");
    const getRandomInt = file.__get__('getRandomInt');
    
    //Expect the console log to have been called with a random 0-9 number at least once
    for(let i = 0; i < 50; i++) {
        const _int = getRandomInt();
        expect(_int).toBeGreaterThanOrEqual(1);
        expect(_int).toBeLessThanOrEqual(10);
    }
});
