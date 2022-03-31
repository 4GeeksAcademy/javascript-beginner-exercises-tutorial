
const fs = require('fs');
const path = require('path');
const rewire = require('rewire');
const app = rewire('./app.js');
const getAllStudentColors = app.__get__('getAllStudentColors');
const getColor = app.__get__('getColor');
jest.dontMock('fs');

let _buffer = "";
let _log = console.log;

global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

describe('All the javascript should match', function () {

    it('function getColor() should exist', function () {
        expect(getColor).not.toBe(undefined);
    });

    it('function getAllStudentColors() should exist', function () {
        expect(getAllStudentColors).not.toBe(undefined);
    });

    it('console.log() function should be called 10 times', function () {
        const file = require("./app.js");
        expect(console.log.mock.calls.length).toBe(10);
       
    });

    it('console.log() function should be called with a string', function () {
        const file = require("./app.js");
        expect(console.log).toHaveBeenCalledWith(expect.any(String));
    });

    it('console.log() function should not be called with argument black', function () {
        expect(console.log).not.toHaveBeenCalledWith("black");
    });
});