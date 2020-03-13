
const fs = require('fs');
const path = require('path');

jest.dontMock('fs');

let _buffer = "";
let _log = console.log;

global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

describe('All the javascript should match', function () {
    const file = require("./app.js");

    it('console.log() function should be called 10 times', function () {

        expect(console.log.mock.calls.length).toBe(10);
    });

    it('console.log() function should be called with a string', function () {

        expect(console.log).toHaveBeenCalledWith(expect.any(String));
    });

    it('console.log() function should not be called with argument black', function () {

        expect(console.log).not.toHaveBeenCalledWith("black");
    });
});