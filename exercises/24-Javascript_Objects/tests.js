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

const file = rewire("./app.js");
const family = file.__get__("family");

describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
    });
    afterEach(() => { jest.resetModules(); });

    it("John Doe's fourth lucky number should be 33" , function(){
        expect(family.members[0].luckyNumbers[3]).toBe(33)
    })

    it('console.log() function should be called with 94 - sum of all family lucky numbers', function () {
        const file = require("./app.js");
        expect(_buffer).toBe("94\n");
        //and I expect the console.log to be already called just one time.
        expect(console.log.mock.calls.length).toBe(1);

    });
});
