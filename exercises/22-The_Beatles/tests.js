
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

it('Use a for loop', function () {
    const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
    expect(app_content).toMatch(/for(\s*)\(/);
});

test("Function sing should exist", function () {
    const file = rewire("./app.js");
    const sing = file.__get__('sing');
    expect(sing).toBeTruthy();
});

test("Function sing should return the exact lyrics of the song", function () {
    const file = rewire("./app.js");
    const sing = file.__get__('sing');
    expect(sing()).toBe('let it be, let it be, let it be, let it be, there will be an answer, let it be, let it be, let it be, let it be, let it be, whisper words of wisdom, let it be');
});


describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
    });
    afterEach(() => { jest.resetModules(); });

    it('console.log() function should be called with proper lyrics order', function () {

        const file = require("./app.js");

        expect(console.log).toHaveBeenCalledWith("let it be, let it be, let it be, let it be, there will be an answer, let it be, let it be, let it be, let it be, let it be, whisper words of wisdom, let it be");

        expect(console.log.mock.calls.length).toBe(1);
    });
});
