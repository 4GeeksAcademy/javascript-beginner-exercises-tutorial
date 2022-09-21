
const fs = require('fs');
const path = require('path');
let rewire = require('rewire');

const js = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');

jest.dontMock('fs');
//here we are going to store and accumulate (concatenate) all the console log's from the exercise
let _buffer = "";
let _log = console.log;

// lets override the console.log function to mock it,
// but we are also going to save what supposed to be the ouput of the console inside _buffer
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");
const file = rewire("./app.js");

describe('All the javascript should match', function () {
    it("Function generateRandom() should exist", function(){
        const generateRandom = file.__get__('generateRandom');
        expect(generateRandom).toBeTruthy();
    });

    it("Function generateRandom() should return a random number between 0 and 9", function(){
        const generateRandom = file.__get__('generateRandom');
        expect(generateRandom()).toBeGreaterThanOrEqual(0);
        expect(generateRandom()).toBeLessThanOrEqual(9);
    });

    it("You must use Math.random() to generate the random number between 0 and 9", () => {
        const regex = /Math\s*\.\s*random/gm
        expect(regex.test(js.toString())).toBeTruthy();
    })
});