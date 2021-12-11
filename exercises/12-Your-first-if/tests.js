//here we are going to store and accumulate (concatenate) all the console log's from the exercise
let _buffer = "";
let _log = console.log;

global.prompt = jest.fn(() => 60);
// lets override the console.log function to mock it,
// but we are also going to save what supposed to be the ouput of the console inside _buffer
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const file = require("./app.js");

test('Trying with 60', function () {
    expect(console.log).toHaveBeenCalledWith("We'll be there in 5 minutes");
});
test('Your algorithm should use console.log at least one time, if you believe you are using it make sure it\'s not being conditionally ignored', function () {
    expect(console.log.mock.calls.length > 0).toBe(true);
});
