

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
    it('console.log() function should be called 99 times', function () {
        const file = require("./app.js");
        expect(console.log.mock.calls.length).toBe(100);
    });
    
    it('console.log() function should be called with proper lyrics for more than one bottle', function () {
        const file = require("./app.js");
        expect(console.log()).toContain("98 bottles of milk on the wall, 98 bottles of milk. Take one down and pass it around, 97 bottles of milk on the wall.");
    });

    it('console.log() function should be called with proper lyrics for one bottle', function () {
        const file = require("./app.js");
        expect(console.log()).toContain("1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.");
    });

    it('console.log() function should be called with proper lyrics for 0 bottles', function () {
        const file = require("./app.js");
        expect(console.log()).toContain("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.");
    });
    
});