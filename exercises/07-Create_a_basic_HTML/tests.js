
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

test("Variable 'htmlDocument' should exist", function(){
    const file = rewire("./app.js");
    const htmlDocument = file.__get__('htmlDocument');
    expect(htmlDocument).toBeTruthy();
  });

it("'htmlDocument' should have the correct output", function () {
    const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
    expect(app_content).toMatch(/htmlDocument\s*\W\s*\w\s*\W\s*/);
  });
describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
    });
    afterEach(() => { jest.resetModules(); });

    it('console.log() function should display <html><head><title></title></head><body></body></html>', function () {
        const file = require("./app.js");

        //Expect the console log to have been called with "<html><head><title></title></head><body></body></html>" at least once
        expect(console.log).toHaveBeenCalledWith("<html><head><title></title></head><body></body></html>");
        //and I expect the console.log to be already called just one time.
        expect(console.log.mock.calls.length).toBe(1);

        //You can also compare the entire console buffer (if there have been several console.log calls on the exercise)
        //expect(_buffer).toBe("Compare with the entire function buffer out");
    });
});
