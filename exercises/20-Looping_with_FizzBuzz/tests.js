
const fs = require('fs');
const path = require('path');
let rewire = require('rewire');

jest.dontMock('fs');
//here we are going to store and accumulate (concatenate) all the console log's from the exercise
let _buffer = "";
let _log = console.log;

// let's override the console.log function to mock it,
// but we are also going to save what is supposed to be the output of the console inside _buffer

let countFizz = 0;
let countBuzz = 0;
let countFizzBuzz = 0;
global.console.log = console.log = jest.fn((text) => {
    if (text.toString().toLowerCase() === "fizzbuzz") { countFizzBuzz++ }
    else if (text.toString().toLowerCase() === "fizz") { countFizz++ }
    else if (text.toString().toLowerCase() === "buzz") { countBuzz++ }

    _buffer += text + "\n";

});

it('Use a for loop', function () {
    const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
    expect(app_content).toMatch(/for(\s*)\(/);
});


describe('All the javascript should match', function () {
    const file = require("./app.js");

    it('console.log() function to be called 100 times', function () {

        expect(console.log.mock.calls.length).toBe(100);
    });

    it('FizzBuzz to be called 6 times', function () {
        expect(countFizzBuzz).toBe(6);
    });

    it('Buzz to be called 14 times', function () {
        expect(countBuzz).toBe(14);
    });

    it('Fizz to be called 27 times', function () {
        expect(countFizz).toBe(27);
    }
    )
});
