const rewire = require("rewire");
const fs = require('fs');
const path = require('path');

jest.dontMock('fs');
//here we are going to store and accumulate (concatenate) all the console log's from the exercise
let _buffer = "";
let _log = console.log;

// lets override the console.log function to mock it,
// but we are also going to save what supposed to be the ouput of the console inside _buffer
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const file = require("./app.js");
describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
    });
    
    afterEach(() => { jest.resetModules(); });
    
    it('Function standardsMaker should exist', function () {
        const _app = rewire("./app.js")
        const functionExists = _app.__get__('standardsMaker');
        expect(functionExists).toBeTruthy();
    })
    
    it('console.log() function to be called 300 times with a string', function () {
        expect(console.log.mock.calls.length).toBe(300);
    });
    
    it('Use a for loop', function () {
        const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
        expect(app_content).toMatch(/for(\s*)\(/);
    });

    it('The output is not what we expect', function () {
        const app = require('./app.js');
        const text = "I will write questions if I'm stuck";
        expect(console.log).toHaveBeenCalledWith(text);
    });
});