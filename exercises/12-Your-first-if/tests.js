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
test('Trying with 112', function () {
    global.prompt = jest.fn(() => 112);
    expect(console.log).toHaveBeenCalledWith("We still have a bit of driving left to go");
});
test('Trying with 50 or less', function () {
    global.prompt = jest.fn(() => 50);
    expect(console.log).toHaveBeenCalledWith("I'm parking. I'll see you right now");
    global.prompt = jest.fn(() => 45);
    expect(console.log).toHaveBeenCalledWith("I'm parking. I'll see you right now");
});
test('Your algorithm should use console.log at least one time, if you believe you are using it make sure it\'s not being conditionally ignored', function () {
    expect(console.log.mock.calls.length > 0).toBe(true);
});
