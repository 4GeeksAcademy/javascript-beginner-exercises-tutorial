
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

describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
    });
    afterEach(() => { jest.resetModules(); });

    it('console.log() function to be called 101 times once, with argument 100', function () {

        const file = require("./app.js");

        //Expect the console log to have been called with 100 at least once
        expect(console.log).toHaveBeenCalledWith(100);

        //and I expect the console.log to be called 101 times
        expect(console.log.mock.calls.length).toBe(101);
    });

});
