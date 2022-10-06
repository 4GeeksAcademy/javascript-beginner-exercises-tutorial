
const fs = require('fs');
const path = require('path');
const rewire = require('rewire');

jest.dontMock('fs');
//here we are going to store and accumulate (concatenate) all the console log's from the exercise
let _buffer = "";
let _log = console.log;

// lets override the console.log function to mock it,
// but we are also going to save what supposed to be the ouput of the console inside _buffer
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

test("Function getRandomInt should exist", function(){
    const file = rewire("./app.js");
    const getRandomInt = file.__get__('getRandomInt');
    expect(getRandomInt).toBeTruthy();
  });
  
  test('getRandomInt should return an integer (no decimals)', function () {

    //then I import the index.js (which should have the alert() call inside)
    const file = rewire("./app.js");
    const getRandomInt = file.__get__('getRandomInt');
    const _int = getRandomInt();
    expect(Math.floor(_int)).toBe(_int);
});

describe('All the javascript should match', function () {
    beforeEach(() => {
    });
    afterEach(() => { jest.resetModules(); });

    it('console.log() call should result between 1 and 6', function () {

        const file = require("./app.js");

        expect(parseInt(console.log())).toBeGreaterThanOrEqual(1);

        expect(parseInt(console.log())).toBeLessThanOrEqual(6);
    });
});