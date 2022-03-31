const fs = require('fs');
const path = require('path');
const js = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');

jest.dontMock('fs');
//here we are going to store and accumulate (concatenate) all the console log's from the exercise
let _buffer = "";
let _log = console.log;

// lets override the console.log function to mock it,
// but we are also going to save what supposed to be the ouput of the console inside _buffer
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

describe('All the javascript should match', function () {
    it('console.log() function should be called 99 or 100 times (depending on your approach)', function () {
        const file = require("./app.js");
        expect([100,99].includes(console.log.mock.calls.length)).toBeTruthy();
    });
    
    it('console.log() function should be called with proper lyrics for more than one bottle', function () {
        const file = require("./app.js");
        for(let i = 99; i > 2; i--){
            expect(_buffer).toContain(`${i} bottles of milk on the wall, ${i} bottles of milk. Take one down and pass it around, ${i-1} bottles of milk on the wall.`);
        }
    });
    
    it('console.log() function should be called with proper lyrics for two bottle', function () {
        const file = require("./app.js");
        expect(_buffer).toContain("2 bottles of milk on the wall, 2 bottles of milk. Take one down and pass it around, 1 bottle of milk on the wall.");
    });

    it('console.log() function should be called with proper lyrics for one bottle', function () {
        const file = require("./app.js");
        expect(_buffer).toContain("1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.");
    });

    it('console.log() function should be called with proper lyrics for 0 bottles', function () {
        const file = require("./app.js");
        expect(_buffer).toContain("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.");
    });

    it('You should use a for loop to print the lyrics of the song', function () {
        const file = require("./app.js");
        let regex = /for\s*\(/gm
        expect(regex.test(js.toString())).toBeTruthy();
    });
});
