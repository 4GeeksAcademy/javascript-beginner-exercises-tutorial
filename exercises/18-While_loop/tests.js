
const fs = require('fs');
const path = require('path');

jest.dontMock('fs');
//here we are going to store and accumulate (concatenate) all the console log's from the exercise
let _buffer = "";
let _log = console.log;

// lets override the console.log function to mock it,
// but we are also going to save what supposed to be the ouput of the console inside _buffer
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

describe('All the javascript should match', function () {
    const file = require("./app.js");

    it('console.log() function to be called 101 times', function () {

        expect(console.log.mock.calls.length).toBe(101);
    });

    it('console.log() function to be called with argument 100', function () {

        expect(console.log).toHaveBeenCalledWith(100);
    });

    
    it('console.log() function to be called with argument 0', function () {

        expect(console.log).toHaveBeenCalledWith(0);
    });

});