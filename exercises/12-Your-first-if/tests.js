//here we are going to store and accumulate (concatenate) all the console log's from the exercise
let _buffer = "";
let _log = console.log;

const stdin = [].concat(__stdin);
global.prompt = jest.fn(() => 60);
// lets override the console.log function to mock it,
// but we are also going to save what supposed to be the ouput of the console inside _buffer
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const file = require("./app.js");

test('Tryig with 60', function () {
    expect(console.log).toHaveBeenCalledWith("Buy me some coffee, you cheapster!");
});
test('at least 1 console.log() call', function () {
    expect(console.log.mock.calls.length).toBe(1);
});