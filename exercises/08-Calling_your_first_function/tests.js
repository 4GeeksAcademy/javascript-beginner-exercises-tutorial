
const fs = require('fs');
const path = require('path');
let rewire = require('rewire');

jest.dontMock('fs');
//here we are going to store and accumulate (concatenate) all the console log's from the exercise
let _buffer = "";
let _log = console.log;

// lets override the console.log function to mock it,
// but we are also going to save what supposed to be the ouput of the console inside _buffer
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
    });
    afterEach(() => { jest.resetModules(); });

    it('console.log() function should be called with parameter 45345', function () {

        //then I import the index.js (which should have the alert() call inside)
        const file = require("./app.js");
        const _app = rewire('./app');
        const isOdd = _app.__get__("isOdd");

        expect(console.log).toHaveBeenCalledWith(isOdd(45345));
        //Expect the console log to have been called with parameter 45345 at least once
        expect(console.log).toHaveBeenCalledWith(true);
        //and I expect the console.log to be already called just one time.
        expect(console.log.mock.calls.length).toBe(1);

        //You can also compare the entire console buffer (if there have been several console.log calls on the exercise)
        //expect(_buffer).toBe("Compare with the entire function buffer out");
    });
});