
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

test("Variable 'myVar1' should exist with the value 'Hello' ", function(){
    const file = rewire("./app.js");
    const myVar1 = file.__get__('myVar1');
    expect(myVar1).toBe("Hello");
  });
test("Variable 'myVar2' should exist with the value 'World' ", function(){
    const file = rewire("./app.js");
    const myVar2 = file.__get__('myVar2');
    expect(myVar2).toBe("World");
  });

describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
    });
    afterEach(() => { jest.resetModules(); });

    it('console.log() function should display Hello World', function () {

        //then I import the index.js (which should have the alert() call inside)
        const file = require("./app.js");

        //Expect the console log to have been called with "Hello World" at least once
        expect(console.log).toHaveBeenCalledWith("Hello World");
        //and I expect the console.log to be already called just one time.
        expect(console.log.mock.calls.length).toBe(1);

        //You can also compare the entire console buffer (if there have been several console.log calls on the exercise)
        //expect(_buffer).toBe("Compare with the entire function buffer out");
    });
});
